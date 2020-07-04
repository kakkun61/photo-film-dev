port module Port exposing
    ( alertCmd
    , changeRecipesSub
    , changeUserSub
    , errorSub
    , inRecipes
    , logInWithGoogleCmd
    , logInWithTwitterCmd
    , logOutCmd
    , outRecipe
    , playAlarmCmd
    , setNoSleepCmd
    , setRecipeCmd
    , stopAlarmCmd
    )

import Array exposing (Array)
import Form.Decoder as FD
import Model
import UUID


port playAlarmCmd : () -> Cmd msg


port stopAlarmCmd : () -> Cmd msg


port alertCmd : String -> Cmd msg


port setNoSleepCmd : Bool -> Cmd msg


port logInWithGoogleCmd : () -> Cmd msg


port logInWithTwitterCmd : () -> Cmd msg


port logOutCmd : () -> Cmd msg


port setRecipeCmd : Recipe -> Cmd msg


port changeUserSub : (Maybe Model.User -> msg) -> Sub msg


port errorSub : (String -> msg) -> Sub msg


port changeRecipesSub : (Array Recipe -> msg) -> Sub msg


type alias Recipe =
    { id : String
    , name : String
    , timeInputs : Model.TimeInputs
    }


outRecipe : Model.Recipe -> Recipe
outRecipe { id, name, timeInputs } =
    { id = UUID.toString id
    , name = name
    , timeInputs = timeInputs
    }


inRecipes : Array Recipe -> Result (List Model.RecipeDecoderError) (Array Model.Recipe)
inRecipes =
    FD.run recipesDecoder


recipeDecoder : FD.Decoder Recipe Model.RecipeDecoderError Model.Recipe
recipeDecoder =
    FD.map3
        Model.Recipe
        (FD.lift .id <| FD.mapError Model.UuidError <| FD.custom <| Result.mapError List.singleton << UUID.fromString)
        (FD.lift .name FD.identity)
        (FD.lift .timeInputs FD.identity)


recipesDecoder : FD.Decoder (Array Recipe) Model.RecipeDecoderError (Array Model.Recipe)
recipesDecoder =
    FD.array recipeDecoder
