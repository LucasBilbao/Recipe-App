import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.scss'],
})
export class RecipeSummaryComponent implements OnInit {
  @Input() recipe: Recipe | null = null;

  @Output() zoomIn: EventEmitter<Recipe> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  fireZoomInEvent() {
    if (this.recipe) this.zoomIn.emit(this.recipe);
  }
}
