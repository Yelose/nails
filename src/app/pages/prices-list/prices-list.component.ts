import { Component, computed, signal } from '@angular/core';
import { PRICE_LIST } from './price-list';
import { PriceItemModel } from '../../models/price-item-model';
import { CustomCheckboxComponent } from '../components/shared/custom-checkbox/custom-checkbox.component';
import { CustomRadioComponent } from '../components/shared/custom-radio/custom-radio.component';

@Component({
  selector: 'app-prices-list',
  standalone: true,
  imports: [CustomCheckboxComponent, CustomRadioComponent],
  templateUrl: './prices-list.component.html',
  styleUrls: ['./prices-list.component.scss']
})
export class PricesListComponent {
  readonly priceList = signal<PriceItemModel[]>(PRICE_LIST);
  readonly selectedNames = signal<Set<string>>(new Set());

  readonly groupedItems = computed(() =>
    this.priceList().reduce<Record<string, PriceItemModel[]>>((acc, item) => {
      if (!acc[item.type]) acc[item.type] = [];
      acc[item.type].push(item);
      return acc;
    }, {})
  );

  toggleSelection(name: string, type: string) {
    const current = new Set(this.selectedNames());

    if (type === 'base' || type === 'finish') {
      const groupItems = this.groupedItems()[type] || [];
      groupItems.forEach(item => current.delete(item.name));
    }

    if (current.has(name)) {
      current.delete(name);
    } else {
      current.add(name);
    }

    this.selectedNames.set(current);
  }

  isSelected(name: string, type: string): boolean {
    return this.selectedNames().has(name);
  }

  readonly selectedItems = computed(() =>
    this.priceList().filter(item => this.isSelected(item.name, item.type))
  );

  readonly selectedBase = computed(() =>
    this.selectedItems().find(i => i.type === 'base') || null
  );

  readonly selectedFinish = computed(() =>
    this.selectedItems().find(i => i.type === 'finish') || null
  );

  readonly selectedExtras = computed(() =>
    this.selectedItems().filter(i => i.type === 'extra')
  );

  readonly selectedPreparation = computed(() =>
    this.selectedItems().filter(i => i.type === 'preparation')
  );

  readonly selectedRemoval = computed(() =>
    this.selectedItems().filter(i => i.type === 'removal')
  );

  readonly totalPrice = computed(() =>
    this.selectedItems().reduce((sum, item) => sum + item.price, 0)
  );

  openWhatsapp(): void {
    const productos = this.selectedItems()
      .map(p => `${p.name} (${p.price} €)`)
      .join(', ');

    const mensaje = `Quiero pedir una cita, me interesan los productos: ${productos}`;
    const url = `https://wa.me/34656614888?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  }
}
