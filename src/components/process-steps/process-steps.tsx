'use client'

import { useEffect, useRef, useState } from "react";
import { IStep } from "@/types/step.interface";
import ProcessLine from "./process-line/process-line";
import ProcessStep from "./process-step/process-step";
import styles from "./process-steps.module.scss";

interface IProcessSteps {
  steps: IStep[];
}

export default function ProcessSteps({ steps }: IProcessSteps) {
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState<number | null>(null);

  useEffect(() => {
    if(parentRef.current) {
      setParentWidth(parentRef.current.offsetWidth);
    }
    const handleResize = () => {
      if(parentRef.current) {
        setParentWidth(parentRef.current.offsetWidth);
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);
  return (
    <div className={styles["process-steps"]} ref={parentRef}>
      {steps.map((step) => (
        <ProcessStep
          key={step.id}
          id={step.id}
          title={step.title}
          description={step.description}
          parentWidth={parentWidth}
        />
      ))}
      <ProcessLine />
    </div>
  );
}
