export interface NavigationAdmin {
  id: number,
  title: string,
  path: string,
  parent: number,
}

export const itemsliks = [
  {
    id: 1,
    title: 'Создать пост',
    path: 'create-post',
    parent: 0,
  },
  {
    id: 2,
    title: 'Добавить товар',
    path: 'create-product',
    parent: 0,
  },
  {
    id: 2,
    title: 'Кабинет пользователя',
    path: 'cabinet',
    parent: 0,
  },
]
