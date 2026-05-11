'use client'
import ListDepth from "@/components/icons/list-depth";
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ListSubItem({depth, children, line, target}: {depth: number, children: string, line: number, target: string}) {
    const path = usePathname();
    const isActive = path.startsWith(target);
    const depthLine = (key: number) => (<ListDepth key={key} className="text-outline-variant"></ListDepth>)
    const lines = new Array(depth).fill(depthLine);
    return (
        <Link href={target} className={`w-full h-10 flex flex-rowitems-center pl-2 items-center`}>
            {lines.map((line, index)=>(line(index)))}
            <span className={`text-large h-full line-full leading-10 rounded-xl px-2 grow-1 hover:translate-x-1 active:translate-x-0 ${isActive?"bg-secondary-container text-on-secondary-container":"text-on-surface"}`}>{children}</span>
        </Link>
    )
}