import UserSignUp from "@/client-pages/auth/user/sign-up/sign-up";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Registration"
}

export default function UserSignUpPage() {
  return <UserSignUp/>
};
