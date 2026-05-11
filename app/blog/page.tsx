import PostList from "@/components/PostList";
import { getAllPosts } from "@/libs/posts";

export default async function Blog() {
    const posts = await getAllPosts();
    return(
        <main>
            <PostList posts={posts}/>
        </main>
    )
}