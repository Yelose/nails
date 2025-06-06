import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="radio-icon" [class.selected]="selected" (click)="onToggle()">
    <span class="material-symbols-outlined icon">
      {{ selected ? 'check_circle' : 'radio_button_unchecked' }}
    </span>
      <div class="text-content">
        <div class="label">{{ label }}</div>
        <small class="notes" *ngIf="notes">{{ notes }}</small>
      </div>
      <div class="price">{{ price }} €</div>
  </div>  `,
  styleUrls: ['../custom-radio/custom-radio.component.scss']
})
export class CustomCheckboxComponent {
  @Input() selected = false;
  @Input() label = '';
  @Input() price = 0;
  @Input() notes?: string;

  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }
}
