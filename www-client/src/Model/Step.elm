module Model.Step exposing (Step(..), get, range, set, toString)


type Step
    = Soak
    | Dev
    | Stop
    | Fix
    | Rinse
    | Wet


toString : Step -> String
toString step =
    case step of
        Soak ->
            "soak"

        Dev ->
            "dev"

        Stop ->
            "stop"

        Fix ->
            "fix"

        Rinse ->
            "rinse"

        Wet ->
            "wet"


toInt : Step -> Int
toInt step =
    case step of
        Soak ->
            0

        Dev ->
            1

        Stop ->
            2

        Fix ->
            3

        Rinse ->
            4

        Wet ->
            5


fromInt : Int -> Maybe Step
fromInt value =
    case value of
        0 ->
            Just Soak

        1 ->
            Just Dev

        2 ->
            Just Stop

        3 ->
            Just Fix

        4 ->
            Just Rinse

        5 ->
            Just Wet

        _ ->
            Nothing


range : Step -> Step -> List Step
range b e =
    List.filterMap fromInt <| List.range (toInt b) (toInt e)


get : Step -> { soak : a, dev : a, stop : a, fix : a, rinse : a, wet : a } -> a
get step =
    case step of
        Soak ->
            .soak

        Dev ->
            .dev

        Stop ->
            .stop

        Fix ->
            .fix

        Rinse ->
            .rinse

        Wet ->
            .wet


set : Step -> a -> { soak : a, dev : a, stop : a, fix : a, rinse : a, wet : a } -> { soak : a, dev : a, stop : a, fix : a, rinse : a, wet : a }
set step value record =
    case step of
        Soak ->
            { record | soak = value }

        Dev ->
            { record | dev = value }

        Stop ->
            { record | stop = value }

        Fix ->
            { record | fix = value }

        Rinse ->
            { record | rinse = value }

        Wet ->
            { record | wet = value }
