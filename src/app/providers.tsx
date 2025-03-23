"use client";
import {HeroUIProvider} from '@he'//-
import {ThemeProvider as NextThemesProvider} from "next-themes";//-

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  )
}