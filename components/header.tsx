'use client';

import Link from 'next/link';
import { useEffect, useState, MouseEvent } from 'react';
import styles from './header.module.css';

export default function Header() {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.body.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        document.body.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    const isThemeExiest = typeof theme === 'string';

    console.log('exist', theme, isThemeExiest);

    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    const isPreferenceExiest = typeof preference.matches === 'boolean';

    if (isThemeExiest) {
      window.document.body.setAttribute('data-theme', theme);
    } else if (isPreferenceExiest) {
      window.document.body.setAttribute(
        'data-theme',
        preference.matches ? 'dark' : 'light'
      );
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const handlerMenuClose = () => setIsOpen(false);
  const handlerMenuToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed top-0 w-full h-14 z-50 bg-[--color-background]">
      <div className="h-14 max-w-5xl mx-auto flex justify-between items-center px-4">
        <Link
          className="text-2xl font-black text-[var(--color-primary-accent)]"
          href="/"
        >
          MinK&apos;s Blog
        </Link>
        <div className="flex gap-x-4 items-center">
          <button className={styles.theme} onClick={handleToggle}>
            <div className={styles.themeIcon} />
          </button>
          <button className={styles.opener} onClick={handlerMenuToggle}>
            <div className={styles.openIcon} />
          </button>
          <div className={`${styles.nav} ${isOpen ? styles.active : null}`}>
            <div className={styles.navwrap}>
              <Link
                className="font-bold text-[var(--color-paragraph)] text-2xl"
                href="/posts"
                onClick={handlerMenuClose}
              >
                Post
              </Link>
              <Link
                className="font-bold text-[var(--color-paragraph)] text-2xl"
                href="/projects"
                onClick={handlerMenuClose}
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
