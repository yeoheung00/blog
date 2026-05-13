'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ListItem({icon, children, target}: {icon: ReactNode, children: string, target: string}){
    const path = usePathname();
    let isActive = path.startsWith(target);
    if(path!=="/" && target==="/") isActive = false;
    return (
        <Link className={`w-full h-10 flex flex-row gap-2 px-2 rounded-xl items-center ${isActive?"bg-secondary-container text-on-secondary-container":"text-on-surface"}`} href={target}>
            {icon}
            <span className="text-large">{children}</span>
        </Link>
    )
}