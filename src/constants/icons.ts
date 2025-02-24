import { FC, SVGProps } from 'react';

export const ICONS: Record<string, FC<SVGProps<SVGSVGElement>> | string> = {
  favorite: '/icons/heart.svg',
  search: '/icons/search.svg',
  login: '/icons/user.svg',
  cart: '/icons/cart.svg',
  arrow: '/icons/arrow.svg'
}