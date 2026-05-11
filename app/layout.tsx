import type { Metadata } from "next";
import { Geist_Mono, Gothic_A1 } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header";
import Container from "@/components/layout/Container";

const gothicA1 = Gothic_A1({ variable: "--font-gothic-a1", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


export const metadata: Metadata = {
    title: {
        default: "MinK Studio",
        template: "%s | MinK Studio",
    },
    description: "나만의 디지털 공방",
    keywords: ["Next.js", "Web Development", "3D Modeling", "Blender", "Visual Design", "HTML", "Javascript", "Css", "MinK Studio"],
    authors: [{ name: "Min.K" }],
    openGraph: {
        title: "MinK Studio",
        description: "나만의 디지털 공방, MinK Studio입니다.",
        url: "https://mink-stud.io",
        siteName: "MinK Studio",
        locale: "ko_KR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "MinK Studio",
        description: "나만의 디지털 공방, MinK Studio입니다.",
    },
    verification: {
        google: "SMjXdCiu2PrQ2tRQTdM3RqbKSOmP-u2xjFWTK-FtSYo",
        other: {
            "naver-site-verification": "4da5b54f94294ea02ac1c6a1a26d1ec3f0e72b8f",
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning className="w-full h-full">
            <body className={`${gothicA1.variable} ${geistMono.variable} antialiased w-full h-full bg-surface-container-high`}>
                <ThemeProvider attribute="class">
                    <Header />
                    <Container children={children} />
                </ThemeProvider>
            </body>
        </html>
    );
}
