module Sub exposing (changeRecipes, changeUser, error)

import Array
import Dict exposing (Dict)
import Model exposing (Recipe, RecipeDecoderError, User)
import Port
import UUID


changeUser : (Maybe User -> msg) -> Sub msg
changeUser =
    Port.changeUserSub


changeRecipes : (List RecipeDecoderError -> msg) -> (Dict String Recipe -> msg) -> Sub msg
changeRecipes errMsg msg =
    let
        msg_ recipes =
            case Port.inRecipes recipes of
                Ok recipes_ ->
                    msg <| Dict.fromList <| List.map (\r -> ( UUID.toString r.id, r )) <| Array.toList recipes_

                Err err ->
                    errMsg err
    in
    Port.changeRecipesSub msg_


error : (String -> msg) -> Sub msg
error =
    Port.errorSub
