import InputText from "@/components/ui/input-text/input-text";
import Link from "next/link";

export default function UserSignIn() {
  return (
    <div>
      <InputText placeholder="Email"/>
      <InputText placeholder="Password"/>
      <Link href='/user/sign-up'>
        Register here
      </Link>
    </div>
  )
}
