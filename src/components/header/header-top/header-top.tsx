import Container from "../../ui/container/container";
import cn from "classnames";
import { languages } from "@/constants/languages";
import { useEffect, useRef, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTransparentZone,
} from "../../ui/dropdown";
import styles from "./header-top.module.scss";

export default function HeaderTop() {
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");
  const [selectsPosition, setSelectsPosition] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);
  const linkCurrentLanguage = useRef<HTMLButtonElement | null>(null);
  const [isSelectsOpened, setIsSelectsOpened] = useState<boolean>(false);

  const handleLanguageSelect = (language: string) => {
    setCurrentLanguage(language);
  };

  const handleSelectsOpen = () => {
    setIsSelectsOpened((p) => !p);
  };

  const selects = (
    <Dropdown isPortal>
      <DropdownList isPortal>
        {languages.map((lang) => (
          <DropdownItem key={lang.id}>
            <button onClick={() => handleLanguageSelect(lang.code)}>
              {lang.code}
            </button>
          </DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  );

  useEffect(() => {
    if (isSelectsOpened && linkCurrentLanguage.current) {
      const rect = linkCurrentLanguage.current.getBoundingClientRect();
      setSelectsPosition({
        top: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  }, [isSelectsOpened]);

  return (
    <div className={styles.header__top}>
      <Container>
        <div className={cn(styles["header__top-content"], styles.content)}>
          <div className={styles["header__top-text"]}>
            Discounts on everything -15% from 60$ and 20% from 100$
          </div>
          <button
            className={styles["header__top-current"]}
            ref={linkCurrentLanguage}
            onClick={handleSelectsOpen}
          >
            {currentLanguage}
          </button>
          {isSelectsOpened && (
            <DropdownTransparentZone position={selectsPosition}>
              {selects}
            </DropdownTransparentZone>
          )}
        </div>
      </Container>
    </div>
  );
}
