import Image from "next/image";
import Link from "next/link";

interface ISocialButton {
  href: string;
  alt: string;
  src: string;
}

export default function SocialButton({ href, alt, src }: ISocialButton) {
  return (
    <Link href={href}>
      <Image
        alt={alt}
        src={src}
        width={46}
        height={46}
      />
    </Link>
  )
};
