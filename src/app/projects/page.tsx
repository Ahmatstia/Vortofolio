import { ProjectsView } from '@/components/sections/ProjectsView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | ahmtstia',
  description: 'Projects by ahmtstia',
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
