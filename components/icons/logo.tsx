

interface Props {
    className?: string;
    color?: string; // 특정 색상을 강제하고 싶을 때 사용
}

export default function Logo({ className, color }: Props) {
    return (
        <svg
            data-name="layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 8"
            className={className} // 기본 높이를 작게 잡음
        >
            <g data-name="layer 1">
                <path
                    d="M10.5,2l1.5,2-1.5,2,1.5,2h6L12,0l-1.5,2ZM15,0l3,4,3-4h-6ZM18,8h3l-3-4v4ZM10.5,2l-1.5-2-3,4v4h3l1.5-2-1.5-2,1.5-2ZM0,8h3l3-4V0L0,8Z"
                    fill={color || "currentColor"} // color 프롭이 없으면 글자 색상을 따라감
                />
            </g>
        </svg>
    );
};