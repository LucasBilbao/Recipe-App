import { Component, Input } from '@angular/core';

@Component({
  selector: 'ra-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() placeholder!: string;
  @Input() label!: string;
}
