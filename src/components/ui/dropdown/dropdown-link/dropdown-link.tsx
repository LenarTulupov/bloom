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
  return (
    <Link href={href} className={styles['dropdown__link']}>
      { name }
    </Link>
  )
}
