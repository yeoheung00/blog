"use client"

import { useState } from "react";
import { Moon, Sun, Monitor, Check } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [open, setOpen] = useState(false);

    const options = [
        { name: "라이트", value: "light", icon: <Sun className="w-4 h-4" /> },
        { name: "다크", value: "dark", icon: <Moon className="w-4 h-4" /> },
        { name: "시스템", value: "system", icon: <Monitor className="w-4 h-4" /> },
    ];

    return (
        <div className="relative w-10 h-10">
            <button
                onClick={() => setOpen(!open)}
                className="relative w-10 h-10"
            >
                <Sun className="absolute h-6 w-6 top-2 left-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-6 w-6 top-2 left-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
            {(open ?
                <div>
                    <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
                    <div className="absolute right-0 mt-3 w-40 rounded-lg border border-border bg-background z-20">
                        <div className="p-2">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        setTheme(option.value);
                                        setOpen(false);
                                    }}
                                    className="flex items-center justify-between w-full p-3 text-sm bg-background"
                                >
                                    <div className="flex items-center gap-3">
                                        {option.icon}
                                        {option.name}
                                    </div>
                                    {theme == option.value && <Check className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div> : <></>
            )}
        </div>
    );
}