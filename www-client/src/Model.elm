module Model exposing (..)

import Dict exposing (Dict)
import Form.Decoder as FD
import Json.Decode as Decode exposing (Decoder)
import Json.Encode as Encode
import Material
import Model.RunStep as RunStep
import Model.Sign as Sign
import Model.Step as Step
import Random
import Text exposing (Language)
import Time
import UUID exposing (UUID)


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


initialTimeInputs : TimeInputs
initialTimeInputs =
    { soak = TimeInput "0" "30"
    , dev = TimeInput "5" "0"
    , stop = TimeInput "2" "0"
    , fix = TimeInput "10" "0"
    , rinse = TimeInput "5" "0"
    , wet = TimeInput "0" "30"
    }


type alias Recipe =
    { id : UUID
    , name : String
    , timeInputs : TimeInputs
    }


type RunState
    = RunState
    | PauseState


type alias TimeInput =
    { minutes : String
    , seconds : String
    }


type alias TimeInputs =
    { soak : TimeInput
    , dev : TimeInput
    , stop : TimeInput
    , fix : TimeInput
    , rinse : TimeInput
    , wet : TimeInput
    }


type alias Step =
    Step.Step


type alias RunStep =
    RunStep.RunStep


fromStepToRunStep : Step -> RunStep
fromStepToRunStep step =
    case step of
        Step.Soak ->
            RunStep.Soak

        Step.Dev ->
            RunStep.Dev

        Step.Stop ->
            RunStep.Stop

        Step.Fix ->
            RunStep.Fix

        Step.Rinse ->
            RunStep.Rinse

        Step.Wet ->
            RunStep.Wet


fromRunStepToStep : RunStep -> Maybe Step
fromRunStepToStep step =
    case step of
        RunStep.Soak ->
            Just Step.Soak

        RunStep.Dev ->
            Just Step.Dev

        RunStep.Stop ->
            Just Step.Stop

        RunStep.Fix ->
            Just Step.Fix

        RunStep.Rinse ->
            Just Step.Rinse

        RunStep.Wet ->
            Just Step.Wet

        RunStep.End ->
            Nothing


type alias Model msg =
    { appModel : AppModel
    , loggedIn : LoggedIn
    , seed : Random.Seed
    , lang : Language
    , recipeName : String
    , timeInputs : TimeInputs
    , mdc : Material.Model msg
    }


type AppModel
    = EditModel EditModel_
    | RunModel RunModel_


type alias EditModel_ =
    { nameTextFieldOpen : Bool
    , drawerOpen : Bool
    , logInDialogOpen : Bool
    , loadingProgressOpen : Bool
    , logInDialogSelected : Maybe Int
    }


type alias RunModel_ =
    { timeSpans : TimeSpans, state : RunState, step : RunStep, rest : TimeSpans }


type LoggedIn
    = LoggedIn LoggedIn_
    | NotLoggedIn


type alias LoggedIn_ =
    { user : User
    , recipeId : Maybe UUID
    , recipes : Dict String Recipe
    }


type alias Sign =
    Sign.Sign


type alias User =
    { uid : String
    , displayName : String
    }


fromSecondsToMinutesSeconds : Int -> { sign : Sign, minutes : Int, seconds : Int }
fromSecondsToMinutesSeconds secs =
    if secs < 0 then
        let
            secs_ =
                -1 * secs
        in
        { sign = Sign.Minus, minutes = secs_ // 60, seconds = modBy 60 secs_ }

    else
        { sign = Sign.Plus, minutes = secs // 60, seconds = modBy 60 secs }


fromTimeSpansToTimeInputs : TimeSpans -> TimeInputs
fromTimeSpansToTimeInputs spans =
    let
        conv span =
            let
                { minutes, seconds } =
                    fromSecondsToMinutesSeconds span
            in
            { minutes = String.fromInt minutes, seconds = String.fromInt seconds }
    in
    { soak = conv spans.soak, dev = conv spans.dev, stop = conv spans.stop, fix = conv spans.fix, rinse = conv spans.rinse, wet = conv spans.wet }


fromTimeInputsToTimeSpans : TimeInputs -> Result (List TimeSpanDecodeError) TimeSpans
fromTimeInputsToTimeSpans =
    FD.run timeInputsDecoder


type TimeSpanDecodeError
    = NotInt
    | OutOfRange


timeInputDecoder : FD.Decoder TimeInput TimeSpanDecodeError TimeSpan
timeInputDecoder =
    FD.map2
        (\m s -> 60 * m + s)
        (FD.lift .minutes (FD.int NotInt |> FD.assert (FD.minBound OutOfRange 0)))
        (FD.lift .seconds (FD.int NotInt |> FD.assert (FD.minBound OutOfRange 0) |> FD.assert (FD.maxBound OutOfRange 59)))


timeInputsDecoder : FD.Decoder TimeInputs TimeSpanDecodeError TimeSpans
timeInputsDecoder =
    FD.always TimeSpans
        |> FD.field (FD.lift .soak timeInputDecoder)
        |> FD.field (FD.lift .dev timeInputDecoder)
        |> FD.field (FD.lift .stop timeInputDecoder)
        |> FD.field (FD.lift .fix timeInputDecoder)
        |> FD.field (FD.lift .rinse timeInputDecoder)
        |> FD.field (FD.lift .wet timeInputDecoder)


type RecipeDecoderError
    = UuidError UUID.Error
