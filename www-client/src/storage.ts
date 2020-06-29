"use strict";

const recipesKey = 'recipes';
const recentRecipeIdsKey = 'recent recipe ids';
const maxRecentRecipes = 5;

interface Recipe {
  id: string
}

interface Recipes {
  [key: string]: Recipe
}

export function loadRecipes(onSuccess: (recipes: Recipes) => void, onFailure: (exception: Error) => void): void {
  try {
    onSuccess(JSON.parse(localStorage.getItem(recipesKey)));
  }
  catch (e) {
    onFailure(e);
  }
}

export function saveRecipes(recipes: Recipes, onFailure: (exception: Error) => void): void {
  try {
    localStorage.setItem(recipesKey, JSON.stringify(recipes));
  }
  catch (e) {
    onFailure(e);
  }
}

export function loadRecentRecipes(onSuccess: (recipes: Recipes) => void, onFailure: (exception: Error) => void): void {
  try {
    const recentRecipeIds = JSON.parse(localStorage.getItem(recentRecipeIdsKey));
    loadRecipes(
      recipes => {
        onSuccess(recentRecipeIds.map(k => recipes[k]));
      },
      onFailure
    );
  }
  catch (e) {
    onFailure(e);
  }
}

export function pushRecentRecipe(recipe: Recipe, onFailure: (exception: Error) => void): void {
  try {
    const recentRecipeIds = JSON.parse(localStorage.getItem(recentRecipeIdsKey)) as string[];
    if (maxRecentRecipes <= recentRecipeIds.length) {
      recentRecipeIds.pop();
    }
    recentRecipeIds.unshift(recipe.id);
    localStorage.setItem(recentRecipeIdsKey, JSON.stringify(recentRecipeIds));
  }
  catch (e) {
    onFailure(e);
  }
}
