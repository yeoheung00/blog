'use client'

import Link from "next/link"
import { useEffect, useState } from "react";

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
    }, [darkTheme]);

    useEffect(() => {
        const root = window.document.body;
        const initialColorValue = root.style.getPropertyValue(
            "--initial-color-mode"
        );

        setDarkTheme(initialColorValue === "dark");
    }, []);
    return (
        <div className="fixed w-full h-12 bg-[var(--color-pre)]">
            <div className="h-12 max-w-5xl mx-auto flex justify-between items-center px-4">
                <Link className="text-xl font-black text-[var(--color-primary-accent)]" href='/'>MinK's Blog</Link>
                <div className="flex gap-x-5 items-center">
                    <button onClick={handleToggle}>{darkTheme?"Dark ":"Light "}theme</button>
                    <Link className="font-bold text-[var(--color-primary-accent)]" href='/posts'>Post</Link>
                    <Link className="font-bold text-[var(--color-primary-accent)]" href='/projects'>Projects</Link>
                </div>
            </div>
        </div>
    )
}