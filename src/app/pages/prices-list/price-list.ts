import { PriceItemModel } from '../../models/price-item-model';

export const PRICE_LIST: PriceItemModel[] = [
  // BASES
  {
    name: 'Semipermanente (sin color)',
    price: 15,
    type: 'base',
    notes: 'Incluye limado, base coat y top coat'
  },
  {
    name: 'Permanente (sin color)',
    price: 30,
    type: 'base',
    notes: 'Polygel transparente con limado, base coat y top coat'
  },
  {
    name: 'Permanente francesa',
    price: 40,
    type: 'base',
    notes: 'Polygel blanco y rosa en forma francesa. Incluye preparación y sellado'
  },
  {
    name: 'Permanente babyboomer',
    price: 42,
    type: 'base',
    notes: 'Degradado completo en polygel.'
  },

  // EXTRAS PARA
  {
    name: 'Color en gel',
    price: 5,
    type: 'extra',
    notes: 'Gran variedad de colores'
  },
  {
    name: 'Dibujos con pincel fino',
    price: 2,
    type: 'extra',
    notes: 'Precio según diseño y cantidad. Mejor consultar'
  },

  {
    name: 'Francesa en semipermanente',
    price: 5,
    type: 'extra',
    notes: 'Aplicable sobre base semipermanente'
  },
  {
    name: 'Efecto espejo (cromado)',
    price: 5,
    type: 'extra',
    notes: 'Añadido a cualquier set'
  },
  {
    name: 'Decoración con piedras',
    price: 2,
    type: 'extra',
    notes: 'Desde 2 €. Diseño sencillo, sumable'
  },
  {
    name: 'Foil o stickers decorativos',
    price: 2,
    type: 'extra',
    notes: 'Añadido opcional a semipermanente o permanente'
  },
  {
    name: "Extensión de uñas",
    price: 10,
    type: "extra",
    notes: "Alargar las uñas solo en gel o polygel (permanente)."
  },

  // PREPARACIÓN (opcional)
  {
    name: 'Masaje hidratante de manos',
    price: 5,
    type: 'preparation',
    notes: 'Extra en cualquier servicio'
  },
  {
    name: 'Manicura clásica',
    price: 12,
    type: 'preparation',
    notes: 'Corte, limado, cutículas y brillo'
  },
  {
    name: 'Tratamiento endurecedor',
    price: 3,
    type: 'preparation',
    notes: 'Para uñas quebradizas, débiles o finas'
  },

  // RETIRADA
  {
    name: 'Retirada de semipermanente',
    price: 5,
    type: 'removal',
    notes: 'Gratuita si haces nuevo servicio'
  },
  {
    name: 'Retirada de permanente',
    price: 10,
    type: 'removal',
    notes: 'Con limado, refuerzo y cuidado'
  },
  // TERMINACIÓN
  {
    name: "Ninguno",
    price: 0,
    type: "finish",
    notes: 'Sin hidratación final'
  },
  {
    name: 'Aceite de almendras para cutículas',
    price: 2,
    type: 'finish',
    notes: 'Nutre y suaviza las cutículas tras el limado'
  },
  {
    name: 'Crema hidratante con masaje corto',
    price: 3,
    type: 'finish',
    notes: 'Aplicación final con masaje breve de manos'
  },
];
