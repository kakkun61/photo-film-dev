module Model.Sign exposing (Sign(..), toString)


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
