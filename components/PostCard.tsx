import { Post } from '@/.contentlayer/generated';
import { parseISO } from 'date-fns';
import { format as timeZoneFormat, toDate } from 'date-fns-tz';
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
        className="w-full h-auto rounded-3xl"
        src={thumbnail}
        alt={post.title}
      />
      <time dateTime={post.date} className="text-xs mt-2 px-2">
        {timeZoneFormat(toDate(parseISO(post.date), { timeZone: 'Asia/Seoul' }), 'yyyy. MM. dd. a hh:mm', { timeZone: 'Asia/Seoul' })}
      </time>
      <h2 className="mb-1 text-2xl m-0 p-0 leading-none px-2">
        <div className="text-[var(--color-paragraph)]">{post.title}</div>
      </h2>
    </Link>
  );
}
