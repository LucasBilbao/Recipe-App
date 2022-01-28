import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeLoaded: boolean = false;
  loadError: any | boolean | null = false;

  recipe: Recipe | null = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recipes_service: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const recipe_id: number = parseInt(`${params.get('recipe_id')}`, 10);
      this.recipes_service
        .getRecipeById(recipe_id)
        ?.subscribe((recipePayload) => {
          this.recipe = recipePayload.data;
          this.recipeLoaded = true;
          console.log(recipePayload.error);
        });
    });
  }

  goBackButtonClicked(): void {
    this.location.back();
  }
}
