"use client";

import BackgroundColor from "@/components/ui/background-color/background-color";
import Container from "@/components/ui/container/container";
import Title from "@/components/ui/title/title";
import QuestionItem from "@/components/ui/question-item/question-item";
import { questionItems } from "@/constants/question-items";
import styles from "./questions.module.scss";
import { useState } from "react";

export default function Questions() {
  const [openedItemId, setOpenedItemId] = useState<number | null>(null);

  const handleTextToggle = (id: number) => {
    setOpenedItemId((prevId) => (prevId === id ? null : id))
  } 
  return (
    <section className={styles["questions-section"]}>
      <BackgroundColor color="gray">
        <Container>
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
        </Container>
      </BackgroundColor>
    </section>
  );
}
