import Image from "next/image";
import Link from "next/link";

interface ISocialButton {
  href: string;
  
}

export default function SocialButton() {
  return (
    <Link href={href}>
      <Image
        alt={alt}
        src={stc}
        width={46}
        height={46}
      />
    </Link>
  )
};
