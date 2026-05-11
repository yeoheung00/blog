export default function IcSystem({ className }: { className?: string }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g>
                {/* 모니터 화면 외곽선 */}
                <path
                    d="M19 4H5C4.45 4 4 4.45 4 5V14C4 14.55 4.45 15 5 15H19C19.55 15 20 14.55 20 14V5C20 4.45 19.55 4 19 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                {/* 모니터 받침대 하단 가로선 */}
                <path
                    d="M7 20H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* 모니터 기둥 */}
                <path
                    d="M12 20V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}