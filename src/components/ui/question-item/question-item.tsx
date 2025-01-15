import { ICONS } from "@/constants/icons";
import Icon from "../icon/icon";
import styles from "./question-item.module.scss";
import Title from "../title/title";
import Description from "../description/description";

interface IQuestionItem {
  question: string;
  text?: string;
  onClick: () => void;
  isItemTextOpened: boolean;
}

export default function QuestionItem({ question, text, onClick, isItemTextOpened }: IQuestionItem) {
  return (
    <button className={styles["question-item"]} onClick={onClick}>
      <div className={styles["question-item__main"]}>
        <Title size="xxs">{question}</Title>
        <Icon 
          icon={!isItemTextOpened ? ICONS.add : ICONS.remove} 
          className={styles['question-item__icon']}
        />
      </div>
      {isItemTextOpened &&  (
        <Description className={styles['question-item__descr']} text={text}/>
      )}
    </button>
  );
}
