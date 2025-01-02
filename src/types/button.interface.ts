import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  href?: string;
  color?: "purple" | "white" | "yellow";
  className?: string;
  link?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}