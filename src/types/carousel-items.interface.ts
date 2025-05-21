export type ICarouselItem =
  | {
      id: number;
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  | {
      type: "video";
      id: number;
      src: string;
    };

    // title, subtitle, image, link

    // {
    //   title: "Timeless Styles, Modern Elegance",
    //   subtitle: "Discover the latest trends crafted for your unique style.",
    //   banner: ,
    //   link: ""
    // }

    
