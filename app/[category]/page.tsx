import PostList from '@/components/PostList';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {

  const { category } = await params;

  return (
    <div className="w-full max-w-5xl">
      <PostList category={category}/>
    </div>
  );
}