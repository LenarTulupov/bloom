import Container from "@/components/ui/container/container";
import Title from "@/components/ui/title/title";
import MemberCard from "@/components/member-card/member-card";
import Button from "@/components/ui/button/button";
import { teamMembers } from "@/constants/team-members";
import Image from "next/image";
import styles from "./team.module.scss";

export default function Team() {
  return (
    <section className={styles["section-team"]}>
      <div className={styles['section-team__img-left']}>
        <Image
          alt="mother shows love"
          src="/home/team/mother.png"
          width={475}
          height={1062}
        />
      </div>
      <div className={styles['section-team__img-right']}>
        <Image
          alt="mother shows love"
          src="/home/team/mother.png"
          width={475}
          height={1062}
        />
      </div>
      <Container className={styles['section-team__container']}>
        <Title className={styles["section-team__title"]} color="white">
          Meet Out Team
        </Title>
        <div className={styles["section-team__cards"]}>
          {teamMembers.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              description={member.description}
              image={member.image}
              role={member.role}
              socials={member.socials}
            />
          ))}
        </div>
        <Button className={styles["section-team__button"]} color="white">
          Learn More
        </Button>
      </Container>
    </section>
  );
}
