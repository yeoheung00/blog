
import allProjects from 'db/projects.json';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

export default function RecentProjects() {
  const projects = allProjects.sort();
  const recentProjects = projects.length > 4 ? projects.slice(0, 4) : projects;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between px-2 mb-4">
        <h2 className='text-2xl font-bold text-[--color-primary]'>최근 프로젝트</h2>
        <Link className='text-normal font-bold text-[--color-primary]' href="/projects">더보기</Link>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {recentProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
