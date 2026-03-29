import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

export default function Header() {

    return (
        <header className="sticky top-0 z-50 w-full bg-background">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-3xl font-bold tracking-tighter">
                    <span className="text-primary">M</span>in<span className="text-primary">K</span> Studio
                </Link>
                <div className="flex items-center gap-3">
                    <Link key="/about" href="/about" className="text-md font-bold">
                        About
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}