import Image from "next/image";
import Link from "next/link";

interface ISocialButton {
  href: string;
  alt: string;
  src: string;
}

export default function SocialButton({ href, alt, src }: ISocialButton) {
  return (
    <Link href={href} className={styles}>
      <Image
        alt={alt}
        src={src}
        width={14}
        height={14}
      />
    </Link>
  )
};
