import Image from "next/image";
import Link from "next/link";
import styles from './social-button.module.scss';

interface ISocialButton {
  href: string;
  alt: string;
  src: string;
}

export default function SocialButton({ href, alt, src }: ISocialButton) {
  return (
    <Link href={href} className={styles['social-button']}>
      <Image
        alt={alt}
        src={src}
        width={18}
        height={18}
      />
    </Link>
  )
};
