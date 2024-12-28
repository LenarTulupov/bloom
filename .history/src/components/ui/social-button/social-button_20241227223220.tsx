import Image from "next/image";
import Link from "next/link";

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
