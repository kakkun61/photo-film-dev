module Msg.Error exposing (Error(..))

import Model exposing (RecipeDecoderError)


type Error
    = RecipeDecoder (List RecipeDecoderError)
    | Foreign String
