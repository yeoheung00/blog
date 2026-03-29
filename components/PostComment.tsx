'use client';
import Giscus from '@giscus/react';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function PostFooter() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <footer className="p-4">
            <Giscus
                repo="yeoheung00/blog"
                repoId="R_kgDORzx9bQ"
                category="Announcements"
                categoryId="DIC_kwDORzx9bc4C5iTz"
                mapping="pathname"
                strict="0"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme={resolvedTheme === "dark" ? "dark" : "light"} // 여기서 실시간 반영!
                lang="ko"
            />
            
        </footer>
    );
}