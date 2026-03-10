import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SmallProject {
  title: string;
  tech: string[];
  githubUrl?: string;
}

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
}

export interface ContactProps {
  icon: LucideIcon;
  title: string;
  value: string;
  gradient: string;
  link: string;
  delay?: number;
}
