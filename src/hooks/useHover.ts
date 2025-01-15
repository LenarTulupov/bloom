'use client'

import { useState } from "react"

export default function useHover() {
  const [hover, setHover] = useState<boolean>(false);

  const onMouseEnter = () => {
    setHover(true);
  }
  const onMouseLeave = () => {
    setHover(false);
  }
  return { hover, onMouseEnter, onMouseLeave }
}