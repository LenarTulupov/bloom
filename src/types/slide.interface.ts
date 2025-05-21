export interface ISlide {
  id: number;
  title: string;
    description: string;
    banner:
      | {
          id: number;
          type: "image";
          src: string;
          alt: string;
          width: number;
          height: number;
        }
      | {
          id: number;
          type: "video";
          src: string;
        };
    href: string;
  // slide: {
  //   title: string;
  //   description: string;
  //   banner:
  //     | {
  //         id: number;
  //         type: "image";
  //         src: string;
  //         alt: string;
  //         width: number;
  //         height: number;
  //       }
  //     | {
  //         id: number;
  //         type: "video";
  //         src: string;
  //       };
  //   buttonText: string;
  //   href: string;
  // };
}
