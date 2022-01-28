import { Injectable } from '@angular/core';

import { Recipe, RecipePayload, RecipesPayload } from '../models/recipe.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const RECIPE_SERVER = 'http://localhost:4200';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  httpOptions: Object;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getAllRecipes(): Observable<RecipesPayload> {
    return this.http.get<RecipesPayload>(`${RECIPE_SERVER}/v1/recipes.json`);
  }

  getRecipeById(id: number): Observable<RecipePayload> | undefined {
    if (id === undefined) {
      console.log("ACK! That's an error");
      return;
    }

    return this.http.get<RecipePayload>(
      `${RECIPE_SERVER}/v1/recipes/${id}.json`
    );
  }

  addRecipe(recipe: Recipe): Observable<RecipePayload> {
    return this.http.put<RecipePayload>(
      `${RECIPE_SERVER}/v1/recipes.json`,
      recipe,
      this.httpOptions
    );
  }

  getNewRecipeID(): number {
    //   if (this.recipes.length === 0) return 1;

    //   let maxID = this.recipes[0].id;

    //   for (let i = 1; i < this.recipes.length; i += 1) {
    //     if (this.recipes[i].id > maxID) maxID = this.recipes[i].id;
    //   }

    //   return maxID + 1;
    return -1;
  }
}
