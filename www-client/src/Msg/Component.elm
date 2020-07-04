module Msg.Component exposing (Component(..))

import Model exposing (Step)
import Model.TimeHand exposing (TimeHand)


type Component
    = Name
    | Time Step TimeHand
