import { FC, SVGProps } from 'react';

export const ICONS: Record<string, FC<SVGProps<SVGSVGElement>> | string> = {
  favorite: '/icons/heart.svg',
  favoriteActive: '/icons/heart-active.svg',
  search: '/icons/search.svg',
  login: '/icons/user.svg',
  cart: '/icons/cart.svg',
  arrow: '/icons/arrow.svg',
  facebook: '/icons/facebook.svg',
  instagram: '/icons/instagram.svg',
  twitter: '/icons/twitter.svg',
  linkedin: '/icons/linkedin.svg',
  arrowFull: 'icons/arrow-full.svg',
  copy: 'icons/copy.svg'
}