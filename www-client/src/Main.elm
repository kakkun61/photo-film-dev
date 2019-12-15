port module Main exposing (..)

-- Press buttons to increment and decrement a counter.
--
-- Read how it works:
--   https://guide.elm-lang.org/architecture/buttons.html
--

import Browser
import Html exposing (..)
import Html.Attributes as A exposing (..)
import Html.Events exposing (..)
import List
import String
import Time


port playAlarm : () -> Cmd msg


port stopAlarm : () -> Cmd msg


port alert : String -> Cmd msg


port setNoSleep : Bool -> Cmd msg


type alias TimeSpan =
    Int


type alias TimeSpans =
    { soak : TimeSpan
    , dev : TimeSpan
    , stop : TimeSpan
    , fix : TimeSpan
    , rinse : TimeSpan
    , wet : TimeSpan
    }


type Page
    = SetPage
    | RunPage RunStep


type RunStep
    = SoakStep
    | DevStep
    | StopStep
    | FixStep
    | RinseStep
    | WetStep
    | EndStep


type RunState
    = RunState
    | PauseState


type alias TimeInput =
    { minutes : String, seconds : String }


type alias Input =
    { soak : TimeInput
    , dev : TimeInput
    , stop : TimeInput
    , fix : TimeInput
    , rinse : TimeInput
    , wet : TimeInput
    }


type Model
    = SetModel { input : Input }
    | RunModel { timeSpans : TimeSpans, state : RunState, step : RunStep, rest : TimeSpans }


type EventSource
    = SoakMinutesSource
    | SoakSecondsSource
    | DevMinutesSource
    | DevSecondsSource
    | StopMinutesSource
    | StopSecondsSource
    | FixMinutesSource
    | FixSecondsSource
    | RinseMinutesSource
    | RinseSecondsSource
    | WetMinutesSource
    | WetSecondsSource
    | IntervalMinutesSource
    | IntervalSecondsSource


type Msg
    = GoRunMsg
    | GoSetMsg
    | SetMsg EventSource String
    | TickMsg Time.Posix
    | NextMsg
    | RestartMsg
    | PauseMsg
    | InitMsg


fromSecondsToMinutesSeconds : TimeSpan -> { sign : String, minutes : Int, seconds : Int }
fromSecondsToMinutesSeconds secs =
    if secs < 0 then
        let
            secs_ =
                -1 * secs
        in
        { sign = "-", minutes = secs_ // 60, seconds = modBy 60 secs_ }

    else
        { sign = "", minutes = secs // 60, seconds = modBy 60 secs }


fromTimeSpansToInput : TimeSpans -> Input
fromTimeSpansToInput timeSpans =
    { soak =
        let
            { minutes, seconds } =
                fromSecondsToMinutesSeconds timeSpans.soak
        in
        { minutes = String.fromInt minutes, seconds = String.fromInt seconds }
    , dev =
        let
            { minutes, seconds } =
                fromSecondsToMinutesSeconds timeSpans.dev
        in
        { minutes = String.fromInt minutes, seconds = String.fromInt seconds }
    , stop =
        let
            { minutes, seconds } =
                fromSecondsToMinutesSeconds timeSpans.stop
        in
        { minutes = String.fromInt minutes, seconds = String.fromInt seconds }
    , fix =
        let
            { minutes, seconds } =
                fromSecondsToMinutesSeconds timeSpans.fix
        in
        { minutes = String.fromInt minutes, seconds = String.fromInt seconds }
    , rinse =
        let
            { minutes, seconds } =
                fromSecondsToMinutesSeconds timeSpans.rinse
        in
        { minutes = String.fromInt minutes, seconds = String.fromInt seconds }
    , wet =
        let
            { minutes, seconds } =
                fromSecondsToMinutesSeconds timeSpans.wet
        in
        { minutes = String.fromInt minutes, seconds = String.fromInt seconds }
    }


fromInputToTimeSpans : Input -> Maybe TimeSpans
fromInputToTimeSpans input =
    case List.map String.toInt [ input.soak.minutes, input.soak.seconds, input.dev.minutes, input.dev.seconds, input.stop.minutes, input.stop.seconds, input.fix.minutes, input.fix.seconds, input.rinse.minutes, input.rinse.seconds, input.wet.minutes, input.wet.seconds ] of
        [ Just skm, Just sks, Just dvm, Just dvs, Just stm, Just sts, Just fxm, Just fxs, Just rsm, Just rss, Just wtm, Just wts ] ->
            Just
                { soak = 60 * skm + sks
                , dev = 60 * dvm + dvs
                , stop = 60 * stm + sts
                , fix = 60 * fxm + fxs
                , rinse = 60 * rsm + rss
                , wet = 60 * wtm + wts
                }

        _ ->
            Nothing


stepOrder : RunStep -> RunStep -> Order
stepOrder s0 s1 =
    case ( s0, s1 ) of
        ( SoakStep, SoakStep ) ->
            EQ

        ( SoakStep, _ ) ->
            LT

        ( DevStep, SoakStep ) ->
            GT

        ( DevStep, DevStep ) ->
            EQ

        ( DevStep, _ ) ->
            LT

        ( StopStep, SoakStep ) ->
            GT

        ( StopStep, DevStep ) ->
            GT

        ( StopStep, StopStep ) ->
            EQ

        ( StopStep, _ ) ->
            LT

        ( FixStep, FixStep ) ->
            EQ

        ( FixStep, RinseStep ) ->
            LT

        ( FixStep, WetStep ) ->
            LT

        ( FixStep, EndStep ) ->
            LT

        ( FixStep, _ ) ->
            GT

        ( RinseStep, RinseStep ) ->
            EQ

        ( RinseStep, WetStep ) ->
            LT

        ( RinseStep, EndStep ) ->
            LT

        ( RinseStep, _ ) ->
            GT

        ( WetStep, WetStep ) ->
            EQ

        ( WetStep, EndStep ) ->
            LT

        ( WetStep, _ ) ->
            GT

        ( EndStep, EndStep ) ->
            EQ

        ( EndStep, _ ) ->
            GT


nextStep : RunStep -> RunStep
nextStep step =
    case step of
        SoakStep ->
            DevStep

        DevStep ->
            StopStep

        StopStep ->
            FixStep

        FixStep ->
            RinseStep

        RinseStep ->
            WetStep

        WetStep ->
            EndStep

        EndStep ->
            EndStep


main =
    Browser.element { init = init, update = update, view = view, subscriptions = subscriptions }


init : {} -> ( Model, Cmd Msg )
init {} =
    let
        timeSpans =
            { soak = 30
            , dev = 5 * 60
            , stop = 2 * 60
            , fix = 10 * 60
            , rinse = 5 * 60
            , wet = 30
            }
    in
    ( SetModel { input = fromTimeSpansToInput timeSpans }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model ) of
        ( GoRunMsg, SetModel { input } ) ->
            case fromInputToTimeSpans input of
                Just timeSpans ->
                    ( RunModel
                        { timeSpans = timeSpans
                        , state = RunState
                        , step = SoakStep
                        , rest = timeSpans
                        }
                    , setNoSleep True
                    )

                Nothing ->
                    ( model, alert "数字のみを入力してください" )

        ( TickMsg _, RunModel runModel ) ->
            let
                { timeSpans, step, rest } =
                    runModel
            in
            case step of
                SoakStep ->
                    let
                        rest1 =
                            rest.soak - 1

                        rest_ =
                            { rest | soak = rest1 }
                    in
                    ( RunModel { runModel | rest = rest_ }
                    , if rest1 == 0 then
                        playAlarm ()

                      else
                        Cmd.none
                    )

                DevStep ->
                    let
                        rest1 =
                            rest.dev - 1

                        rest_ =
                            { rest | dev = rest1 }
                    in
                    ( RunModel { runModel | rest = rest_ }
                    , if rest1 == 0 then
                        playAlarm ()

                      else
                        Cmd.none
                    )

                StopStep ->
                    let
                        rest1 =
                            rest.stop - 1

                        rest_ =
                            { rest | stop = rest1 }
                    in
                    ( RunModel { runModel | rest = rest_ }
                    , if rest1 == 0 then
                        playAlarm ()

                      else
                        Cmd.none
                    )

                FixStep ->
                    let
                        rest1 =
                            rest.fix - 1

                        rest_ =
                            { rest | fix = rest1 }
                    in
                    ( RunModel { runModel | rest = rest_ }
                    , if rest1 == 0 then
                        playAlarm ()

                      else
                        Cmd.none
                    )

                RinseStep ->
                    let
                        rest1 =
                            rest.rinse - 1

                        rest_ =
                            { rest | rinse = rest1 }
                    in
                    ( RunModel { runModel | rest = rest_ }
                    , if rest1 == 0 then
                        playAlarm ()

                      else
                        Cmd.none
                    )

                WetStep ->
                    let
                        rest1 =
                            rest.wet - 1

                        rest_ =
                            { rest | wet = rest1 }
                    in
                    ( RunModel { runModel | rest = rest_ }
                    , if rest1 == 0 then
                        playAlarm ()

                      else
                        Cmd.none
                    )

                EndStep ->
                    ( RunModel runModel, Cmd.none )

        ( NextMsg, RunModel runModel ) ->
            let
                step_ =
                    nextStep runModel.step
            in
            case step_ of
                EndStep ->
                    ( RunModel { runModel | step = step_, state = PauseState }, Cmd.batch [stopAlarm (), setNoSleep False] )

                _ ->
                    ( RunModel { runModel | step = step_, state = RunState }, Cmd.batch [stopAlarm (), setNoSleep True] )

        ( GoSetMsg, RunModel { timeSpans } ) ->
            ( SetModel { input = fromTimeSpansToInput timeSpans }, Cmd.batch [stopAlarm (), setNoSleep False] )

        ( PauseMsg, RunModel runModel ) ->
            ( RunModel { runModel | state = PauseState }, Cmd.batch [stopAlarm (), setNoSleep False] )

        ( RestartMsg, RunModel runModel ) ->
            ( RunModel { runModel | state = RunState }, setNoSleep True )

        ( InitMsg, RunModel runModel ) ->
            let
                spans =
                    runModel.timeSpans
            in
            ( RunModel { runModel | state = PauseState, rest = spans, step = SoakStep }, Cmd.batch [stopAlarm (), setNoSleep False] )

        ( SetMsg SoakMinutesSource value, SetModel { input } ) ->
            let
                timeInput =
                    input.soak
            in
            ( SetModel { input = { input | soak = { timeInput | minutes = value } } }, Cmd.none )

        ( SetMsg SoakSecondsSource value, SetModel { input } ) ->
            let
                timeInput =
                    input.soak
            in
            ( SetModel { input = { input | soak = { timeInput | seconds = value } } }, Cmd.none )

        ( SetMsg DevMinutesSource value, SetModel { input } ) ->
            let
                timeInput =
                    input.dev
            in
            ( SetModel { input = { input | dev = { timeInput | minutes = value } } }, Cmd.none )

        ( SetMsg DevSecondsSource value, SetModel { input } ) ->
            let
                timeInput =
                    input.dev
            in
            ( SetModel { input = { input | dev = { timeInput | seconds = value } } }, Cmd.none )

        ( SetMsg StopMinutesSource value, SetModel { input } ) ->
            let
                timeInput =
                    input.stop
            in
            ( SetModel { input = { input | stop = { timeInput | minutes = value } } }, Cmd.none )

        ( SetMsg StopSecondsSource value, SetModel { input } ) ->
            let
                timeInput =
                    input.stop
            in
            ( SetModel { input = { input | stop = { timeInput | seconds = value } } }, Cmd.none )

        ( SetMsg FixMinutesSource value, SetModel { input } ) ->
            let
                timeInput =
                    input.fix
            in
            ( SetModel { input = { input | fix = { timeInput | minutes = value } } }, Cmd.none )

        ( SetMsg FixSecondsSource value, SetModel { input } ) ->
            let
                timeInput =
                    input.fix
            in
            ( SetModel { input = { input | fix = { timeInput | seconds = value } } }, Cmd.none )

        ( SetMsg RinseMinutesSource value, SetModel { input } ) ->
            let
                timeInput =
                    input.rinse
            in
            ( SetModel { input = { input | rinse = { timeInput | minutes = value } } }, Cmd.none )

        ( SetMsg RinseSecondsSource value, SetModel { input } ) ->
            let
                timeInput =
                    input.rinse
            in
            ( SetModel { input = { input | rinse = { timeInput | seconds = value } } }, Cmd.none )

        ( SetMsg WetMinutesSource value, SetModel { input } ) ->
            let
                timeInput =
                    input.wet
            in
            ( SetModel { input = { input | wet = { timeInput | minutes = value } } }, Cmd.none )

        ( SetMsg WetSecondsSource value, SetModel { input } ) ->
            let
                timeInput =
                    input.wet
            in
            ( SetModel { input = { input | wet = { timeInput | seconds = value } } }, Cmd.none )

        _ ->
            ( model, alert "unexpected: update" )


subscriptions : Model -> Sub Msg
subscriptions model =
    case model of
        SetModel _ ->
            Sub.none

        RunModel { state } ->
            case state of
                RunState ->
                    Time.every 1000 TickMsg

                PauseState ->
                    Sub.none


stepClass : Order -> String
stepClass order =
    case order of
        LT ->
            "step-yet"

        EQ ->
            "step-current"

        GT ->
            "step-done"


fillZero : String -> String
fillZero str =
    if String.length str < 2 then
        "0" ++ str

    else
        str


view : Model -> Html Msg
view model =
    case model of
        SetModel setModel ->
            div []
                [ table []
                    [ tbody []
                        [ tr []
                            [ td [ class "label" ] [ text "前浴" ]
                            , td []
                                [ input [ type_ "number", A.min "0", A.max "59", value "0", value setModel.input.soak.minutes, onInput (SetMsg SoakMinutesSource) ] []
                                , text "' "
                                , input [ type_ "number", A.min "0", A.max "59", value "0", value setModel.input.soak.seconds, onInput (SetMsg SoakSecondsSource) ] []
                                ]
                            ]
                        , tr []
                            [ td [ class "label" ] [ text "現像" ]
                            , td []
                                [ input [ type_ "number", A.min "0", A.max "59", value "0", value setModel.input.dev.minutes, onInput (SetMsg DevMinutesSource) ] []
                                , text "' "
                                , input [ type_ "number", A.min "0", A.max "59", value "0", value setModel.input.dev.seconds, onInput (SetMsg DevSecondsSource) ] []
                                ]
                            ]
                        , tr []
                            [ td [ class "label" ] [ text "停止" ]
                            , td []
                                [ input [ type_ "number", A.min "0", A.max "59", value "0", value setModel.input.stop.minutes, onInput (SetMsg StopMinutesSource) ] []
                                , text "' "
                                , input [ type_ "number", A.min "0", A.max "59", value "0", value setModel.input.stop.seconds, onInput (SetMsg StopSecondsSource) ] []
                                ]
                            ]
                        , tr []
                            [ td [ class "label" ] [ text "定着" ]
                            , td []
                                [ input [ type_ "number", A.min "0", A.max "59", value "0", value setModel.input.fix.minutes, onInput (SetMsg FixMinutesSource) ] []
                                , text "' "
                                , input [ type_ "number", A.min "0", A.max "59", value "0", value setModel.input.fix.seconds, onInput (SetMsg FixSecondsSource) ] []
                                ]
                            ]
                        , tr []
                            [ td [ class "label" ] [ text "水洗" ]
                            , td []
                                [ input [ type_ "number", A.min "0", A.max "59", value "0", value setModel.input.rinse.minutes, onInput (SetMsg RinseMinutesSource) ] []
                                , text "' "
                                , input [ type_ "number", A.min "0", A.max "59", value "0", value setModel.input.rinse.seconds, onInput (SetMsg RinseSecondsSource) ] []
                                ]
                            ]
                        , tr []
                            [ td [ class "label" ] [ text "防滴" ]
                            , td []
                                [ input [ type_ "number", A.min "0", A.max "59", value "0", value setModel.input.wet.minutes, onInput (SetMsg WetMinutesSource) ] []
                                , text "' "
                                , input [ type_ "number", A.min "0", A.max "59", value "0", value setModel.input.wet.seconds, onInput (SetMsg WetSecondsSource) ] []
                                ]
                            ]
                        ]
                    ]
                , button [ onClick GoRunMsg ] [ text "開始" ]
                ]

        RunModel { timeSpans, step, rest, state } ->
            div []
                [ table []
                    [ tbody []
                        [ let
                            order =
                                stepOrder step SoakStep
                          in
                          tr []
                            [ td
                                [ class <| stepClass order
                                , class "label"
                                ]
                                [ text "前浴" ]
                            , let
                                { sign, minutes, seconds } =
                                    fromSecondsToMinutesSeconds rest.soak
                              in
                              td
                                ([ class <| stepClass order
                                 , class "time"
                                 ]
                                    ++ (if sign == "" then
                                            [ class "rest-plus" ]

                                        else
                                            []
                                       )
                                )
                                [ text <| sign ++ String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds)
                                ]
                            , td
                                [ class <| stepClass order ]
                                [ text "/" ]
                            , td
                                [ class <| stepClass order
                                , class "time"
                                ]
                                [ let
                                    { minutes, seconds } =
                                        fromSecondsToMinutesSeconds timeSpans.soak
                                  in
                                  text <| String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds)
                                ]
                            ]
                        , let
                            order =
                                stepOrder step DevStep
                          in
                          tr []
                            [ td
                                [ class <| stepClass order
                                , class "label"
                                ]
                                [ text "現像" ]
                            , let
                                { sign, minutes, seconds } =
                                    fromSecondsToMinutesSeconds rest.dev
                              in
                              td
                                ([ class <| stepClass order
                                 , class "time"
                                 ]
                                    ++ (if sign == "" then
                                            [ class "rest-plus" ]

                                        else
                                            []
                                       )
                                )
                                [ text <| sign ++ String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds)
                                ]
                            , td
                                [ class <| stepClass order ]
                                [ text "/" ]
                            , td
                                [ class <| stepClass order
                                , class "time"
                                ]
                                [ let
                                    { minutes, seconds } =
                                        fromSecondsToMinutesSeconds timeSpans.dev
                                  in
                                  text <| String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds)
                                ]
                            ]
                        , let
                            order =
                                stepOrder step StopStep
                          in
                          tr []
                            [ td
                                [ class <| stepClass order
                                , class "label"
                                ]
                                [ text "停止" ]
                            , let
                                { sign, minutes, seconds } =
                                    fromSecondsToMinutesSeconds rest.stop
                              in
                              td
                                ([ class <| stepClass order
                                 , class "time"
                                 ]
                                    ++ (if sign == "" then
                                            [ class "rest-plus" ]

                                        else
                                            []
                                       )
                                )
                                [ text <| sign ++ String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds)
                                ]
                            , td
                                [ class <| stepClass order ]
                                [ text "/" ]
                            , td
                                [ class <| stepClass order
                                , class "time"
                                ]
                                [ let
                                    { minutes, seconds } =
                                        fromSecondsToMinutesSeconds timeSpans.stop
                                  in
                                  text <| String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds)
                                ]
                            ]
                        , let
                            order =
                                stepOrder step FixStep
                          in
                          tr []
                            [ td
                                [ class <| stepClass order
                                , class "label"
                                ]
                                [ text "定着" ]
                            , let
                                { sign, minutes, seconds } =
                                    fromSecondsToMinutesSeconds rest.fix
                              in
                              td
                                ([ class <| stepClass order
                                 , class "time"
                                 ]
                                    ++ (if sign == "" then
                                            [ class "rest-plus" ]

                                        else
                                            []
                                       )
                                )
                                [ text <| sign ++ String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds)
                                ]
                            , td
                                [ class <| stepClass order ]
                                [ text "/" ]
                            , td
                                [ class <| stepClass order
                                , class "time"
                                ]
                                [ let
                                    { minutes, seconds } =
                                        fromSecondsToMinutesSeconds timeSpans.fix
                                  in
                                  text <| String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds)
                                ]
                            ]
                        , let
                            order =
                                stepOrder step RinseStep
                          in
                          tr []
                            [ td
                                [ class <| stepClass order
                                , class "label"
                                ]
                                [ text "水洗" ]
                            , let
                                { sign, minutes, seconds } =
                                    fromSecondsToMinutesSeconds rest.rinse
                              in
                              td
                                ([ class <| stepClass order
                                 , class "time"
                                 ]
                                    ++ (if sign == "" then
                                            [ class "rest-plus" ]

                                        else
                                            []
                                       )
                                )
                                [ text <| sign ++ String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds)
                                ]
                            , td
                                [ class <| stepClass order ]
                                [ text "/" ]
                            , td
                                [ class <| stepClass order
                                , class "time"
                                ]
                                [ let
                                    { minutes, seconds } =
                                        fromSecondsToMinutesSeconds timeSpans.rinse
                                  in
                                  text <| String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds)
                                ]
                            ]
                        , let
                            order =
                                stepOrder step WetStep
                          in
                          tr []
                            [ td
                                [ class <| stepClass order
                                , class "label"
                                ]
                                [ text "防滴" ]
                            , let
                                { sign, minutes, seconds } =
                                    fromSecondsToMinutesSeconds rest.wet
                              in
                              td
                                ([ class <| stepClass order
                                 , class "time"
                                 ]
                                    ++ (if sign == "" then
                                            [ class "rest-plus" ]

                                        else
                                            []
                                       )
                                )
                                [ text <| sign ++ String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds)
                                ]
                            , td
                                [ class <| stepClass order ]
                                [ text "/" ]
                            , td
                                [ class <| stepClass order
                                , class "time"
                                ]
                                [ let
                                    { minutes, seconds } =
                                        fromSecondsToMinutesSeconds timeSpans.wet
                                  in
                                  text <| String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds)
                                ]
                            ]
                        ]
                    ]
                , div []
                    [ case state of
                        RunState ->
                            button [ class "pause-restart", onClick PauseMsg ] [ text "一時停止" ]

                        PauseState ->
                            button [ class "pause-restart", onClick RestartMsg ] [ text "再開" ]
                    , button [ onClick NextMsg ] [ text "次へ" ]
                    , button [ onClick InitMsg ] [ text "初期化" ]
                    , div [] [ button [ onClick GoSetMsg ] [ text "入力" ] ]
                    ]
                ]
