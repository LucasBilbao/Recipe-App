import { Component, Input } from '@angular/core';

@Component({
  selector: 'ra-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  @Input() placeholder!: string;
  @Input() label!: string;
}
