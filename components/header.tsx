'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.css';
import DarkModeBtn from './darkModeBtn';

export default function Header() {
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
          <DarkModeBtn />
          <button className={styles.opener} onClick={handlerMenuToggle}>
            <div className={styles.openIcon} />
          </button>
          <div className={`${styles.nav} ${isOpen ? styles.active : null}`}>
            <div className={styles.navwrap}>
              <Link
                className="font-bold text-[var(--color-paragraph)] text-xl"
                href="/posts"
                onClick={handlerMenuClose}
              >
                Post
              </Link>
              <Link
                className="font-bold text-[var(--color-paragraph)] text-xl"
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
