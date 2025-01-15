'use client'

import StoreProvider from "@/store/store-provider";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode}) {
  return (
    <StoreProvider>
      { children }
    </StoreProvider>
  )
}