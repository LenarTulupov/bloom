import { usePathname } from "next/navigation";
import Breadcrumps from "../breadcrumps/breadcrumps";
import Container from "../container/container";
import Title from "../title/title";
import styles from "./header-section.module.scss";

export default function HeaderSection() {
  const pathname = usePathname();
  let formattedPathname =
    pathname.slice(1, 2).toUpperCase() + pathname.slice(2);

  if(pathname.split('-')) {
    
  }

  if (pathname === "/about") {
    formattedPathname += " Us";
  }
  return (
    <section className={styles["header-section"]}>
      <Container>
        <div className={styles["header-section__content"]}>
          <Breadcrumps
            className={styles["header-section__breadcrumbs"]}
            formattedPathname={formattedPathname}
          />
          <Title title={formattedPathname} size="xl" color="white"/>
        </div>
      </Container>
    </section>
  );
}
