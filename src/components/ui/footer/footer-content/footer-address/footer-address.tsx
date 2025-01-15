import Title from "@/components/ui/title/title";
import FooterAddressItem from "./footer-address-item/footer-address-item";
import { footerAddressItems } from "@/constants/footer-address-items";
import { getSVGIcon } from "@/utils/get-svg-icon";
import styles from "./footer-address.module.scss";

export default function FooterAddress() {
  return (
    <div className={styles["footer-address"]}>
      <Title size="xs" title="Our Address" color="white" />
      <ul className={styles["footer-address__list"]}>
        {footerAddressItems.map((item) => {
          const SVGIcon = getSVGIcon(item.name);

          if(!SVGIcon) {
            return null
          }
          return (
            <FooterAddressItem
              key={item.id}
              icon={SVGIcon}
              description={item.description}
            />
          );
        })}
      </ul>
    </div>
  );
}
