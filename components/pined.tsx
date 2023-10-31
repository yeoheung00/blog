'use client';

import { Post, allPosts } from '@/.contentlayer/generated';
import { compareDesc, parseISO } from 'date-fns';
import { format as timeZoneFormat, toDate } from 'date-fns-tz';
import Link from 'next/link';
import { useState } from 'react';

const PinedPost = ({
  index,
  current,
  post,
}: {
  index: number;
  current: number;
  post: Post;
}) => {
  let thumbnail = '/posts/default.png';
  if (thumbnail !== post.thumbnail) thumbnail = `${post.url}/${post.thumbnail}`
  return (
    <Link
      href={post.url}
      className="w-full h-auto bg-[var(--color-card)] overflow-hidden relative"
      style={{
        display: current === index ? 'block' : 'none',
      }}
    >
      <img src={thumbnail} alt={post.title} />
      <div className="py-2 px-4 absolute w-full bottom-0 bg-[--color-glass-morphism]">
        <time dateTime={post.date} className="text-xs mb-2">
          {timeZoneFormat(toDate(parseISO(post.date), { timeZone: 'Asia/Seoul' }), 'yyyy. MM. dd. a hh:mm', { timeZone: 'Asia/Seoul' })}
        </time>
        <div className="text-2xl font-bold text-[var(--color-primary-accent)]">
          {post.title}
        </div>
      </div>
    </Link>
  );
};

export default function Pined() {
  const [current, setCurrent] = useState(0);
  const posts = allPosts
    .filter((post) => post.tag.includes('고정'))
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div>
      <div className="max-w-2xl w-full m-auto relative overflow-hidden rounded-xl">
        {posts.map((post, idx) => (
          <PinedPost key={idx} index={idx} current={current} post={post} />
        ))}
      </div>
      <div className="flex gap-4 justify-center py-4">
        {posts.map((post, idx) => (
          <div
            key={idx}
            style={{
              width: '16px',
              height: '16px',
              backgroundColor:
                idx === current ? 'var(--color-primary-accent)' : 'transparent',
              border: '1px solid var(--color-primary-accent)',
              borderRadius: '4px',
            }}
            onClick={() => {
              setCurrent(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
