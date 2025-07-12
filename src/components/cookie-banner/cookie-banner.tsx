import Button from "../ui/buttons/button/button";
import Container from "../ui/container/container";
import Description from "../ui/description/description";
import styles from "./cookie-banner.module.scss";

interface ICookieBanner {
  onClick: () => void;
}

export default function CookieBanner({ onClick }: ICookieBanner) {
  return (
    <div className={styles["cookie-banner"]}>
      <Container>
        <div className={styles["cookie-banner__content"]}>
          <Description>
            Select «Accept all» to agree to our use of cookies and similar
            technologies to enhance your browsing experience, security,
            analytics and customization. Select ”Manage cookies» to make more
            choices or opt out.
          </Description>
          <div className={styles["cookie-banner__buttons"]}>
            <Button
              font="xs"
              width="fit"
              weight="semi"
              color="secondary"
              onClick={onClick}
              uppercase={false}
              className={styles['cookie-banner__buttons-size']}
            >
              Manage cookies
            </Button>
            <Button
              font="xs"
              width="fit"
              weight="semi"
              onClick={onClick}
              uppercase={false}
              className={styles['cookie-banner__buttons-size']}
            >
              Accept all
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
