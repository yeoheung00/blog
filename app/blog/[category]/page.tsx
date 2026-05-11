import PostList from '@/components/PostList';
import { getPostsByCategory } from '@/libs/posts';

export default async function CategoryPage({ params, }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const posts = await getPostsByCategory(category);
    return (
        <main className="w-full">
            <PostList posts={posts} />
        </main>
    );
}