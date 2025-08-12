import { ICONS } from "@/constants/icons";
import Icon from "../../../icon/icon";
import ArrowIcon from "../../icons/arrow-icon/arrow-icon";
import { useAppSelector } from "@/store/hooks";
import styles from "./navigation-link-text.module.scss";
import { usePathname } from "next/navigation";

interface INavigationLinkText {
  name: string;
  hasDropdown: boolean;
  icon?: boolean;
  counter?: number;
}

export default function NavigationLinkText({
  name,
  hasDropdown,
  icon = false,
  counter
}: INavigationLinkText) {
  const upperName = name.slice(0, 1).toUpperCase() + name.slice(1);
  const isDropdownOpened = useAppSelector(
    (state) => state.dropdownState.isDropdownOpened
  );
  const isScrolled = useAppSelector((state) => state.scrollState.isScrolled);
  const pathname = usePathname();

  console.log(counter)

  const arrowColor =
    pathname === "/"
      ? isDropdownOpened || isScrolled
        ? "primary"
        : "white"
      : "primary";
  return (
    <div className={styles["navigation__link-text"]}>
      {!icon ? (
        upperName
      ) : ICONS[name] ? (
        <Icon
          name={name}
          color={
            pathname === "/" ? (isScrolled ? "primary" : "white") : "primary"
          }
        />
      ) : null}
      {(name === "favorite" || name === "cart") && counter !== undefined && counter >= 0 && (
        <span className={styles["navigation__link-counter"]}>{counter}</span>
      )}
      {/* dropdown arrow */}
      {hasDropdown && (
        <ArrowIcon isHovered={isDropdownOpened} color={arrowColor} />
      )}
    </div>
  );
}
