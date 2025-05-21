import { ICarouselItem } from "@/types/carousel-items.interface";

export const carouselItems: ICarouselItem[] = [
  {
    id: 1,
    type: "video",
    src: "/home/collections-carousel/slide-1.mp4"
  },
  
  {
    id: 2,
    alt: "image",
    type: "image",
    src: "/home/collections-carousel/slide-2.jpg",
    width: 1000,
    height: 1000,
  },
  {
    id: 3,
    type: "video",
    src: "/home/collections-carousel/slide-3.webm",
  },
  {
    id: 4,
    alt: "image",
    type: "image",
    src: "/home/collections-carousel/slide-4.jpg",
    width: 1000,
    height: 1000,
  },
]