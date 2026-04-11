import Link from "next/link";

export const a = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <Link href={href} className="no-underline text-primary hover:underline">{children}</Link>
    );
};