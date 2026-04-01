import { getCategories } from '@/libs/posts';
import { formatSlug } from '@/libs/utils';
import Link from 'next/link';

export default async function CategoryNav({ current }: { current: string }) {
  const categories = await getCategories();
  return (
    <div className="flex items-center gap-4 overflow-x-scroll no-scrollbar px-4 mt-4">

      <Link
        href="/"
        className={`text-sm font-bold text-nowrap ${current == "all_posts" ? "bg-primary border-primary" : "border-background"} hover:border-foreground border p-2 rounded-lg`}
      >
        All Posts
      </Link>

      {categories.map((category) => (
        <Link
          key={category}
          href={`/${category}`}
          className={`text-sm font-bold text-nowrap ${current == category ? "bg-primary border-primary" : "border-background"} hover:border-foreground border p-2 rounded-lg`}
        >
          {formatSlug(category)}
        </Link>
      ))}
    </div>
  );
}