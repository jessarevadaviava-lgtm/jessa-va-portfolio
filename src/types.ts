export type NavSectionId =
  | 'home'
  | 'about'
  | 'services'
  | 'skills'
  | 'portfolio'
  | 'process'
  | 'testimonials'
  | 'contact';

export type ViewMode = 'scroll' | 'tabbed';

export interface NavItem {

  id: NavSectionId;
  label: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
}

export interface SkillItem {
  name: string;
  category: 'Design & Creative' | 'Admin & Operations' | 'AI & Tech' | 'Core Strengths';
  level: number; // 0 to 100
  experience: string;
  description: string;
}

export type PortfolioCategory =
  | 'All'
  | 'Social Media'
  | 'Graphic Design'
  | 'Content Creation'
  | 'Virtual Assistance'
  | 'Data Entry';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  shortDescription: string;
  fullDescription: string;
  tools: string[];
  image: string;
  deliverables: string[];
  resultsOrImpact: string;
  clientType: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  duration: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  business: string;
  country: string;
  rating: number;
  content: string;
  avatarText: string;
  isSample: boolean;
}
