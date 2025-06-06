import { PromotionModel } from "../../models/promotion-model";

export const PROMOTIONS: PromotionModel[] = [
  { name: 'Primera visita', discount: '-40 %', notes: 'Descuento en tu primera visita' },
  { name: 'Ven con una amiga', discount: '-50 %', notes: 'Ambas reciben el descuento' },
  { name: 'Masaje gratuito', discount: '100 %', notes: 'Durante las dos primeras semanas con cualquier servicio' },
  { name: 'Trae 3 amigas', bonus: '1 manicura o -50 %', notes: 'Por cada 3 amigas nuevas' }
];
