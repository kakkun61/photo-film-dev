module Main exposing (main)

import Browser
import Html exposing (Html, div)
import Material
import Model
    exposing
        ( AppModel(..)
        , LoggedIn(..)
        , Model
        , RunState(..)
        , initialTimeInputs
        )
import Msg exposing (Msg)
import Msg.Component as Component
import Msg.Error
import Random
import Sub
import Text exposing (Language(..))
import Time
import Update exposing (nameTextField)
import View


main : Program Int (Model Msg) Msg
main =
    Browser.element { init = init, update = update, view = view, subscriptions = subscriptions }


init : Int -> ( Model Msg, Cmd Msg )
init seed =
    ( { mdc = Material.defaultModel
      , appModel =
            EditModel
                { nameTextFieldOpen = False
                , drawerOpen = False
                , logInDialogOpen = False
                , loadingProgressOpen = False
                , logInDialogSelected = Nothing
                }
      , loggedIn = NotLoggedIn
      , seed = Random.initialSeed seed
      , lang = Japanese
      , recipeName = ""
      , timeInputs = initialTimeInputs
      }
    , Material.init Msg.Mdc
    )


update : Msg -> Model Msg -> ( Model Msg, Cmd Msg )
update msg model =
    case msg of
        Msg.Mdc mdcMsg ->
            Material.update Msg.Mdc mdcMsg model

        Msg.Drawer visible ->
            Update.drawer visible model

        Msg.NewRecipe ->
            Update.newRecipe model

        Msg.SelectRecipe recipe ->
            Update.selectRecipe recipe model

        Msg.NameTextField visible ->
            Update.nameTextField visible model

        Msg.GoRun ->
            Update.goRun model

        Msg.Tick _ ->
            Update.tick model

        Msg.Next ->
            Update.next model

        Msg.GoEdit ->
            Update.goEdit model

        Msg.Pause ->
            Update.pause model

        Msg.Restart ->
            Update.restart model

        Msg.Init ->
            Update.init model

        Msg.Input Component.Name value ->
            Update.inputName value model

        Msg.Change Component.Name value ->
            Update.changeName value model

        Msg.Input (Component.Time step timeHand) value ->
            Update.inputTime step timeHand value model

        Msg.Change (Component.Time step timeHand) value ->
            Update.changeTime step timeHand value model

        Msg.LogIn provider ->
            Update.logIn provider model

        Msg.LogOut ->
            Update.logOut model

        Msg.UserChanged user ->
            Update.loggedIn user model

        Msg.LogInDialog visible ->
            Update.logInDialog visible model

        Msg.SelectLogInDialogListItem selected ->
            Update.logInDialogList selected model

        Msg.RecipesChanged recipes ->
            Update.recipesChanged recipes model

        Msg.Error err ->
            Update.error err model


subscriptions : Model Msg -> Sub Msg
subscriptions model =
    let
        appModel =
            model.appModel
    in
    case appModel of
        EditModel _ ->
            Sub.batch
                [ Material.subscriptions Msg.Mdc model
                , Sub.changeUser Msg.UserChanged
                , Sub.changeRecipes (Msg.Error << Msg.Error.RecipeDecoder) Msg.RecipesChanged
                , Sub.error (Msg.Error << Msg.Error.Foreign)
                ]

        RunModel { state } ->
            case state of
                RunState ->
                    Sub.batch
                        [ Time.every 1000 Msg.Tick
                        , Material.subscriptions Msg.Mdc model
                        , Sub.error (Msg.Error << Msg.Error.Foreign)
                        ]

                PauseState ->
                    Sub.batch
                        [ Material.subscriptions Msg.Mdc model
                        , Sub.error (Msg.Error << Msg.Error.Foreign)
                        ]


view : Model Msg -> Html Msg
view model =
    div
        []
        (View.topAppBar model
            ++ View.drawer model
            ++ View.content model
            ++ View.fab model
            ++ View.logInDialog model
            ++ View.loadingProgress model
        )
