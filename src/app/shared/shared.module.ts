import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RecipeItemComponent } from './components/recipes-list-item/recipe-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { PunctuationPipe } from './pipes/punctuation.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputComponent } from './components/input/input.component';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { MatDividerModule } from '@angular/material/divider';

const components = [
  HeaderComponent,
  RecipeItemComponent,
  InputComponent,
  MenuComponent,
  TextareaComponent,
];
const modules = [
  CommonModule,
  RouterModule,
  MatCardModule,
  MatButtonModule,
  MatRippleModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatMenuTrigger,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
];

@NgModule({
  declarations: [components, PunctuationPipe, TextareaComponent],
  imports: [modules],
  exports: [components, modules, PunctuationPipe],
})
export class SharedModule {}
