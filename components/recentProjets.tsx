
import allProjects from 'db/projects.json';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

export default function RecentProjects() {
  const projects = allProjects.sort();
  const recentProjects = projects.length > 4 ? projects.slice(0, 4) : projects;

  return (
    <div className="max-w-5xl mx-auto px-4 mb-28">
      <div className="flex items-center justify-between">
        <h2>최근 프로젝트</h2>
        <Link href="/projects">더보기</Link>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {recentProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
