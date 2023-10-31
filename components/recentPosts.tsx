import { allPosts } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';
import PostCard from './PostCard';

export default function RecentPosts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const recentPosts = posts.length > 4 ? posts.slice(0, 4) : posts;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between px-2">
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
