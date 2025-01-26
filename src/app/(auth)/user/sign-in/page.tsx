import UserSignIn from "@/client-pages/auth/user/sign-in/sign-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Authentication"
}

export default function UserSignInPage() {
  return <UserSignIn/>
}
