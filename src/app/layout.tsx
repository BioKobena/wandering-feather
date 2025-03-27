import type { Metadata } from "next";
import { Karla} from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";


const karlaFont = Karla({
  variable: "--font-karla",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Plume Vagabonde",
  description: "Design by KobeJS",
};

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode }>,
) {
  return (
    <html lang="en">
      <body
        className={`${karlaFont.variable} ${karlaFont.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
