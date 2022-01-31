import { Injectable } from '@angular/core';

import { Recipe, RecipePayload, RecipesPayload } from '../models/recipe.model';
import { Observable } from 'rxjs/internal/Observable';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const RECIPE_SERVER = 'http://localhost:4200';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  httpOptions: object;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getAllRecipes(): Observable<RecipesPayload> {
    return this.http
      .get<RecipesPayload>(`${RECIPE_SERVER}/v1/recipes.json`)
      .pipe(catchError(this.handleError));
  }

  getRecipeById(id: number): Observable<RecipePayload> | undefined {
    if (id === undefined) {
      console.log("ACK! That's an error");
      return;
    }

    return this.http
      .get<RecipePayload>(`${RECIPE_SERVER}/v1/recipes/${id}.json`)
      .pipe(catchError(this.handleError));
  }

  addRecipe(recipe: Recipe, files: any): Observable<Recipe> {
    return new Observable<Recipe>((outer_observable) => {
      this.http
        .put<RecipePayload>(
          `${RECIPE_SERVER}/v1/recipes.json`,
          recipe,
          this.httpOptions
        )
        .subscribe((recipePayload) => {
          const finalRecipe: Recipe = recipePayload.data;
          const formData: FormData = new FormData();

          if (files.coverPhoto) {
            const file: File = files.coverPhoto;
            formData.append('coverPhoto', file, file.name);
          }

          if (files.instructionPhotos) {
            for (let i = 0; i < files.instructionPhotos.length; i += 1) {
              if (files.instructionPhotos[i]) {
                const file: File = files.instructionPhotos[i];
                formData.append(`instruction_photos_${i}`, file, file.name);
              }
            }
          }

          this.http
            .post<RecipePayload>(
              `${RECIPE_SERVER}/v1/recipes/${finalRecipe.id}/images`,
              formData
            )
            .subscribe((sth) => {
              outer_observable.next(sth.data);
              outer_observable.complete();
            });
        });
    });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred: ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        JSON.stringify(error, null, 2) +
          `Backend returned code ${error.status}`,
        `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(() => error.error);
  }
}
