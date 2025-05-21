import { ReactNode } from "react";

interface ICarouselSlide {
  children: ReactNode;
}

export default function CarouselSlide({ children }: ICarouselSlide) {
  return <div>{children}</div>
}
