import allProjects from 'db/projects.json'
import Link from 'next/link';

type Project = typeof allProjects[0];

function ProjectCard(project: Project) {
  return (
    <div className="w-[calc(50%-0.5rem)]">
      <h2 className="mb-1 text-xl">
        <Link href={project.url} target='_blank' className="text-[var(--color-paragraph)]">
          {project.name}
        </Link>
      </h2>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0">{project.des}</div>
    </div>
  )
}

export default function Page() {
  const projects = allProjects.sort();
  return (
    <main className="w-full min-h-screen pt-20">
      <div className='max-w-5xl mx-auto px-4'>
        <h2>프로젝트 목록</h2>
        <div className="flex flex-wrap gap-4">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}