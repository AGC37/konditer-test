export interface NavigationAdmin {
  id: number,
  title: string,
  path: string,
  parent: number,
}

export const itemsliks = [
  {
    id: 1,
    title: 'Рубрики',
    path: 'create-category',
    parent: 0,
  },
  {
    id: 2,
    title: 'Создать пост',
    path: 'create',
    parent: 0,
  },
  {
    id: 3,
    title: 'Добавить товар',
    path: 'create-product',
    parent: 0,
  },
  {
    id: 4,
    title: 'Кабинет пользователя',
    path: 'cabinet',
    parent: 0,
  },
]
