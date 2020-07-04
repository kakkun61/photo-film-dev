module Text exposing
    ( Language(..)
    , addRecipe
    , badInput
    , credit
    , dev
    , fix
    , google
    , inputNumber
    , logIn
    , logOut
    , newRecipe
    , noRecipes
    , notLoggedIn
    , outOfRange
    , rinse
    , soak
    , stop
    , title
    , twitter
    , wet
    , whichAuthProvider
    )


type Language
    = Japanese


type alias Text =
    Language -> String


title : Text
title _ =
    "Photo Film Dev"


notLoggedIn : Text
notLoggedIn lang =
    case lang of
        Japanese ->
            "未ログイン"


logIn : Text
logIn lang =
    case lang of
        Japanese ->
            "ログイン"


logOut : Text
logOut lang =
    case lang of
        Japanese ->
            "ログアウト"


addRecipe : Text
addRecipe lang =
    case lang of
        Japanese ->
            "追加"


credit : Text
credit lang =
    case lang of
        Japanese ->
            "クレジット"


soak : Text
soak lang =
    case lang of
        Japanese ->
            "前浴"


dev : Text
dev lang =
    case lang of
        Japanese ->
            "現像"


stop : Text
stop lang =
    case lang of
        Japanese ->
            "停止"


fix : Text
fix lang =
    case lang of
        Japanese ->
            "定着"


rinse : Text
rinse lang =
    case lang of
        Japanese ->
            "水洗"


wet : Text
wet lang =
    case lang of
        Japanese ->
            "防滴"


whichAuthProvider : Text
whichAuthProvider lang =
    case lang of
        Japanese ->
            "次のサービスを使って認証します"


google : Text
google _ =
    "Google"


twitter : Text
twitter _ =
    "Twitter"


newRecipe : Text
newRecipe lang =
    case lang of
        Japanese ->
            "新規レシピ"


noRecipes : Text
noRecipes lang =
    case lang of
        Japanese ->
            "レシピを選択してください"


inputNumber : Text
inputNumber lang =
    case lang of
        Japanese ->
            "数値を入力してください"


outOfRange : Text
outOfRange lang =
    case lang of
        Japanese ->
            "秒は0～59、分は0以上の数値を入力してください"


badInput : Text
badInput lang =
    case lang of
        Japanese ->
            "入力を処理できませんでした"
