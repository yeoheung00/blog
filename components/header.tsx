'use client'

import Link from "next/link"
import { useEffect, useState } from "react";
import styles from './header.module.css'

export default function Header() {
    const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

    const handleToggle = () => {
        setDarkTheme(!darkTheme);
    };

    useEffect(() => {
        if (darkTheme !== undefined) {
            if (darkTheme) {
                document.body.setAttribute("data-theme", "dark");
                window.localStorage.setItem("theme", "dark");
            } else {
                document.body.removeAttribute("data-theme");
                window.localStorage.setItem("theme", "light");
            }
        }
        window.addEventListener("resize", () => {
            setIsOpen(false);
        });
    }, [darkTheme]);

    useEffect(() => {
        const root = window.document.body;
        const initialColorValue = root.style.getPropertyValue(
            "--initial-color-mode"
        );

        setDarkTheme(initialColorValue === "dark");
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const handlerMenuOpen = () => setIsOpen(true);
    const handlerMenuClose = () => setIsOpen(false);
    const handlerMenuToggle = () => setIsOpen(prev => !prev);

    return (
        <div className="fixed top-0 w-full h-16 bg-[var(--color-pre)] z-50">
            <div className="h-16 max-w-5xl mx-auto flex justify-between items-center px-4">
                <Link className="text-3xl font-black text-[var(--color-primary-accent)]" href='/'>MinK&apos;s Blog</Link>
                <div className="flex gap-x-8 items-center">
                    <button className={styles.theme} onClick={handleToggle}></button>
                    <button className={styles.opener} onClick={handlerMenuToggle}></button>
                    <div className={`${styles.nav} ${isOpen ? styles.active : null}`}>
                        <Link className="font-bold text-[var(--color-paragraph)] text-2xl" href='/posts' onClick={handlerMenuClose}>Post</Link>
                        <Link className="font-bold text-[var(--color-paragraph)] text-2xl" href='/projects' onClick={handlerMenuClose}>Projects</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}