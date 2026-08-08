export type TabType = 'home' | 'projects' | 'about' | 'contact' | 'project-detail';

export interface ProjectHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  role: string;
  year: string;
  category: 'WEB' | 'MOBILE' | 'UI';
  tags: string[];
  image: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  highlights: ProjectHighlight[];
  liveUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  period: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: 'expert' | 'advanced' | 'proficient';
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
