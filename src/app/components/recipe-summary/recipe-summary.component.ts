import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.scss'],
})
export class RecipeSummaryComponent implements OnInit {
  @Input() recipe: Recipe | null = null;

  @Output()
  recipeClicked: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  userClickedRecipe(): void {
    this.recipeClicked.emit(this.recipe?.id);
  }
}
