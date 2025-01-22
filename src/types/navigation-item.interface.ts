import { ReactNode } from "react";

export interface INavigationItem {
  className?: string;
  column?: boolean;
  children: ReactNode;
}