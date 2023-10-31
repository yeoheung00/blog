import { Post } from '@/.contentlayer/generated';
import { formatInTimeZone, utcToZonedTime } from 'date-fns-tz';
import Link from 'next/link';

export default function PostCard(post: Post) {
  let thumbnail = '/posts/default.png';
  if (thumbnail !== post.thumbnail) thumbnail = `${post.url}/${post.thumbnail}`
  return (
    <Link
      href={post.url}
      className="lg:w-[calc(50%-1rem)] w-full overflow-hidden flex flex-col gap-2"
    >
      <img
        className="w-full h-auto rounded-xl"
        src={thumbnail}
        alt={post.title}
      />
      <time dateTime={post.date} className="text-xs mt-2">
        {formatInTimeZone(utcToZonedTime(post.date, 'Asia/Seoul'), 'Asia/Seoul', 'yyyy. MM. dd. a hh:mm')}
      </time>
      <h2 className="mb-1 text-2xl m-0 p-0 leading-none">
        <div className="text-[var(--color-paragraph)]">{post.title}</div>
      </h2>
    </Link>
  );
}
