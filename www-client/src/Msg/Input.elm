module Msg.Input exposing (..)

import Model exposing (Step)
import Model.TimeHand exposing (TimeHand)


type Input
    = Name
    | Time Step TimeHand
