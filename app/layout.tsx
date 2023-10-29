import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import ThemeProviders from 'components/provider';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MinK Blog',
  description: "MinK's blog..",
};

export default function docLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <ThemeProviders>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ThemeProviders>
      </body>
    </html>
  );
}
