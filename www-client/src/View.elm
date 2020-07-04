module View exposing
    ( content
    , drawer
    , fab
    , loadingProgress
    , logInDialog
    , topAppBar
    )

import Dict
import Html
    exposing
        ( Html
        , div
        , h2
        , h3
        , i
        , p
        , span
        , table
        , tbody
        , td
        , text
        , tr
        )
import Html.Attributes as A exposing (class, href, style)
import Html.Events exposing (onClick)
import Json.Decode as Decode
import Keyboard.Event exposing (decodeKeyCode)
import Loading
import Material
import Material.Button as Button
import Material.Dialog as Dialog
import Material.Drawer.Modal as Drawer
import Material.Fab as Fab
import Material.List as UiList
import Material.Options as Options
import Material.TextField as TextField
import Material.TopAppBar as TopAppBar
import Model
    exposing
        ( AppModel(..)
        , LoggedIn(..)
        , Model
        , RunState(..)
        , RunStep
        , Step
        , TimeInputs
        , TimeSpans
        , fromSecondsToMinutesSeconds
        , fromStepToRunStep
        )
import Model.RunStep as RunStep
import Model.Sign as Sign
import Model.Step as Step
import Model.TimeHand as TimeHand
import Msg exposing (Msg)
import Msg.Component as Component
import Msg.LogIn.Provider
import Text as T exposing (Language)
import UUID


topAppBar : Model Msg -> List (Html Msg)
topAppBar model =
    case model.appModel of
        EditModel editModel ->
            [ TopAppBar.view
                Msg.Mdc
                "top-app-bar"
                model.mdc
                [ TopAppBar.fixed ]
                (if editModel.nameTextFieldOpen then
                    [ TopAppBar.section
                        [ Options.css "background-color" "white" ]
                        [ TextField.view
                            Msg.Mdc
                            "edit-name"
                            model.mdc
                            [ TextField.value model.recipeName
                            , TextField.trailingIcon "close"
                            , TextField.fullwidth
                            , TextField.autofocus
                            , TextField.onTrailingIconClick <| Msg.NameTextField Msg.Hide
                            , TextField.nativeControl [ Options.css "padding-left" "16px" ]
                            , Options.onInput <| Msg.Input Component.Name
                            , Options.onChange <| Msg.Change Component.Name
                            , Options.on "keypress"
                                (decodeKeyCode
                                    |> Decode.andThen
                                        (\kc ->
                                            case kc of
                                                13 ->
                                                    Decode.succeed <| Msg.NameTextField Msg.Hide

                                                _ ->
                                                    Decode.fail ""
                                        )
                                )
                            ]
                            []
                        ]
                    ]

                 else
                    [ TopAppBar.section
                        [ TopAppBar.alignStart ]
                        [ TopAppBar.navigationIcon
                            Msg.Mdc
                            "menu"
                            model.mdc
                            [ Options.onClick <| Msg.Drawer Msg.Show ]
                            "menu"
                        , TopAppBar.title
                            []
                            [ text model.recipeName ]
                        ]
                    , TopAppBar.section
                        [ TopAppBar.alignEnd ]
                        (case model.loggedIn of
                            NotLoggedIn ->
                                []

                            LoggedIn loggedIn ->
                                case loggedIn.recipeId of
                                    Nothing ->
                                        []

                                    Just _ ->
                                        [ TopAppBar.actionItem
                                            Msg.Mdc
                                            "edit-name"
                                            model.mdc
                                            [ Options.onClick <| Msg.NameTextField Msg.Show ]
                                            "edit"
                                        ]
                        )
                    ]
                )
            ]

        RunModel { state } ->
            [ TopAppBar.view Msg.Mdc
                "top-app-bar"
                model.mdc
                [ TopAppBar.fixed ]
                [ TopAppBar.section [ TopAppBar.alignStart ]
                    [ TopAppBar.navigationIcon
                        Msg.Mdc
                        "set"
                        model.mdc
                        [ Options.onClick Msg.GoEdit ]
                        "arrow_back"
                    , TopAppBar.title [] [ text model.recipeName ]
                    ]
                , TopAppBar.section [ TopAppBar.alignEnd ]
                    [ case state of
                        RunState ->
                            TopAppBar.actionItem
                                Msg.Mdc
                                "pause"
                                model.mdc
                                [ Options.onClick Msg.Pause ]
                                "pause"

                        PauseState ->
                            TopAppBar.actionItem
                                Msg.Mdc
                                "restart"
                                model.mdc
                                [ Options.onClick Msg.Restart ]
                                "play_arrow"
                    , TopAppBar.actionItem
                        Msg.Mdc
                        "reset"
                        model.mdc
                        [ Options.onClick Msg.Init ]
                        "refresh"
                    ]
                ]
            ]


drawer : Model Msg -> List (Html Msg)
drawer model =
    case model.appModel of
        EditModel editModel ->
            [ Drawer.view
                Msg.Mdc
                "drawer"
                model.mdc
                [ Drawer.open |> Options.when editModel.drawerOpen ]
                [ Drawer.header []
                    [ i
                        [ class "material-icons"
                        , style "font-size" "46px"
                        , style "margin-right" "12px"
                        , style "vertical-align" "text-bottom"
                        ]
                        [ text "face" ]
                    , span
                        [ style "width" "165px"
                        , style "display" "inline-block"
                        ]
                        [ Options.styled
                            h3
                            [ Drawer.title ]
                            [ text <|
                                case model.loggedIn of
                                    LoggedIn loggedIn ->
                                        loggedIn.user.displayName

                                    NotLoggedIn ->
                                        T.notLoggedIn model.lang
                            ]
                        , div
                            [ style "text-align" "right", style "margin-top" "8px" ]
                            [ case model.loggedIn of
                                LoggedIn _ ->
                                    Button.view
                                        Msg.Mdc
                                        "log-out"
                                        model.mdc
                                        [ Button.ripple
                                        , Button.onClick Msg.LogOut
                                        ]
                                        [ text <| T.logOut model.lang ]

                                NotLoggedIn ->
                                    Button.view
                                        Msg.Mdc
                                        "log-in"
                                        model.mdc
                                        [ Button.ripple
                                        , Button.onClick <| Msg.LogInDialog Msg.Show
                                        ]
                                        [ text <| T.logIn model.lang ]
                            ]
                        ]
                    ]
                , Drawer.content
                    []
                    [ UiList.nav
                        Msg.Mdc
                        "drawer-list"
                        model.mdc
                        [ UiList.singleSelection
                        , UiList.useActivated
                        ]
                        ((case model.loggedIn of
                            LoggedIn loggedIn ->
                                List.map
                                    (\( id, recipe ) ->
                                        UiList.li
                                            ((Options.onClick <| Msg.SelectRecipe recipe)
                                                :: (if Just id == Maybe.map UUID.toString loggedIn.recipeId then
                                                        [ UiList.activated ]

                                                    else
                                                        []
                                                   )
                                            )
                                            [ UiList.graphicIcon [] "timer", text recipe.name ]
                                    )
                                    (Dict.toList loggedIn.recipes)
                                    ++ [ UiList.li
                                            [ Options.onClick Msg.NewRecipe ]
                                            [ UiList.graphicIcon [] "add_circle_outline"
                                            , text <| T.addRecipe model.lang
                                            ]
                                       , UiList.divider [] []
                                       ]

                            NotLoggedIn ->
                                []
                         )
                            ++ [ UiList.a
                                    [ Options.attribute (href "/credit.html") ]
                                    [ UiList.graphicIcon [] "copyright"
                                    , text <| T.credit model.lang
                                    ]
                               ]
                        )
                    ]
                ]
            , Drawer.scrim [ Options.onClick (Msg.Drawer Msg.Hide) ] []
            ]

        RunModel _ ->
            []


content : Model Msg -> List (Html Msg)
content model =
    case model.appModel of
        EditModel _ ->
            [ Options.styled
                div
                [ TopAppBar.fixedAdjust ]
                [ let
                    timeInputs =
                        case model.loggedIn of
                            LoggedIn loggedIn ->
                                loggedIn.recipeId |> Maybe.map (\_ -> model.timeInputs)

                            NotLoggedIn ->
                                Just model.timeInputs
                  in
                  case timeInputs of
                    Just timeInputs_ ->
                        div
                            [ class "content" ]
                            [ table []
                                [ tbody [] <|
                                    List.map (\step -> editContentRow step model.lang timeInputs_ model.mdc) <|
                                        Step.range Step.Soak Step.Wet
                                ]
                            ]

                    Nothing ->
                        div
                            [ class "no-recipe" ]
                            [ p [] [ text <| T.noRecipes model.lang ] ]
                ]
            ]

        RunModel runModel ->
            [ Options.styled
                div
                [ TopAppBar.fixedAdjust ]
                [ div
                    [ class "content" ]
                    [ table []
                        [ tbody [] <|
                            List.map (\step -> runContentRow step model.lang runModel) <|
                                Step.range Step.Soak Step.Wet
                        ]
                    ]
                ]
            ]


fab : Model Msg -> List (Html Msg)
fab model =
    case model.appModel of
        EditModel _ ->
            let
                show =
                    case model.loggedIn of
                        LoggedIn loggedIn ->
                            case
                                loggedIn.recipeId
                                    |> Maybe.andThen (\recipeId -> Dict.get (UUID.toString recipeId) loggedIn.recipes)
                            of
                                Just _ ->
                                    True

                                Nothing ->
                                    False

                        NotLoggedIn ->
                            True
            in
            if show then
                [ Fab.view
                    Msg.Mdc
                    "fab"
                    model.mdc
                    [ Fab.ripple
                    , Fab.icon "play_arrow"
                    , Options.onClick Msg.GoRun
                    ]
                    []
                ]

            else
                []

        RunModel _ ->
            [ Fab.view
                Msg.Mdc
                "fab"
                model.mdc
                [ Fab.ripple
                , Fab.icon "skip_next"
                , Options.onClick Msg.Next
                ]
                []
            ]


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


contentRowLabel : Step -> Language -> String
contentRowLabel step lang =
    case step of
        Step.Soak ->
            T.soak lang

        Step.Dev ->
            T.dev lang

        Step.Stop ->
            T.stop lang

        Step.Fix ->
            T.fix lang

        Step.Rinse ->
            T.rinse lang

        Step.Wet ->
            T.wet lang


editContentRow : Step -> Language -> TimeInputs -> Material.Model Msg -> Html Msg
editContentRow rowStep lang timeInputs mdc =
    let
        label =
            contentRowLabel rowStep

        { minutes, seconds } =
            Step.get rowStep timeInputs
    in
    tr []
        [ td [ class "label" ] [ text <| label lang ]
        , td [ class "input" ]
            [ TextField.view
                Msg.Mdc
                ("input-" ++ Step.toString rowStep ++ "-minutes")
                mdc
                [ Options.cs "input-time"
                , TextField.type_ "number"
                , TextField.nativeControl [ Options.attribute <| A.min "0" ]
                , TextField.value minutes
                , Options.onInput <| Msg.Input <| Component.Time rowStep TimeHand.Minutes
                , Options.onChange <| Msg.Change <| Component.Time rowStep TimeHand.Minutes
                ]
                []
            , text "' "
            , TextField.view
                Msg.Mdc
                ("input-" ++ Step.toString rowStep ++ "-seconds")
                mdc
                [ Options.cs "input-time"
                , TextField.type_ "number"
                , TextField.nativeControl
                    [ Options.attribute <| A.min "0"
                    , Options.attribute <| A.max "59"
                    ]
                , TextField.value seconds
                , Options.onInput <| Msg.Input <| Component.Time rowStep TimeHand.Seconds
                , Options.onChange <| Msg.Change <| Component.Time rowStep TimeHand.Seconds
                ]
                []
            , text "\""
            ]
        ]


runContentRow : Step -> Language -> { timeSpans : TimeSpans, state : RunState, step : RunStep, rest : TimeSpans } -> Html Msg
runContentRow rowStep lang { timeSpans, step, rest } =
    let
        order =
            RunStep.compare step (fromStepToRunStep rowStep)

        label =
            contentRowLabel rowStep lang

        rest1 =
            Step.get rowStep rest

        timeSpan =
            Step.get rowStep timeSpans
    in
    tr []
        [ td
            [ class <| stepClass order
            , class "label"
            ]
            [ text label ]
        , let
            { sign, minutes, seconds } =
                fromSecondsToMinutesSeconds rest1
          in
          td
            ([ class <| stepClass order
             , class "time"
             ]
                ++ (if sign == Sign.Plus then
                        [ class "rest-plus" ]

                    else
                        []
                   )
            )
            [ text <| Sign.toString sign ++ String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds) ++ "\""
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
                    fromSecondsToMinutesSeconds timeSpan
              in
              text <| String.fromInt minutes ++ "' " ++ fillZero (String.fromInt seconds) ++ "\""
            ]
        ]


logInDialog : Model Msg -> List (Html Msg)
logInDialog model =
    case model.appModel of
        EditModel editModel ->
            [ Dialog.view
                Msg.Mdc
                "log-in-dialog"
                model.mdc
                [ Dialog.open |> Options.when editModel.logInDialogOpen
                , Dialog.onClose <| Msg.LogInDialog Msg.Hide
                ]
                [ Options.styled h2
                    [ Dialog.title ]
                    [ text <| T.whichAuthProvider model.lang ]
                , Dialog.content
                    []
                    [ UiList.ul
                        Msg.Mdc
                        "log-in-dialog-list"
                        model.mdc
                        [ Maybe.withDefault Options.nop <| Maybe.map UiList.selectedIndex editModel.logInDialogSelected
                        , UiList.onSelectListItem Msg.SelectLogInDialogListItem
                        ]
                        [ UiList.li
                            [ Options.tabindex 0
                            , Options.onClick <| Msg.LogIn Msg.LogIn.Provider.Google
                            ]
                            [ text <| T.google model.lang ]
                        , UiList.li
                            [ Options.tabindex 0
                            , Options.onClick <| Msg.LogIn Msg.LogIn.Provider.Twitter
                            ]
                            [ text <| T.twitter model.lang ]
                        ]
                    ]
                ]
            ]

        _ ->
            []


loadingProgress : Model Msg -> List (Html Msg)
loadingProgress model =
    case model.appModel of
        EditModel editModel ->
            if editModel.loadingProgressOpen then
                [ div
                    [ class "loading-progress"
                    ]
                    [ div
                        []
                        [ Loading.render
                            Loading.Circle
                            Loading.defaultConfig
                            Loading.On
                        ]
                    ]
                ]

            else
                []

        _ ->
            []
