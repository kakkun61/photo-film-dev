module Model.Sign exposing (..)


type Sign
    = Plus
    | Minus


toString : Sign -> String
toString sign =
    case sign of
        Plus ->
            ""

        Minus ->
            "-"
