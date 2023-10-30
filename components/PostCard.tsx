import { Post } from '@/.contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function PostCard(post: Post) {
  return (
    <Link
      href={post.url}
      className="lg:w-[calc(50%-1rem)] w-full overflow-hidden flex flex-col gap-2"
    >
      <img
        className="w-full h-auto rounded-xl"
        src={post.thumbnail}
        alt={post.title}
      />
      <time dateTime={post.date} className="text-xs mt-2">
        {format(new Date(post.date), 'yyyy. MM. dd. a hh:mm')}
      </time>
      <h2 className="mb-1 text-2xl m-0 p-0 leading-none">
        <div className="text-[var(--color-paragraph)]">{post.title}</div>
      </h2>
    </Link>
  );
}
