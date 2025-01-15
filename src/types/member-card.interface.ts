export interface IMemberCard {
  name: string;
  description: string;
  role: string;
  image: string;
  socials: {
    id: number;
    url: string;
    name: string;
  }[];
}