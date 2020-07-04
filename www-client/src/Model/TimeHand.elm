module Model.TimeHand exposing (TimeHand(..), get, set)


type TimeHand
    = Minutes
    | Seconds


get : TimeHand -> { minutes : a, seconds : a } -> a
get hand =
    case hand of
        Minutes ->
            .minutes

        Seconds ->
            .seconds


set : TimeHand -> a -> { minutes : a, seconds : a } -> { minutes : a, seconds : a }
set hand value record =
    case hand of
        Minutes ->
            { record | minutes = value }

        Seconds ->
            { record | seconds = value }
