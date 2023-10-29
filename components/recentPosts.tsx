'use client';

import { Post, allPosts } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PostCard from './PostCard';

export default function RecentPosts() {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);

  useEffect(() => {
    const posts = allPosts.sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );
    setRecentPosts(posts.length > 4 ? posts.slice(0, 4) : posts);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 mb-28">
      <div className="flex items-center justify-between">
        <h2>최근 포스트</h2>
        <Link href="/posts">더보기</Link>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {recentPosts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
