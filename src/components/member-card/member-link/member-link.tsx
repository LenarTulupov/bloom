import Image from "next/image";
import styles from './member-link.module.scss';
import Link from "next/link";


interface IMemberLink {
  name: string;
  url: string;
}

export default function MemberLink({ name, url }: IMemberLink) {
  return (
    <Link href={url} className={styles['member-link']}>
      <Image
        alt={name}
        src={`/home/team/${name}.svg`}
        width={20}
        height={20}
      />
    </Link>
  )
}
