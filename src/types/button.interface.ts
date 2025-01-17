import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  href?: string;
  color?: "primary" | "white" | "accent";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}