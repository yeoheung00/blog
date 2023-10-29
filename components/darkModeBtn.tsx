'use client';
import { useTheme } from 'next-themes';

export default function DarkModeBtn() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      className="w-12 h-12 bg-transparent p-0"
      onClick={() => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
      }}
    >
      {currentTheme === 'dark' ? (
        <div
          style={{
            width: '36px',
            height: '36px',
            margin: '6px',
            maskImage: "url('/icons/dark_fill.svg')",
            maskSize: '36px',
            WebkitMaskImage: "url('/icons/dark_fill.svg')",
            WebkitMaskSize: '36px',
            backgroundColor: 'var(--color-paragraph)',
          }}
        ></div>
      ) : (
        <div
          style={{
            width: '36px',
            height: '36px',
            margin: '6px',
            maskImage: "url('/icons/dark_fill.svg')",
            maskSize: '36px',
            WebkitMaskImage: "url('/icons/light_fill.svg')",
            WebkitMaskSize: '36px',
            backgroundColor: 'var(--color-paragraph)',
          }}
        ></div>
      )}
    </button>
  );
}
