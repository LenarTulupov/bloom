import Link from 'next/link';
import styles from './dropdown-link.module.scss';

interface IDropdownLink {
  link: {
    id: number;
    name: string;
    href: string;
  }
}

export function DropdownLink({ link }: IDropdownLink) {
  const { category, href } = link;
  const nameUpper = category.slice(0, 1).toUpperCase() + category.slice(1);
  return (
    <Link href={href} className={styles['dropdown__link']}>
      { nameUpper }
    </Link>
  )
}
