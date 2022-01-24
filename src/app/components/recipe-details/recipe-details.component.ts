import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { myRecipes } from 'src/assets/myRecipes';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | null = null;

  recipes: Recipe[] = [];

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    myRecipes.forEach((recipe) => {
      this.recipes.unshift(Recipe.recipeFromJSON(recipe));
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipe = this.findRecipeByID(
        parseInt(`${params.get('recipe_id')}`, 10)
      );
    });
  }
  findRecipeByID(recipe_id: number): Recipe | null {
    for (const recipe of this.recipes) {
      if (recipe.id === recipe_id) return recipe;
    }
    return null;
  }
}
