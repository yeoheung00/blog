export default function IcBlog({ className }: { className?: string }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* 연필 부분: fill 사용 */}
            <path
                d="M17 5L19 7L12 14H10V12L17 5ZM17 3C16.49 3 15.98 3.2 15.59 3.59L8.59 10.59C8.21 10.97 8 11.47 8 12V14C8 15.1 8.9 16 10 16H12C12.53 16 13.04 15.79 13.41 15.41L20.41 8.41C21.19 7.63 21.19 6.36 20.41 5.58L18.41 3.58C18.02 3.19 17.51 2.99 17 2.99V3Z"
                fill="currentColor"
            />
            {/* 하단 노트 부분: stroke 사용 */}
            <path
                d="M10.43 5H6C4.9 5 4 5.89 4 7V18C4 19.1 4.89 20 6 20H17C18.1 20 19 19.11 19 18V13.57"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}