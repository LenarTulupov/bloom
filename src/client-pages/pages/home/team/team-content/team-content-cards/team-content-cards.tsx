import MemberCard from "@/components/member-card/member-card";
import { teamMembers } from "@/constants/team-members";
import styles from './team-content-cards.module.scss';

export default function TeamContentCards() {
  return (
    <div className={styles["section-team__content-cards"]}>
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
  );
}
