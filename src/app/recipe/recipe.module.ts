import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipeFormComponent,
    RecipeDetailsComponent,
  ],
  imports: [SharedModule, RecipeRoutingModule],
})
export class RecipeModule {}
