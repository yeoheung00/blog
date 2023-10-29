import Pined from '@/components/pined';
import styles from './page.module.css';
import RecentPosts from '@/components/recentPosts';
import RecentProjects from '@/components/recentProjets';

export default function Home() {
  return (
    <main className="w-full min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 mb-28">
        <div className="flex items-center mb-4 justify-center">
          <div className={styles.pinIcon} />
          <p>고정된 포스트</p>
        </div>
        <Pined />
      </div>

      <RecentPosts />

      <RecentProjects />
    </main>
  );
}
