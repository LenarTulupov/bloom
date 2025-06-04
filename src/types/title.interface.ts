import { HTMLAttributes, ReactNode } from "react";

export interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
  title?: string;
  children?: ReactNode;
  className?: string;
  color?: 'white' | 'black';
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  background?: boolean;
  h?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
  uppercase?: boolean;
}