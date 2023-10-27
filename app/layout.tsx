import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { cookies } from 'next/headers'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MinK Blog',
  description: 'MinK\'s blog..',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  function setColorsByTheme() {
    const persistedPreference = window.localStorage.getItem("theme");
    const hasUsedToggle = typeof persistedPreference === 'string';
    
    
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof preference.matches === "boolean";

    let colorMode = 'dark';
    
    if (hasUsedToggle) {
      colorMode = persistedPreference; 
    } else if(hasMediaQueryPreference){
      colorMode = preference.matches ? "dark" : "light";
    }

    const root = document.body;

    root.style.setProperty("--initial-color-mode", colorMode);

    if (colorMode === "dark") root.setAttribute("data-theme", "dark");
  }


  const ScriptTag = () => {
    const stringifyFn = String(setColorsByTheme);
  
    const fnToRunOnClient = `(${stringifyFn})()`;
  
    return <script dangerouslySetInnerHTML={{ __html: fnToRunOnClient }} />;
  };


  return (
    <html lang="kr">
      <body className={inter.className}>
        <ScriptTag />
        <Header />
        {children}
      </body>
    </html>
  )
}
