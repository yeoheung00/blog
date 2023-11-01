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
  console.log('date', post.date);
  const date = timeZoneFormat(toDate(parseISO(post.date), { timeZone: 'Asia/Seoul' }), 'yyyy. MM. dd. a hh:mm', { timeZone: 'Asia/Seoul' });
  console.log('format', date);
  return (
    <Link
      href={post.url}
      className="w-full h-auto bg-[--color-surface-container] overflow-hidden relative"
      style={{
        display: current === index ? 'block' : 'none',
      }}
    >
      <img src={thumbnail} alt={post.title} />
      <div className="py-2 px-4 absolute w-full bottom-0 bg-[--color-surface-container]">
        <time dateTime={post.date} className="text-xs mb-2">
          {date}
        </time>
        <div className="text-2xl font-bold text-[var(--color-primary)]">
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
                idx === current ? 'var(--color-primary)' : 'transparent',
              border: '1px solid var(--color-primary)',
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
