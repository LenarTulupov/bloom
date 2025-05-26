import { HTMLAttributes, ReactNode } from "react";

export interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
  title?: string;
  children?: ReactNode;
  className?: string;
  color?: 'white' | 'black';
  size?: "xl" | "xs" | "sm" | "xxl";
  background?: boolean;
  h?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
  uppercase?: boolean;
}