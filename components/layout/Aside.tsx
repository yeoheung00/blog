'use client'
import { ReactNode, useState } from "react";
import IcHome from "../icons/ic-home";
import IcProject from "../icons/ic-project";
import ListItem from "./aside/ListItem";
import IcHamburger from "../icons/ic-hamburger";

export default function Aside({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleContentClick = (e: React.MouseEvent) => {
        // 클릭된 요소(e.target)가 <a> 태그이거나 
        // <a> 태그 안에 있는 요소(글자 등)일 때만 메뉴를 닫습니다.
        const target = e.target as HTMLElement;

        // 가장 가까운 앵커(a) 태그가 있는지 확인
        if (target.closest('a')) {
            setIsOpen(false);
        }
    };
    return (
        <div className="absolute lg:relative w-0 lg:w-80 xl:w-100 h-full">
            <button className="block lg:hidden absolute top-[-48px] left-2 w-10 h-10 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
                <IcHamburger className="text-on-surface" />
            </button>
            <aside onClick={handleContentClick} className={`absolute lg:relative ${isOpen ? "left-0" : "left-[-240px]"} lg:left-0 w-60 lg:w-full h-full p-4 flex flex-col gap-2 bg-surface-container-high z-2`}>
                <ListItem icon={(<IcHome className="text-on-surface" />)} target="/">Home</ListItem>
                {children}
                <ListItem icon={(<IcProject className="text-on-surface" />)} target="/projects">Projects</ListItem>
            </aside>

            {isOpen?(<div className="block lg:hidden fixed inset-0 z-1" onClick={() => setIsOpen(false)} />):(<></>)}
        </div>
    )
}

function goto() {

}