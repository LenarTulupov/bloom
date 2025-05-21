import { ISlide } from "@/types/slide.interface";

export const slides: ISlide[] = [
  {
    id: 1,
    title: "Timeless Styles, Modern Elegance",
    description: "Discover the latest trends crafted for your unique style.",
    href: "/catalog/all-clothing",
    banner:  {
      id: 1,
      type: "video",
      src: "/home/collections-carousel/slide-1.mp4"
    },
  },
  {
    id: 2,
    title: "Chic Finds at Better Prices",
    description: "Elevate your wardrobe without stretching your budget.",
    href: "/catalog/sales",
    banner : {
      id: 2,
      alt: "image",
      type: "image",
      src: "/home/collections-carousel/slide-2.jpg",
      width: 1000,
      height: 1000,
    }
  },
  {
    id: 3,
    title: "Style Meets Savings",
    description: "Uncover exclusive deals on fashion-forward pieces.",
    href: "/catalog/trousers",
    banner : {
      id: 3,
      type: "video",
      src: "/home/collections-carousel/slide-3.webm",
    },
  },
  {
    id: 4,
    title: "Your Favorite Looks, Now on Sale",
    description: "Don’t miss the chance to shop timeless designs for less.",
    href: "/catalog/sales",
    banner : {
      id: 4,
      alt: "image",
      type: "image",
      src: "/home/collections-carousel/slide-4.jpg",
      width: 1000,
      height: 1000,
    }
  },
]