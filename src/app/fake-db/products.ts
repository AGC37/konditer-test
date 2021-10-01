export interface Products {
  id: number;
  product: string;
  proteins: number;
  fats: number;
  carbs: number;
  kcal: number;

}


export const products = [
  {
    id: 1,
    product: 'Сахар',
    proteins: 0.0,
    fats: 0.0,
    carbs: 99.7,
    kcal: 398,
  },
  {
    id: 2,
    product: 'Мука пшеничная',
    proteins: 9.2,
    fats: 1.2,
    carbs: 74.9,
    kcal: 342,
  },
  {
    id: 3,
    product: 'Сливки 35%',
    proteins: 2.5,
    fats: 35.0,
    carbs: 3.0,
    kcal: 337,
  },
  {
    id: 4,
    product: 'Молоко 3.2%',
    proteins: 2.9,
    fats: 3.2,
    carbs: 4.7,
    kcal: 59,
  },
  {
    id: 5,
    product: 'Творог 9%',
    proteins: 16.7,
    fats: 9.0,
    carbs: 2.0,
    kcal: 159,
  },
  {
    id: 6,
    product: 'Какао Dr.Oetker',
    proteins: 22.0,
    fats: 11.0,
    carbs: 12.0,
    kcal: 235,
  },
  {
    id: 7,
    product: 'Разрыхлитель теста',
    proteins: 0.1,
    fats: 0.0,
    carbs: 19.6,
    kcal: 79,
  },
  {
    id: 8,
    product: 'Яйцо куриное',
    proteins: 12.7,
    fats: 10.9,
    carbs: 0.7,
    kcal: 157,
  },
  {
    id: 9,
    product: 'Крахмал кукурузный',
    proteins: 1.0,
    fats: 0.6,
    carbs: 85.2,
    kcal: 329,
  },
  {
    id: 10,
    product: 'Сыр Маскарпоне',
    proteins: 4.8,
    fats: 41.5,
    carbs: 4.8,
    kcal: 412,
  },
]
