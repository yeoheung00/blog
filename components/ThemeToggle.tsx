"use client"

import { useState } from "react";
import { Moon, Sun, Monitor, Check } from "lucide-react";
import { useTheme } from "next-themes";
import IcLight from "./icons/ic-light";
import IcDark from "./icons/ic-dark";
import IcSystem from "./icons/ic-system";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [open, setOpen] = useState(false);

    const options = [
        { name: "Light", value: "light", icon: <IcLight className="w-6 h-6" /> },
        { name: "Dark", value: "dark", icon: <IcDark className="w-6 h-6" /> },
        { name: "System", value: "system", icon: <IcSystem className="w-6 h-6" /> },
    ];

    return (
        <div className="relative w-10 h-10">
            <button
                onClick={() => setOpen(!open)}
                className="relative w-10 h-10"
            >
                <IcLight className="absolute h-6 w-6 top-2 left-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <IcDark className="absolute h-6 w-6 top-2 left-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
            {(open ?
                <div className="relative">
                    <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
                    <div className="absolute right-0 top-2 rounded-xl bg-surface-container shadow-sm z-20">
                        <div className="p-2">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        setTheme(option.value);
                                        setOpen(false);
                                    }}
                                    className={`flex items-center justify-between w-full p-3 rounded-lg text-sm ${theme === option.value?"bg-secondary-container text-on-secondary-container":"text-on-surface"} hover:-translate-y-1 active:translate-y-0 active:scale-95`}
                                >
                                    <div className="flex items-center gap-3">
                                        {option.icon}
                                        {option.name}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div> : <></>
            )}
        </div>
    );
}