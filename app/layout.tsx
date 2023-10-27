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

  const themeInitializerScript = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
  })()
  `;

  // 초기 테마를 설정하는 함수
  function setInitialColorMode() {
    function getInitialColorMode() {
      // 로컬스토리지에서 'theme' 값 가져오기
      const persistedPreferenceMode = window.localStorage.getItem("theme");
      const hasPersistedPreference =
        typeof persistedPreferenceMode === "string";

      if (hasPersistedPreference) {
        return persistedPreferenceMode;
      }

      const preference = window.matchMedia("(prefers-color-scheme: dark)");
      const hasMediaQueryPreference = typeof preference.matches === "boolean";

      if (hasMediaQueryPreference) {
        return preference.matches ? "dark" : "light";
      }

      return "light";
    }

    //현재 테마 모드
    const currentColorMode = getInitialColorMode();
    const element = document.body;
    element.style.setProperty("--initial-color-mode", currentColorMode);

    // 현재 다크모드라면 다크모드를 바로 적용 시켜줌
    if (currentColorMode === "dark")
      document.body.setAttribute("data-theme", "dark");
  }


  return (
    <html lang="kr">
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        ></script>
        <Header />
        {children}
      </body>
    </html>
  )
}
