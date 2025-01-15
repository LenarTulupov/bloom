import Link from "next/link";
import Title from "@/components/ui/title/title";
import { usefulLinks } from "@/constants/useful-links";
import Icon from "@/components/ui/icon/icon";
import { MdOutlineKeyboardDoubleArrowRight as DoubleArrow } from "react-icons/md";
import { useHoverId } from "@/hooks/useHoverId";
import styles from "./footer-links.module.scss";

export default function FooterLinks() {
  const {hoverId, handleMouseEnter, handleMouseLeave } = useHoverId();
  return (
    <div className={styles["footer__links"]}>
      <Title size="xs" title="Useful Links" color="white" />
      <ul className={styles["footer__links-list"]}>
        {usefulLinks.map((item) => (
          <li
            className={styles["footer__links-item"]}
            key={item.id}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={item.href} className={styles["footer__links-link"]}>
              <Icon icon={DoubleArrow} isHovered={hoverId === item.id} size="lg" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
