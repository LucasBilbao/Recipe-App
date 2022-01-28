import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipesLoaded: boolean = false;
  recipes: Recipe[] = [];

  constructor(private router: Router, private recipe_service: RecipeService) {}

  ngOnInit() {
    this.recipe_service.getAllRecipes().subscribe((recipesPayload) => {
      this.recipes = recipesPayload.data;
      this.recipesLoaded = true;
      console.log(recipesPayload.error);
    });
  }

  addNewRecipeClicked(): void {
    this.router.navigateByUrl('editnewrecipe');
  }

  recipeClicked(recipe_id: any): void {
    this.router.navigateByUrl(`/recipes/${recipe_id}`);
  }
}
