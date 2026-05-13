import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import Image from "next/image"
import Logo from "@/components/icons/logo"

export default function Header() {

    return (
        <header className="w-full h-14 px-2 flex items-center justify-between bg-surface-high">
            <Link href="/" className="ml-12 lg:ml-0">
                <Logo className="text-primary h-10" />
            </Link>
            <div className="flex items-center gap-3">
                <Link key="/about" href="/about" className="text-md font-bold pt-1">
                    About
                </Link>
                <ThemeToggle />
            </div>
        </header>
    )
}