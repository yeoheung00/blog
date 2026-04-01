'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgressBar() {
    // 1. 현재 페이지의 스크롤 위치를 0~1 사이 값으로 가져옵니다.
    const { scrollYProgress } = useScroll();

    return (
        <div className="sticky top-[39px] left-0 right-0 w-full h-[1px] z-[60] showup">
            <div className='absolute top-[0.5px] left-0 w-full h-[1px] bg-border'/>
            <motion.div
                className='absolute top-0 left-0 origin-left bg-foreground w-full h-[2px] z-60'
                style={{ scaleX: scrollYProgress }}
            />
        </div>
    );
}