import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { myRecipes } from 'src/assets/myRecipes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipeInProgress: Recipe;

  currentCSSClasses = {
    darkbg: false,
  };

  recipes: Recipe[] = [];

  constructor() {
    this.recipeInProgress = Recipe.createBlank();

    myRecipes.forEach((recipe) => {
      this.recipes.unshift(Recipe.recipeFromJSON(recipe));
    });
  }

  addRecipeClicked(): void {
    this.recipes = [this.recipeInProgress, ...this.recipes];
    this.recipeInProgress = Recipe.createBlank();
  }

  recipeZoomedIn(recipe: Recipe): void {
    console.log('The user clicked on the recipe: ');
    console.log(JSON.stringify(recipe, null, 2));
  }

  toggleDarkBG(): void {
    this.currentCSSClasses.darkbg = !this.currentCSSClasses.darkbg;
  }
}
