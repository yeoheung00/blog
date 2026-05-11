interface Props {
    className?: string;
}

export default function IcHome({ className }: Props) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 5L19 11.22V19H16V16C16 14.35 14.65 13 13 13H11C9.35 13 8 14.35 8 16V19H5V11.22L12 5ZM12 3C11.53 3 11.05 3.17 10.67 3.51L3.67 9.73C3.24 10.11 3 10.65 3 11.22V19C3 20.1 3.9 21 5 21H8C9.1 21 10 20.1 10 19V16C10 15.45 10.45 15 11 15H13C13.55 15 14 15.45 14 16V19C14 20.1 14.9 21 16 21H19C20.1 21 21 20.1 21 19V11.22C21 10.65 20.76 10.1 20.33 9.73L13.33 3.51C12.95 3.17 12.48 3 12 3Z"
                fill="currentColor" // 부모의 text-* 색상을 따라가도록 설정
            />
        </svg>
    );
};