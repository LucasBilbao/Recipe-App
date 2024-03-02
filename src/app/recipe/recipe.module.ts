import { NgModule } from '@angular/core';
import { RecipesComponent } from './components/recipes/recipes.component';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [RecipesComponent, TestComponent],
  imports: [SharedModule],
})
export class RecipeModule {}
