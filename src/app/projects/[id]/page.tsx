import { notFound } from 'next/navigation';
import { ProjectDetailView } from '@/components/ProjectDetailView';
import { PROJECTS } from '@/data/portfolioData';

// Generate static params for all projects
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return { title: 'Not Found' };
  
  return {
    title: `${project.title} | ahmtstia`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  
  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
