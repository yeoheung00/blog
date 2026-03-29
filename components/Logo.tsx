import React from 'react';

interface LogoProps {
  className?: string; // Tailwind 클래스를 받기 위한 prop
}

export const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {/* 1. 바깥 원 테두리 */}
      <circle cx="50" cy="50" r="48" stroke="#718096" strokeWidth="2"/>

      {/* 2. 배경 기하학 패턴 (M) */}
      <path d="M50 8 C62 8 72 18 72 30 L72 50 C72 62 62 72 50 72 C38 72 28 62 28 50 L28 30 C28 18 38 8 50 8 Z" fill="#E2E8F0" opacity="0.5"/>
      <path d="M28 30 L50 8 L72 30" stroke="#718096" strokeWidth="1" strokeLinecap="round"/>
      <path d="M50 8 V72" stroke="#718096" strokeWidth="1"/>
      <path d="M28 50 H72" stroke="#718096" strokeWidth="1"/>

      {/* 3. 장인 밍크 캐릭터 (앞치마 & 표정) */}
      <circle cx="50" cy="50" r="25" fill="#FFFFFF" stroke="#1A365D" strokeWidth="2"/>
      <path d="M50 50 C50 60 40 70 30 65 V35 C40 30 50 40 50 50 Z" fill="#718096" stroke="#1A365D" strokeWidth="1"/> {/* 앞치마 */}
      <circle cx="43" cy="46" r="2" fill="#1A365D"/> {/* 눈 */}
      <circle cx="57" cy="46" r="2" fill="#1A365D"/> {/* 눈 */}
      <path d="M48 54 Q50 56 52 54" stroke="#1A365D" strokeWidth="2" strokeLinecap="round"/> {/* 입 */}

      {/* 4. 제작 도구 (렌치 & 펜) */}
      <path d="M20 70 L35 55 M32 58 L25 65" stroke="#1A365D" strokeWidth="2.5" strokeLinecap="round"/> {/* 렌치 손잡이 */}
      <circle cx="18" cy="72" r="5" fill="#E2E8F0" stroke="#1A365D" strokeWidth="2"/> {/* 렌치 머리 */}
      <path d="M80 70 L65 55 M68 58 L75 65" stroke="#1A365D" strokeWidth="2.5" strokeLinecap="round"/> {/* 펜 손잡이 */}
      <path d="M82 72 L78 76 M80 74 L84 70" stroke="#1A365D" strokeWidth="2.5" strokeLinecap="round"/> {/* 펜 촉 */}

      {/* 5. 텍스트 (MINK STUDIO, MARROW IN KNACK) */}
      <defs>
        <path id="textPathUpper" d="M15 50 A35 35 0 0 1 85 50" />
        <path id="textPathLower" d="M15 50 A35 35 0 0 0 85 50" />
      </defs>
      <text fill="#1A365D" fontSize="8" fontWeight="bold" letterSpacing="1">
        <textPath xlinkHref="#textPathUpper" startOffset="50%" textAnchor="middle">MINK STUDIO</textPath>
      </text>
      <text fill="#718096" fontSize="6" letterSpacing="1">
        <textPath xlinkHref="#textPathLower" startOffset="50%" textAnchor="middle">MARROW IN KNACK</textPath>
      </text>

      {/* 6. 하단 핵심 뱃지 데이터 포인트 */}
      <circle cx="50" cy="88" r="3" fill="#1A365D"/>
      <circle cx="43" cy="88" r="2" fill="#718096"/>
      <circle cx="57" cy="88" r="2" fill="#718096"/>
    </svg>
  );
};