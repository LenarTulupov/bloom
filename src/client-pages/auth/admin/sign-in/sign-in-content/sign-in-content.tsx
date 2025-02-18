import SignInForm from "./sign-in-form/sign-in-form";
import styles from './sign-in-content.module.scss';


export default function SignInContent() {

  return (
    <div className={styles['admin-sign-in__content']}>
    <div>Admin Sign In</div>
    <SignInForm/>
  </div>
  )
}
