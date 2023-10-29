import { Post } from '@/.contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function PostCard(post: Post) {
  return (
    <Link
      href={post.url}
      className="w-[calc(50%-1rem)]  overflow-hidden flex flex-col gap-4"
    >
      <img
        className="w-full h-auto rounded-xl"
        src={post.thumbnail}
        alt={post.title}
      />
      <time dateTime={post.date} className="text-sm">
        {format(parseISO(post.date), 'yyyy. MM. d. a h : mm')}
      </time>
      <h2 className="mb-1 text-xl m-0 p-0 leading-none">
        <div className="text-[var(--color-paragraph)]">{post.title}</div>
      </h2>
    </Link>
  );
}
