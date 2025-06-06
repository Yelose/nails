import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-custom-radio',
  imports: [NgIf],
  template: `
    <div class="radio-icon" [class.selected]="selected" (click)="onSelect()">
      <span class="material-symbols-outlined icon">
        {{ selected ? 'radio_button_checked' : 'radio_button_unchecked' }}
      </span>
      <div class="text-content">
        <div class="label">{{ label }}</div>
        <small class="notes" *ngIf="notes">{{ notes }}</small>
      </div>
      <div class="price">{{ price }} €</div>
    </div>
  `,
  styleUrls: ['./custom-radio.component.scss']
})
export class CustomRadioComponent {
  @Input() selected = false;
  @Input() label = '';
  @Input() price = 0;
  @Input() notes?: string;

  @Output() select = new EventEmitter<void>();

  onSelect() {
    if (!this.selected) {
      this.select.emit();
    }
  }
}
