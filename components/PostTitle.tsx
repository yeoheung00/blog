import { PostMeta } from "@/libs/posts";
export default function PostBody({ meta }: { meta: PostMeta }) {
    const day = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    return (
        <div className="w-full">
            <h1 className="text-5xl text-center font-bold my-4">{meta.title}</h1>
            <p className="text-m text-center">{`${meta.date.getFullYear()}년 ${meta.date.getMonth()+1}월 ${meta.date.getDate()}일 ${day[meta.date.getDay()]}`}</p>
            <hr className="mx-4 my-4"/>
        </div>
    );
}