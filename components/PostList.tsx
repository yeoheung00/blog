'use client'
import { Post } from '@/libs/posts';
import PostItem from './PostItem';
import { useEffect, useState } from 'react';
import { formatSlug } from '@/libs/utils';

export default function PostList({ posts }: { posts: Post[] }) {
    const tagList = ["all_posts", ...new Set(
        posts.flatMap(post =>
            post.tag ? post.tag.split(" ") : []
        )
    )];

    console.log(tagList);
    const [tag, setTag] = useState("all_posts");
    const [postList, setPostList] = useState(posts);

    useEffect(() => {
        setPostList(tag === "all_posts" ? posts : posts.filter(post => (post.tag?.split(" ").includes(tag))));
    }, [tag]);

    return (
        <div className="w-full">

            {tagList.length === 1 ? <></> : <nav className="overflow-x-scroll no-scrollbar overflow-y-visible flex flex-row gap-2 pl-4 pt-4 pr-4">
                {tagList.map(item => (
                    <NavItem key={item} handler={() => setTag(item)} isSelected={tag === item}>{formatSlug(item)}</NavItem>
                ))

                }
            </nav>}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 p-4">
                {postList.map((post) => (
                    <PostItem key={post.slug} post={post} />
                ))}
            </div>

            {posts.length === 0 && (
                <div className="py-20 text-center">
                    <p className="text-slate-500 text-lg">아직 작성된 글이 없습니다. ✍️</p>
                </div>
            )}
        </div>
    );
}

function NavItem({ handler, isSelected, children }: { handler: () => void; isSelected:boolean, children: string; }) {
    return (
        <button
            onClick={handler}
            className={`p-2 text-medium whitespace-nowrap rounded-xl active:translate-y-[2px] ${isSelected?"bg-on-surface text-surface":"bg-surface-container-high text-on-surface"}`}>
            {children}
        </button>
    )
}