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

  coverPhotoForViewing: any = '../../../assets/emptyBowl.jpg';
  coverPhotoForUpload: File | null = null;

  instructionPhotosForViewing: any[];
  instructionPhotosForUpload: File[];

  constructor(
    private location: Location,
    private recipe_service: RecipeService,
    private router: Router
  ) {
    this.recipeInProgress = Recipe.createBlank();

    this.instructionPhotosForViewing = [];
    this.instructionPhotosForUpload = [];
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
      .addRecipe(this.recipeInProgress, {
        coverPhoto: this.coverPhotoForUpload,
        instructionPhotos: this.instructionPhotosForUpload,
      })
      .subscribe((recipe: Recipe) => {
        this.router.navigateByUrl(`recipes/${recipe.id}`);
      });
  }

  readURL(e: any): void {
    if (e?.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (rdr) => {
        this.coverPhotoForViewing = reader.result;
      };

      reader.readAsDataURL(e.target.files[0]);
      this.coverPhotoForUpload = e.target.files[0];
    }
  }

  readInstURL(i: number, e: any): void {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (rdr) => {
        this.instructionPhotosForViewing[i] = reader.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      this.instructionPhotosForUpload[i] = e.target.files[0];
      console.log(this.instructionPhotosForUpload);
    }
  }
}
