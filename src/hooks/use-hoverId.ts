import { useState } from "react"

export const useHoverId = () => {
  const [hoverId, setHoverId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoverId(id);
  }

  const handleMouseLeave = () => {
    setHoverId(null);
  }
  return { hoverId, handleMouseEnter, handleMouseLeave }
}