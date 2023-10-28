import { Post } from '@/.contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function PostCard(post: Post) {
  return (
    <div className="w-[calc(50%-0.5rem)]">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-[var(--color-paragraph)]">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs">
        {format(parseISO(post.date), 'yyyy. MM. d. a h : mm')}
      </time>
      <p className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0">{post.summary}</p>
    </div>
  );
}
