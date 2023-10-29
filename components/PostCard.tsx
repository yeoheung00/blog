import { Post } from '@/.contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function PostCard(post: Post) {
  return (
    <div className="w-[calc(50%-0.5rem)] bg-[var(--color-card)] rounded-xl overflow-hidden">
      <img className="w-full h-auto" src={post.thumbnail} alt={post.title} />
      <div className="flex flex-col gap-2 p-4">
        <h2 className="mb-1 text-xl m-0 p-0 leading-none">
          <Link href={post.url} className="text-[var(--color-paragraph)]">
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className="text-sm">
          {format(parseISO(post.date), 'yyyy. MM. d. a h : mm')}
        </time>
        <p className="text-m">{post.summary}</p>
      </div>
    </div>
  );
}
