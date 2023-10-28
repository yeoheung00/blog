'use client';

import { Post, allPosts } from '@/.contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
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
  return (
    <div
      className="flex-1 h-128 bg-[var(--color-card)] overflow-hidden rounded-xl relative"
      style={{
        display: index !== current ? 'none' : 'block',
      }}
    >
      <img src={post.thumbnail} alt={post.thumbnail} />
      <div className="p-4 absolute w-full bottom-0 bg-[--color-glass-morphism] backdrop-blur-sm">
        <div className="text-2xl font-bold text-[var(--color-primary-accent)]">
          {post.title}
        </div>
        <time dateTime={post.date} className="mb-2 block text-xs">
          {format(parseISO(post.date), 'yyyy. MM. d. a h : mm')}
        </time>
        <p>{post.summary}</p>
      </div>
    </div>
  );
};

export default function Pined() {
  const [current, setCurrent] = useState(0);
  const posts = allPosts
    .filter((post) => post.tag.includes('고정'))
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  // const handlerPrev = () => {
  //   if (posts.length > 1) {
  //     const temp = current - 1;
  //     setCurrent(temp < 0 ? posts.length - 1 : temp);
  //   }
  // };

  // const handlerNext = () => {
  //   if (posts.length > 1) {
  //     const temp = current + 1;
  //     setCurrent(temp >= posts.length ? 0 : temp);
  //   }
  // };

  return (
    <div>
      <div className="flex">
        {/* <div className="flex items-center px-4" onClick={handlerPrev}>
          <div
            className="w-12"
            style={{
              width: '36px',
              height: '36px',
              maskImage: "url('/icons/left_big.svg')",
              WebkitMask: "url('/icons/left_big.svg')",
              maskSize: '36px',
              WebkitMaskSize: '36px',
              margin: '6px',
              backgroundColor: 'var(--color-paragraph)',
            }}
          />
        </div> */}
        {posts.map((post, idx) => (
          <PinedPost key={idx} index={idx} current={current} post={post} />
        ))}
        {/* <div className="flex items-center px-4" onClick={handlerNext}>
          <div
            className="w-12"
            style={{
              width: '36px',
              height: '36px',
              maskImage: "url('/icons/right_big.svg')",
              WebkitMask: "url('/icons/right_big.svg')",
              maskSize: '36px',
              WebkitMaskSize: '36px',
              margin: '6px',
              backgroundColor: 'var(--color-paragraph)',
            }}
          />
        </div> */}
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
