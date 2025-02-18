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
  const { name, href } = link;
  const nameUpper = name.slice(0, 1).toUpperCase() + name.slice(1);
  return (
    <Link href={href} className={styles['dropdown__link']}>
      { nameUpper }
    </Link>
  )
}
