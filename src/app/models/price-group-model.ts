import { PriceItemModel } from "./price-item-model";

export interface PriceGroupModel {
  category: string;
  items: PriceItemModel[];
}
