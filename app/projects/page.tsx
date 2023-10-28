import ProjectCard from '@/components/ProjectCard';
import allProjects from 'db/projects.json';

export default function Page() {
  const projects = allProjects.sort();
  return (
    <main className="w-full min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2>프로젝트 목록</h2>
        <div className="flex flex-wrap gap-4">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
