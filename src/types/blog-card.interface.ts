export interface IBlogCard {
  blog: {
    id: number;
    title: string;
    description: string;
    date: string;
    comments: number;
    image: string;
    href: string;
  }
}