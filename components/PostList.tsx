import CategoryNav from '@/components/CategoryNav';
import { getPostsByCategory } from '@/libs/posts';
import Link from 'next/link';
import PostItem from './PostItem';

export default async function PostList({category}: {category: string}) {
  const posts = await getPostsByCategory(category);

  return (
    <div className="w-full">

      <CategoryNav current={category}/>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 m-4">
        {posts.map((post) => (
            <PostItem key={post.slug} post={post}/>
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