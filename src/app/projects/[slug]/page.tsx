import { notFound } from 'next/navigation';
import { ProjectDetailView } from '@/components/sections/ProjectDetailView';
import { PROJECTS } from '@/data/portfolio';

// Generate static params for all projects
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project) return { title: 'Not Found' };
  
  return {
    title: `${project.title} | ahmtstia`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  
  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
