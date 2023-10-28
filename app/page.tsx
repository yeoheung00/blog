import Pined from '@/components/pined';
import styles from './page.module.css';
import Link from 'next/link';
import { allPosts } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';
import PostCard from '@/components/PostCard';
import ProjectCard from '@/components/ProjectCard';
import allProjects from 'db/projects.json';

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const recentPosts = posts.length > 4 ? posts.slice(0, 4) : posts;

  const projects = allProjects.sort();
  const recentProjects = projects.length > 4 ? projects.slice(0, 4) : projects;

  return (
    <main className="w-full min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 mb-28">
        <div className="flex items-center mb-4 justify-center">
          <div className={styles.pinIcon} />
          <p>고정된 포스트</p>
        </div>
        <Pined />
      </div>

      <div className="max-w-5xl mx-auto px-4 mb-28">
        <div className="flex items-center justify-between">
          <h2>최근 포스트</h2>
          <Link href="/posts">더보기</Link>
        </div>
        <div className="flex flex-wrap gap-4">
          {recentPosts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mb-28">
        <div className="flex items-center justify-between">
          <h2>최근 프로젝트</h2>
          <Link href="/projects">더보기</Link>
        </div>
        <div className="flex flex-wrap gap-4">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
