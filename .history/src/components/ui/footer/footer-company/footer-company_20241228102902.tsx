st

export default function FooterCompany() {
  return (
    <div className={styles.footer__company}>
      <Logo />
      <p className={styles['footer__company-description']}>
        NewBloom is your trusted partner for a smooth, secure, and joyful surrogacy journey in Georgia
      </p>
      <FooterSocials />
    </div>
  )
};
