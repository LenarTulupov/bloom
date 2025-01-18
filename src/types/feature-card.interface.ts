export interface IFeatureCard {
  id: number;
  title: string;
  description?: boolean;
  text?: string;
  items: {
    id: number;
    title: string;
  }[];
}
