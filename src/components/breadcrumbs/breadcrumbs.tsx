import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./breadcrumbs.module.scss";
import ArrowIcon from "../ui/icons/arrow-icon/arrow-icon";

interface IBreadcrumbs {
  className?: string;
  paddings?: boolean;
}

export default function Breadcrumbs({ paddings = true, className = "" }: IBreadcrumbs) {
  const pathname = usePathname();

  const pathParts = pathname.split("/").filter(Boolean);

  const breadcrumbs = pathParts.map((part, index) => {
    const href = "/" + pathParts.slice(0, index + 1).join("/");

    const label = part
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return { href, label };
  });

  return (
    <nav className={`${styles.breadcrumbs} ${paddings ? styles.paddings: ""} ${className}`}>
      <ol className={styles.breadcrumbs__list}>
        <li className={styles.breadcrumbs__item}>
          <Link className={styles.breadcrumbs__link} href="/">
            Home
          </Link>
          {breadcrumbs.length > 0 && <ArrowIcon direction="right" color="gray"/>}
        </li>
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li className={styles.breadcrumbs__item} key={index}>
              {!isLast ? (
                <>
                  <Link className={styles.breadcrumbs__link} href={crumb.href}>
                    {crumb.label}
                  </Link>
                  <ArrowIcon direction="right" color="gray"/>
                </>
              ) : (
                <Link className={styles.breadcrumbs__link} href={crumb.href}>
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
