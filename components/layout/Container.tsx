import Aside from "./Aside";
import Blog from "./aside/Blog";

export default function Container({children}: {children: React.ReactNode}){
    return (
        <div className="relative w-full h-[calc(100%-56px)] flex flex-row">
            <Aside><Blog/></Aside>
            <main className="bg-surface w-full h-full lg:rounded-tl-2xl">
            {children}
            </main>
        </div>
    )
}