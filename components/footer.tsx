import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 flex flex-col gap-4 items-center">
      <div className="flex gap-4">
        <Link href="https://github.com/yeoheung00" target="_blank">
          <div
            style={{
              width: '24px',
              height: '24px',
              maskImage: "url('/icons/github-mark.svg')",
              maskSize: '24px',
              WebkitMaskImage: "url('/icons/github-mark.svg')",
              WebkitMaskSize: '24px',
              backgroundColor: 'var(--color-paragraph)',
            }}
          />
        </Link>
        <Link href="https://instagram.com/min_k_333" target="_blank">
          <div
            style={{
              width: '24px',
              height: '24px',
              maskImage: "url('/icons/github-mark.svg')",
              maskSize: '24px',
              WebkitMaskImage: "url('/icons/Instagram_Glyph_Black.svg')",
              WebkitMaskSize: '24px',
              backgroundColor: 'var(--color-paragraph)',
            }}
          />
        </Link>
      </div>
      <p className="text-sm">© 2023. 민경원 all rights reserved.</p>
    </footer>
  );
}
