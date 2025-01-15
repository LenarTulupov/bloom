'use client'

import Title from '@/components/ui/title/title';
import { questionItems } from '@/constants/question-items';
import QuestionItem from '@/components/ui/question-item/question-item';
import { useState } from 'react';
import styles from './questions-content.module.scss';

export default function QuestionsContent() {
  const [openedItemId, setOpenedItemId] = useState<number | null>(null);

  const handleTextToggle = (id: number) => {
    setOpenedItemId((prevId) => (prevId === id ? null : id))
  } 
  return (
    <div className={styles["questions-section__content"]}>
      <div className={styles["questions-section__content-header"]}>
        <Title>Frequently Asked Questions</Title>
        <img src="/home/questions/question.png" alt="question" />
      </div>
      <ul className={styles["questions-section__content-list"]}>
        {questionItems.map((item) => {
          return (
            <QuestionItem
              key={item.id}
              question={item.question}
              text={item.text}
              onClick={() => handleTextToggle(item.id)}
              isItemTextOpened={openedItemId === item.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
