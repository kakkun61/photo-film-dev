module Cmd exposing (..)

import Model exposing (Recipe)
import Port
import UUID


playAlarm : Cmd msg
playAlarm =
    Port.playAlarmCmd ()


stopAlarm : Cmd msg
stopAlarm =
    Port.stopAlarmCmd ()


alert : String -> Cmd msg
alert =
    Port.alertCmd


setNoSleep : Bool -> Cmd msg
setNoSleep =
    Port.setNoSleepCmd


logInWithGoogle : Cmd msg
logInWithGoogle =
    Port.logInWithGoogleCmd ()


logInWithTwitter : Cmd msg
logInWithTwitter =
    Port.logInWithTwitterCmd ()


logOut : Cmd msg
logOut =
    Port.logOutCmd ()


setRecipe : Recipe -> Cmd msg
setRecipe =
    Port.setRecipeCmd << Port.outRecipe
