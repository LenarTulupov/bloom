import cn from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsDropdownOpened } from "@/store/features/dropdown-slice";
import DropdownPanel from "@/components/dropdown-panel/dropdown-panel";
import styles from "./navigation-item.module.scss";

interface INavigationItem {
  children: ReactNode;
  column?: boolean;
  item: {
    id: number;
    href: string;
    name: string;
    categories?: {
      id: number;
      href?: string;
      category: string;
      categoryItems?: {
        id: number;
        name: string;
        href: string;
      }[];
    }[];
  };
}

export function NavigationItem({
  children,
  column = false,
  item,
}: INavigationItem) {
  const liRef = useRef<HTMLLIElement>(null);
  const [position, setPosition] = useState<{
    width: number;
    height: number;
    top: number;
    left: number;
    bottom: number;
  }>({ width: 0, height: 0, top: 0, left: 0, bottom: 0 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const isDropdownOpened = useAppSelector(
    (state) => state.dropdownState.isDropdownOpened
  );
  const dispatch = useAppDispatch();

  const onMouseEnter = () => {
    if (item?.categories && item.categories.length > 0) {
      setActiveCategory(item.name);
      dispatch(setIsDropdownOpened(true));
    }
  };
  const onMouseLeave = () => {
    setActiveCategory(null);
    dispatch(setIsDropdownOpened(false));
  };

  useEffect(() => {
    if (liRef.current && isDropdownOpened) {
      const rect = liRef.current.getBoundingClientRect();
      setPosition({
        width: rect.width,
        height: rect.height,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
      });
    }
  }, [isDropdownOpened]);

  return (
    <li
      className={cn(
        styles.navigation__item,
        column ? styles.navigation__item_column : ""
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={liRef}
    >
      {children}
      {isDropdownOpened && (
        <div
          className={styles["hover-zone"]}
          style={{
            position: "fixed",
            top: position.bottom,
            width: position.width,
          }}
        >
          <DropdownPanel
            item={item}
            activeCategory={activeCategory}
          />
        </div>
      )}
    </li>
  );
}
