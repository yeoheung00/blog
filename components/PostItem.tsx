import { Post } from "@/libs/posts";
import { formatSlug } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";


export default function PostItem({ post }: { post: Post }) {
    const day = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const thumbnail = `/posts/${post.category}/${post.slug}/thumbnail.png`;
    console.log(thumbnail);
    return (
        <Link
            className="w-full p-2 rounded-xl border border-background hover:border-foreground"
            href={`/${post.category}/${post.slug}`}
        >
            <div className="w-full">
                <Image
                    className="w-full h-auto rounded-lg"
                    src={thumbnail}
                    alt={post.title}
                    width="640"
                    height="360" />
                <div className="flex flex-col gap-1 p-2">
                    <h3 className="font-bold text-md">{formatSlug(post.category)}</h3>
                    <h2 className="font-black text-3xl">{post.title}</h2>
                    {post.description ? (<p className="text-sm">{post.description}</p>) : (<></>)}
                    <p className="text-xs">{`${post.date.getFullYear()}년 ${post.date.getMonth() + 1}월 ${post.date.getDate()}일 ${day[post.date.getDay()]}`}</p>
                </div>
            </div>
        </Link>
    )
}