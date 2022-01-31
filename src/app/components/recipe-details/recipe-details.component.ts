import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ErrorInterface } from 'src/app/models/errorInterface.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeLoaded: boolean = false;
  loadError: ErrorInterface = { error: '', message: '' };

  recipe: Recipe | null = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recipes_service: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const recipe_id: number = parseInt(`${params.get('recipe_id')}`, 10);
      this.recipes_service.getRecipeById(recipe_id)?.subscribe(
        (recipePayload) => {
          this.recipe = recipePayload.data;
          this.recipeLoaded = true;
        },
        (error) => {
          this.recipeLoaded = true;
          this.loadError = error;
        }
      );
    });
  }

  goBackButtonClicked(): void {
    this.location.back();
  }

  isErrorLoaded(): boolean {
    return this.loadError.error !== '';
  }

  coverImagePath(): string {
    if (this.recipe?.coverPhoto) {
      return `http://localhost:4200/images/${this.recipe.coverPhoto}`;
    }

    return '../../../assets/emptyBowl.jpg';
  }

  instructionPhotoPath(instructionIndex: number): string {
    if (this.recipe?.instructions[instructionIndex].photo) {
      return `http://localhost:4200/images/${this.recipe.instructions[instructionIndex].photo}`;
    }

    return '../../../assets/emptyBowl.jpg';
  }
}
