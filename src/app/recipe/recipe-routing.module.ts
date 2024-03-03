import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipesListComponent },
      { path: 'create', component: RecipeFormComponent },
      { path: ':id', component: RecipeDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
