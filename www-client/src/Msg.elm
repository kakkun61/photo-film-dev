module Msg exposing
    ( Component
    , Error
    , LogInProvider
    , Msg(..)
    , Visible(..)
    )

import Dict exposing (Dict)
import Material
import Model exposing (Recipe, User)
import Msg.Component
import Msg.Error
import Msg.LogIn.Provider
import Time


type Msg
    = Mdc (Material.Msg Msg)
    | GoRun
    | GoEdit
    | Input Component String
    | Change Component String
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


type alias Component =
    Msg.Component.Component


type alias LogInProvider =
    Msg.LogIn.Provider.Provider


type alias Error =
    Msg.Error.Error


type Visible
    = Show
    | Hide
