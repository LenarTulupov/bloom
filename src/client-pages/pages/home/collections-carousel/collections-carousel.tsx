import Button from "@/components/ui/button/button";
import styles from "./collections-carousel.module.scss";
import Title from "@/components/ui/title/title";

export default function CollectionsCarousel() {
  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.video}
        autoPlay
        muted
        playsInline
        loop 
        preload="none"
      >
        <source src="/home/collections-carousel/slide-1.mp4" type="video/mp4" />
        <track
          src="/videos/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Ваш браузер не поддерживает видео тег.
      </video>
      <div className={styles.text}>
        <Title bold className={styles.title}>Collection</Title>
        <div className={styles.descr}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text.
        </div>
        <Button>Shop now</Button>
      </div>
    </div>
  );
}
