import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'ra-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
  public title =
    'Recipe Title Recipe Title Recipe Title Recipe Title Title a Title Title';
  public description =
    'Recipe Description Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, unde. Similique pariatur, sit nobis harum nostrum quaerat! Alias assumenda atque molestiae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aspernatur, fugiat molestiae iste nam nisi fuga, nihil animi quas modi aut dignissimos unde doloremque minus, ut odio repellat amet ducimus doloribus expedita omnis dolorem esse. Dicta veritatis iusto dolor inventore maxime odit tenetur perferendis delectus nemo laboriosam asperiores aut aliquid minus, vero corrupti voluptatibus ex! Est nemo iste nihil asperiores possimus ad facilis perspiciatis sit, alias, eaque eum atque modi enim reprehenderit nostrum non sapiente molestias cumque quidem. Voluptatem explicabo perferendis consequuntur, doloribus possimus impedit odio molestiae modi. Numquam a deleniti impedit placeat minus, facere laboriosam odit voluptas quis ad. Consequuntur facilis explicabo enim ratione nihil similique excepturi quasi voluptas!';

  constructor(public dialog: MatDialog) {}

  openDialog() {}
}
