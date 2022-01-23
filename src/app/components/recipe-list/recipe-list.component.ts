import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

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

  recipes: Recipe[];

  constructor() {
    this.recipeInProgress = Recipe.createBlank();

    this.recipes = [];
  }

  addRecipeClicked(): void {
    this.recipes = [this.recipeInProgress, ...this.recipes];
    this.recipeInProgress = Recipe.createBlank();
    // console.log(JSON.stringify(this.recipeInProgress, null, 2));
  }

  recipeZoomedIn(recipe: Recipe): void {
    console.log('The user clicked on the recipe: ');
    console.log(JSON.stringify(recipe, null, 2));
  }

  toggleDarkBG(): void {
    this.currentCSSClasses.darkbg = !this.currentCSSClasses.darkbg;
  }
}
