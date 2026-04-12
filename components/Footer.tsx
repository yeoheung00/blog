// components/layout/Footer.tsx
import Link from 'next/link';

export default function Footer() {
    const snsLinks = [
        { name: 'Github', href: 'https://github.com/yeoheung00' },
        { name: 'Instagram', href: 'https://instagram.com/min.k.333' },
        { name: 'Mail', href: 'mailto:yeoheung27@gmail.com' },
    ];

    return (
        <footer className="w-full py-12 px-6 mt-8">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                
                {/* 왼쪽: 브랜드 및 저작권 */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="text-lg font-bold tracking-tighter">
                        <span className='text-primary'>M</span>in<span className='text-primary'>K</span> Studio
                    </span>
                    <span className="text-xs tracking-widest">
                        © {new Date().getFullYear()} All Rights Reserved.
                    </span>
                </div>

                <nav className="flex gap-6">
                    {snsLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            target="_blank"
                            className="font-mono text-xs hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
}