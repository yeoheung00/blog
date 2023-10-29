import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import ThemeProviders from 'components/provider';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MinK Blog',
  description: "MinK's blog..",
};

export default function docLayout({ children }: { children: React.ReactNode }) {
  function getThemeFromLocalStorage() {
    const theme = window.localStorage.getItem('theme');
    const isThemeExiest = typeof theme === 'string';

    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    const isPreferenceExiest = typeof preference.matches === 'boolean';

    let theme_state = 'light';

    if (isThemeExiest) {
      theme_state = theme;
    } else if (isPreferenceExiest) {
      theme_state = preference.matches ? 'dark' : 'light';
    }

    const doc = document.body;

    doc.style.setProperty('--initial-color-mode', theme_state);

    if (theme_state === 'dark') doc.setAttribute('data-theme', 'dark');
  }

  return (
    <html lang="kr">
      <body className={inter.className}>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = window.localStorage.getItem('theme');
              const isThemeExiest = typeof theme === 'string';

              console.log('exist', theme,  isThemeExiest)

              const preference = window.matchMedia('(prefers-color-scheme: dark)');
              const isPreferenceExiest = typeof preference.matches === 'boolean';

              let theme_state = 'light';

              if (isThemeExiest) {
                window.document.body.setAttribute('data-theme', theme);
                window.document.body.style.setProperty('--initial-color-mode', theme);
              } else if (isPreferenceExiest) {
                window.document.body.setAttribute('data-theme', preference.matches ? 'dark' : 'light');
                window.document.body.style.setProperty('--initial-color-mode', preference.matches ? 'dark' : 'light');
              }
            `,
          }}
        /> */}
        <ThemeProviders>
          <Header />
          {children}
          <Analytics />
        </ThemeProviders>
      </body>
    </html>
  );
}
