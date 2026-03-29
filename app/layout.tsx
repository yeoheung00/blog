import type { Metadata } from "next";
import { Geist_Mono, Gothic_A1 } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header";

const gothicA1 = Gothic_A1({variable: "--font-gothic-a1", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});
const geistMono = Geist_Mono({  variable: "--font-geist-mono",  subsets: ["latin"]});

export const metadata: Metadata = {
  title: "MinK Studio",
  description: "MinK's private studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className="bg-background">
      <body
        className={`${gothicA1.variable} ${geistMono.variable} antialiased flex-row justify-items-center`}
      >
        <ThemeProvider
          attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
