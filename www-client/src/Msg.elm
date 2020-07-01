module Msg exposing (..)

import Dict exposing (Dict)
import Material
import Model exposing (..)
import Msg.Error
import Msg.Input
import Msg.LogIn.Provider
import Time


type Msg
    = Mdc (Material.Msg Msg)
    | GoRun
    | GoEdit
    | Input Input String
    | Tick Time.Posix
    | Next
    | Restart
    | Pause
    | Init
    | Drawer Visible
    | NewRecipe
    | SelectRecipe Recipe
    | RecipesChanged (Dict String Recipe)
    | NameTextField Visible
    | LogInDialog Visible
    | SelectLogInDialogListItem Int
    | LogIn LogInProvider
    | LogOut
    | UserChanged (Maybe User)
    | Error Error


type alias Input =
    Msg.Input.Input


type alias LogInProvider =
    Msg.LogIn.Provider.Provider


type alias Error =
    Msg.Error.Error


type Visible
    = Show
    | Hide