import { Post } from "@/libs/posts";
import { formatSlug } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";


export default function PostItem({ post }: { post: Post }) {
    const day = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const thumbnail = `/posts/${post.category}/${post.slug}/thumbnail.png`;
    return (
        <Link
            className="w-full p-2 rounded-xl hover:bg-secondary-container hover:-translate-y-1 hover:scale-102 active:translate-y-0 active:scale-100"
            href={`/blog/${post.category}/${post.slug}`}
        >
            <div className="w-full flex flex-row md:flex-col items-stretch">
                <div className="hidden xs:block w-[40%] md:w-full m-auto">
                    <Image
                        className="w-full h-auto rounded-lg"
                        src={thumbnail}
                        alt={post.title}
                        width="640"
                        height="360"/>
                </div>
                <div className="flex flex-col gap-1 p-2 w-full">
                    <h3 className="font-bold text-small">{formatSlug(post.category)}</h3>
                    <h2 className="font-black text-medium grow-1 md:grow-0">{post.title}</h2>
                    {post.description ? (<p className="text-small">{post.description}</p>) : (<></>)}
                    <p className="text-small">{`${post.date.getFullYear()}년 ${post.date.getMonth() + 1}월 ${post.date.getDate()}일 ${day[post.date.getDay()]}`}</p>
                </div>
            </div>
        </Link>
    )
}