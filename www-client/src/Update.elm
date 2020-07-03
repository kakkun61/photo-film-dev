module Update exposing (..)

import Array
import Cmd
import Dict exposing (Dict)
import Form.Decoder as FD
import Model exposing (..)
import Model.RunStep as RunStep
import Model.Step as Step
import Model.TimeHand as TimeHand exposing (TimeHand)
import Msg exposing (Msg)
import Msg.Error
import Msg.LogIn.Provider
import Random
import Sub
import Text as T
import UUID


drawer : Msg.Visible -> Model Msg -> ( Model Msg, Cmd Msg )
drawer visible model =
    case model.appModel of
        EditModel editModel ->
            ( { model | appModel = EditModel { editModel | drawerOpen = visible == Msg.Show } }, Cmd.none )

        _ ->
            ( model, Cmd.alert "unexpected: update" )


nameTextField : Msg.Visible -> Model Msg -> ( Model Msg, Cmd Msg )
nameTextField visible model =
    case model.appModel of
        EditModel editModel ->
            ( { model | appModel = EditModel { editModel | nameTextFieldOpen = visible == Msg.Show } }, Cmd.none )

        _ ->
            ( model, Cmd.alert "unexpected: update" )


goRun : Model Msg -> ( Model Msg, Cmd Msg )
goRun model =
    let
        timeInputs =
            case model.loggedIn of
                LoggedIn loggedIn_ ->
                    loggedIn_.recipeId
                        |> Maybe.andThen (\recipeId -> Dict.get (UUID.toString recipeId) loggedIn_.recipes)
                        |> Maybe.andThen (Just << .timeInputs)

                NotLoggedIn ->
                    Just model.timeInputs
    in
    case timeInputs of
        Just timeInputs_ ->
            case fromTimeInputsToTimeSpans timeInputs_ of
                Ok timeSpans ->
                    ( { model
                        | appModel =
                            RunModel
                                { timeSpans = timeSpans
                                , state = RunState
                                , step = RunStep.Soak
                                , rest = timeSpans
                                }
                      }
                    , Cmd.setNoSleep True
                    )

                Err errs ->
                    case List.head errs of
                        Just NotInt ->
                            ( model, Cmd.alert <| T.inputNumber model.lang )

                        Just OutOfRange ->
                            ( model, Cmd.alert <| T.outOfRange model.lang )

                        Nothing ->
                            ( model, Cmd.alert <| T.badInput model.lang )

        Nothing ->
            ( model, Cmd.alert "unexpected: update" )


tick : Model Msg -> ( Model Msg, Cmd Msg )
tick model =
    case model.appModel of
        RunModel runModel ->
            let
                { timeSpans, step, rest } =
                    runModel
            in
            case fromRunStepToStep step of
                Just step_ ->
                    let
                        rest1 =
                            Step.get step_ rest
                    in
                    ( { model | appModel = RunModel { runModel | rest = Step.set step_ (rest1 - 1) rest } }
                    , if rest1 == 0 then
                        Cmd.playAlarm

                      else
                        Cmd.none
                    )

                Nothing ->
                    ( model, Cmd.none )

        _ ->
            ( model, Cmd.alert "unexpected: Update.tick" )


inputName : String -> Model Msg -> ( Model Msg, Cmd Msg )
inputName name model =
    case model.appModel of
        EditModel editModel ->
            ( { model | recipeName = name }, Cmd.none )

        _ ->
            ( model, Cmd.alert "unexpected: Update.inputName" )


changeName : String -> Model Msg -> ( Model Msg, Cmd Msg )
changeName name model =
    case model.appModel of
        EditModel _ ->
            let
                recipe =
                    case model.loggedIn of
                        LoggedIn loggedIn_ ->
                            loggedIn_.recipeId |> Maybe.andThen (\id -> Dict.get (UUID.toString id) loggedIn_.recipes)

                        NotLoggedIn ->
                            Nothing
            in
            case recipe of
                Nothing ->
                    ( model, Cmd.alert "unexpected: Update.changeName" )

                Just recipe_ ->
                    ( model, Cmd.setRecipe { recipe_ | name = name } )

        _ ->
            ( model, Cmd.alert "unexpected: Update.changeName" )


inputTime : Step -> TimeHand -> String -> Model Msg -> ( Model Msg, Cmd Msg )
inputTime step timeHand value model =
    case model.appModel of
        EditModel editModel ->
            let
                timeInputs =
                    model.timeInputs |> Step.set step (model.timeInputs |> Step.get step |> TimeHand.set timeHand value)
            in
            ( { model | timeInputs = timeInputs }, Cmd.none )

        _ ->
            ( model, Cmd.alert "unexpected: Update.inputTime" )


changeTime : Step -> TimeHand -> String -> Model Msg -> ( Model Msg, Cmd Msg )
changeTime step timeHand value model =
    case model.appModel of
        EditModel editModel ->
            let
                new timeInputs =
                    timeInputs |> Step.set step (timeInputs |> Step.get step |> TimeHand.set timeHand value)
            in
            case model.loggedIn of
                LoggedIn loggedIn_ ->
                    case loggedIn_.recipeId of
                        Just recipeId ->
                            case Dict.get (UUID.toString recipeId) loggedIn_.recipes of
                                Just recipe ->
                                    ( model, Cmd.setRecipe { recipe | timeInputs = new recipe.timeInputs } )

                                Nothing ->
                                    ( model, Cmd.alert "undexpected: Update.changeTime" )

                        Nothing ->
                            ( model, Cmd.alert "undexpected: Update.changeTime" )

                NotLoggedIn ->
                    ( { model | timeInputs = new model.timeInputs }, Cmd.none )

        _ ->
            ( model, Cmd.alert "unexpected: Update.changeTime" )


newRecipe : Model Msg -> ( Model Msg, Cmd Msg )
newRecipe model =
    case ( model.loggedIn, model.appModel ) of
        ( LoggedIn loggedIn_, EditModel editModel ) ->
            let
                ( uuid, seed_ ) =
                    Random.step UUID.generator model.seed

                recipe =
                    { id = uuid, name = T.newRecipe model.lang, timeInputs = initialTimeInputs }

                model_ =
                    { model
                        | loggedIn =
                            LoggedIn { loggedIn_ | recipeId = Just uuid }
                        , appModel = EditModel { editModel | drawerOpen = False }
                        , recipeName = T.newRecipe model.lang
                        , seed = seed_
                    }
            in
            ( model_, Cmd.setRecipe recipe )

        _ ->
            ( model, Cmd.alert "unexpected: Update.newRecipe" )


next : Model Msg -> ( Model Msg, Cmd Msg )
next model =
    case model.appModel of
        RunModel runModel ->
            let
                step_ =
                    RunStep.next runModel.step
            in
            if step_ == RunStep.End then
                ( { model | appModel = RunModel { runModel | step = step_, state = PauseState } }, Cmd.batch [ Cmd.stopAlarm, Cmd.setNoSleep False ] )

            else
                ( { model | appModel = RunModel { runModel | step = step_, state = RunState } }, Cmd.batch [ Cmd.stopAlarm, Cmd.setNoSleep True ] )

        _ ->
            ( model, Cmd.alert "unexpected: Update.next" )


goEdit : Model Msg -> ( Model Msg, Cmd Msg )
goEdit model =
    case model.appModel of
        RunModel runModel ->
            ( { model
                | appModel =
                    EditModel
                        { nameTextFieldOpen = False
                        , drawerOpen = False
                        , logInDialogOpen = False
                        , loadingProgressOpen = False
                        , logInDialogSelected = Nothing
                        }
              }
            , Cmd.batch [ Cmd.stopAlarm, Cmd.setNoSleep False ]
            )

        _ ->
            ( model, Cmd.alert "unexpected: Update.goEdit" )


pause : Model Msg -> ( Model Msg, Cmd Msg )
pause model =
    case model.appModel of
        RunModel runModel ->
            ( { model | appModel = RunModel { runModel | state = PauseState } }, Cmd.batch [ Cmd.stopAlarm, Cmd.setNoSleep False ] )

        _ ->
            ( model, Cmd.alert "unexpected: Update.pause" )


restart model =
    case model.appModel of
        RunModel runModel ->
            case runModel.step of
                RunStep.End ->
                    ( model, Cmd.none )

                _ ->
                    ( { model | appModel = RunModel { runModel | state = RunState } }, Cmd.setNoSleep True )

        _ ->
            ( model, Cmd.alert "unexpected: Update.restart" )


init model =
    case model.appModel of
        RunModel runModel ->
            let
                spans =
                    runModel.timeSpans
            in
            ( { model | appModel = RunModel { runModel | state = PauseState, rest = spans, step = RunStep.Soak } }, Cmd.batch [ Cmd.stopAlarm, Cmd.setNoSleep False ] )

        _ ->
            ( model, Cmd.alert "unexpected: Update.init" )


logInDialog : Msg.Visible -> Model Msg -> ( Model Msg, Cmd Msg )
logInDialog visible model =
    case model.appModel of
        EditModel editModel ->
            case visible of
                Msg.Show ->
                    ( { model | appModel = EditModel { editModel | logInDialogOpen = True, logInDialogSelected = Nothing } }, Cmd.none )

                Msg.Hide ->
                    ( { model | appModel = EditModel { editModel | logInDialogOpen = False } }, Cmd.none )

        _ ->
            ( model, Cmd.alert "unexpected: Update.logInDialog" )


logInDialogList : Int -> Model Msg -> ( Model Msg, Cmd Msg )
logInDialogList selected model =
    case model.appModel of
        EditModel editModel ->
            ( { model | appModel = EditModel { editModel | logInDialogSelected = Just selected } }, Cmd.none )

        _ ->
            ( model, Cmd.alert "unexpected: Update.logInDialog" )


logIn : Msg.LogInProvider -> Model Msg -> ( Model Msg, Cmd Msg )
logIn provider model =
    case model.appModel of
        EditModel editModel ->
            let
                model_ =
                    { model | appModel = EditModel { editModel | loadingProgressOpen = True } }
            in
            case provider of
                Msg.LogIn.Provider.Google ->
                    ( model_, Cmd.logInWithGoogle )

                Msg.LogIn.Provider.Twitter ->
                    ( model_, Cmd.logInWithTwitter )

        _ ->
            ( model, Cmd.alert "unexpected: Update.logIn" )


logOut : Model Msg -> ( Model Msg, Cmd Msg )
logOut model =
    case model.appModel of
        EditModel {} ->
            ( model, Cmd.logOut )

        _ ->
            ( model, Cmd.alert "unexpected: Update.logIn" )


loggedIn : Maybe User -> Model Msg -> ( Model Msg, Cmd Msg )
loggedIn user model =
    case user of
        Just user_ ->
            ( { model | loggedIn = LoggedIn { user = user_, recipeId = Nothing, recipes = Dict.empty } }, Cmd.none )

        Nothing ->
            ( { model | loggedIn = NotLoggedIn }, Cmd.none )


recipesChanged : Dict String Recipe -> Model Msg -> ( Model Msg, Cmd Msg )
recipesChanged recipes model =
    case model.loggedIn of
        LoggedIn loggedIn_ ->
            ( { model | loggedIn = LoggedIn { loggedIn_ | recipes = recipes } }, Cmd.none )

        NotLoggedIn ->
            ( model, Cmd.alert "unexpected: Update.recipesChanged" )


selectRecipe : Recipe -> Model Msg -> ( Model Msg, Cmd Msg )
selectRecipe recipe model =
    case ( model.loggedIn, model.appModel ) of
        ( LoggedIn loggedIn_, EditModel editModel ) ->
            ( { model
                | recipeName = recipe.name
                , timeInputs = recipe.timeInputs
                , loggedIn =
                    LoggedIn
                        { loggedIn_
                            | recipeId = Just recipe.id
                        }
                , appModel =
                    EditModel
                        { editModel
                            | drawerOpen = False
                        }
              }
            , Cmd.none
            )

        _ ->
            ( model, Cmd.alert "unexpected: Update.selectRecipe" )


error : Msg.Error -> Model Msg -> ( Model Msg, Cmd Msg )
error err model =
    case err of
        Msg.Error.RecipeDecoder _ ->
            ( model, Cmd.alert "unable to decode a recipe" )

        Msg.Error.Foreign err_ ->
            ( model, Cmd.alert err_ )
