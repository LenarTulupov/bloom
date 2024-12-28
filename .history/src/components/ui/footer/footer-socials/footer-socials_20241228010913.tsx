import SocialButton from "../../social-button/social-button";
import styles from './footer-socials.module.scss';

export default function FooterSocials() {
  return (
    <div className={styles['footer__company-socials']}>
      {socialButtons.map((button) => (
        <SocialButton
          key={button.id}
          href={button.name}
          alt={button.name}
          src={button.icon}
        />
      ))}
    </div>
  )
};
