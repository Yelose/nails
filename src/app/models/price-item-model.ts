export interface PriceItemModel {
  name: string;
  price: number;
  type: 'base' | 'extra' | 'preparation' | 'removal' | 'finish';
  notes?: string;
}
