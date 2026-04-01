// app/posts/[category]/[post]/page.tsx
import PostProgress from '@/components/PostProgress'
import PostBody from '@/components/PostBody';
import PostTitle from '@/components/PostTitle';
import { getPost } from '@/libs/posts';
import { notFound } from 'next/navigation';
import PostComment from '@/components/PostComment';

export default async function Page({ params }: { params: Promise<{ category: string; post: string }> }) {
  const { category, post } = await params;
  const postData = await getPost(category, post);

  if (!postData) notFound();

  return (
    <div className='w-full flex-row justify-items-center showup'>
      <PostProgress />
      <div className='flex-row max-w-2xl w-full'>
        <PostTitle meta={postData.meta} />
        <PostBody source={postData.content} />
        <PostComment />
      </div>
    </div>
  );
}