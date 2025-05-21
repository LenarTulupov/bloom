import Image from "next/image";
import styles from "./carousel-banner.module.scss";
import { ReactNode } from "react";

type TypeCarouselBanner =
  | {
      type: "image";
      id: number;
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

interface ICarouselBanner {
  banner: TypeCarouselBanner;
  children?: ReactNode;
}

export default function CarouselBanner({ banner, children}: ICarouselBanner) {
  return (
    <div className={styles.carousel__banner}>
      {banner.type === "image" ? (
        <div
          className={`${styles["carousel__banner-container-image"]} ${styles["container-image"]}`}
        >
          <Image
            className={styles["container-image__image"]}
            src={banner.src}
            alt={banner.alt}
            width={banner.width}
            height={banner.height}
            priority
          />
        </div>
      ) : (
        <div
          className={`${styles["carousel__banner-container-video"]} ${styles["container-video"]}`}
        >
          <video
            className={styles["container-video__video"]}
            autoPlay
            muted
            playsInline
            loop
            preload="none"
          >
            <source src={banner.src} type="video/mp4" />
            <track
              src="/videos/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </div>
      )}
      <div>
        { children }
      </div>
    </div>
  );
}
