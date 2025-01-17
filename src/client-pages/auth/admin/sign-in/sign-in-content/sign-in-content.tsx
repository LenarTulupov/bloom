import Title from "@/components/ui/title/title";
import SignInForm from "./sign-in-form/sign-in-form";
import styles from './sign-in-content.module.scss';


export default function SignInContent() {

  return (
    <div className={styles['admin-sign-in__content']}>
    <Title>Admin Sign In</Title>
    <SignInForm/>
  </div>
  )
}
