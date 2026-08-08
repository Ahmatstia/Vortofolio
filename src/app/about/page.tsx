import { AboutView } from '@/components/sections/AboutView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | ahmtstia',
  description: 'Learn more about ahmtstia',
};

export default function AboutPage() {
  return <AboutView />;
}
