import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from 'src/app/models/recipe.model';
import { myRecipes } from 'src/assets/myRecipes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipeInProgress: Recipe;

  recipes: Recipe[] = [];

  constructor(private router: Router) {
    myRecipes.forEach((recipe) => {
      this.recipes.unshift(Recipe.recipeFromJSON(recipe));
    });
    this.recipeInProgress = Recipe.createBlank(this.recipes.length);
  }

  addRecipeClicked(): void {
    this.recipes = [this.recipeInProgress, ...this.recipes];
    this.recipeInProgress = Recipe.createBlank(this.recipes.length);
  }

  recipeClicked(recipe_id: any): void {
    this.router.navigateByUrl(`/recipes/${recipe_id}`);
  }
}
