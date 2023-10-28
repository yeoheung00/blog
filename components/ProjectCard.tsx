import Link from 'next/link';

type Project = {
  name: string;
  url: string;
  des: string;
};

export default function ProjectCard(project: Project) {
  return (
    <div className="w-[calc(50%-0.5rem)]">
      <h2 className="mb-1 text-xl">
        <Link
          href={project.url}
          target="_blank"
          className="text-[var(--color-paragraph)]"
        >
          {project.name}
        </Link>
      </h2>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0">
        {project.des}
      </div>
    </div>
  );
}
