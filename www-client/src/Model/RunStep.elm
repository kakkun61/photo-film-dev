module Model.RunStep exposing (..)


type RunStep
    = Soak
    | Dev
    | Stop
    | Fix
    | Rinse
    | Wet
    | End


toInt : RunStep -> Int
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

        End ->
            6


fromInt : Int -> Maybe RunStep
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

        6 ->
            Just End

        _ ->
            Nothing


next : RunStep -> RunStep
next step =
    case fromInt <| toInt step + 1 of
        Just step_ ->
            step_

        Nothing ->
            step


compare : RunStep -> RunStep -> Order
compare step0 step1 =
    Basics.compare (toInt step0) (toInt step1)
