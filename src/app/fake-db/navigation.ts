export interface Navigation {
  id?: number,
  title: string,
  slug: string,
  description: string,
  mainCategory: string,
}

export const categoryPosts: Navigation[] = [
  {
    id: 1,
    title: 'Торты',
    slug: 'torty',
    description: 'какие-то торты',
    mainCategory: 'какая-то категория',
  },
  {
    id: 2,
    title: 'Зефир',
    slug: 'zefir',
    description: 'какой-то зефир',
    mainCategory: 'какая-то категория для зефира',
  },
  {
    id: 3,
    title: 'Капкейки',
    slug: 'kapkejki',
    description: 'какие-то капкейки',
    mainCategory: 'какая-то категория для капкейков',
  },
  {
    id: 4,
    title: 'Войти',
    slug: 'admin',
    description: 'какие-то капкейки',
    mainCategory: 'какая-то категория для капкейков',
  },
]
