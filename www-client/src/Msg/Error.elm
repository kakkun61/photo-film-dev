module Msg.Error exposing (..)

import Model exposing (RecipeDecoderError)


type Error
    = RecipeDecoder (List RecipeDecoderError)
    | Foreign String
