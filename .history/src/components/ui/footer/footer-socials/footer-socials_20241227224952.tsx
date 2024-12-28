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
