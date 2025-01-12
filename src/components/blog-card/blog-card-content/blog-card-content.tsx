import Title from "@/components/ui/title/title";
import DateComments from "./date-comments/date-comments";
import Description from "@/components/ui/description/description";
import Divider from "@/components/ui/divider/divider";
import MoreButton from "@/components/ui/more-button/more-button";
import { IBlogCardContent } from "../types/blog-card-content.interface";
import styles from './blog-card-content.module.scss';

export default function BlogCardContent({ 
  date, 
  comments, 
  title, 
  description, 
  href 
}: IBlogCardContent) {
  return (
    <div className={styles["blog-card__content"]}>
      <DateComments date={date} comments={comments} />
      <Title className={styles["blog-card__content-title"]} size="xxs">
        {title}
      </Title>
      <Description className={styles["blog-card__content-descr"]} size="sm">
        {description}
      </Description>
      <Divider />
      <MoreButton href={href} />
    </div>
  );
}
