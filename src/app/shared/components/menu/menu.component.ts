import { Component } from '@angular/core';

@Component({
  selector: 'ra-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  public prevent(e: Event): void {
    e.preventDefault();
  }
}
