import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { Location } from '@angular/common';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.scss'],
})
export class EditNewRecipeComponent implements OnInit {
  recipeInProgress: Recipe;

  constructor(
    private location: Location,
    private recipe_service: RecipeService,
    private router: Router
  ) {
    this.recipeInProgress = Recipe.createBlank();
  }

  ngOnInit(): void {}

  goBackButtonClicked(): void {
    this.location.back();
  }

  addIngredientPressed(): void {
    this.recipeInProgress.ingredients = [
      ...this.recipeInProgress.ingredients,
      { ingredient: '', measure: '' },
    ];
  }

  removeIngredientAtIndex(index: number): void {
    this.recipeInProgress.ingredients.splice(index, 1);
  }

  removeInstructionAtIndex(index: number): void {
    this.recipeInProgress.instructions.splice(index, 1);
  }

  addInstructionPressed(): void {
    this.recipeInProgress.instructions = [
      ...this.recipeInProgress.instructions,
      { instruction: '', photo: '' },
    ];
  }

  addRecipeClicked(): void {
    this.recipe_service
      .addRecipe(this.recipeInProgress)
      .subscribe((recipePayload) => {
        this.router.navigateByUrl(`recipes/${recipePayload.data.id}`);
      });
    // this.recipe_service.addRecipe(this.recipeInProgress);
    /**
     * since recipeInProgress is an object it is passed by reference
     * thus that variable's id has changed as well
     */
    // this.router.navigateByUrl(`/recipes/${this.recipeInProgress.id}`);
  }
}
