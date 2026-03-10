import {
  SkillCategory,
  Project,
  SmallProject,
  Experience,
  Education,
} from '../../types/types';
import {
  Code2,
  Palette,
  Database,
  Zap,
  Mail,
  Send,
  Github,
  Sparkles,
} from 'lucide-react';

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'Recipe App',
    description: 'Search recipes application',
    image: '/images/recipe.png',
    tech: ['React', 'TypeScript'],
    githubUrl: '#',
  },
];

export const smallProjects: SmallProject[] = [
  {
    title: 'Todo App',
    tech: ['React', 'Zustand'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: 'Языки',
    skills: ['HTML', 'CSS/SCSS', 'JavaScript', 'TypeScript'],
  },
  {
    icon: Sparkles,
    title: 'Фреймворки и библиотеки',
    skills: ['React', 'Next.js', 'Zustand', 'Framer Motion','Redux'],
  },
  {
    icon: Palette,
    title: 'Стилизация',
    skills: ['Sass', 'CSS Modules', 'Responsive Design', 'Antd', 'MUI'],
  },
  {
    icon: Database,
    title: 'Работа с данными',
    skills: ['REST API', 'Axios', 'JSON'],
  },
  {
    icon: Zap,
    title: 'Инструменты разработки',
    skills: ['Git', 'GitHub', 'Vite', 'npm'],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Geeks',
    company: 'Стажировка по Frontend-разработке',
    period: '2025',
    description:
      'Изучение современной frontend-разработки с упором на практические проекты.',
    achievements: [
      'Освоила HTML, CSS/SCSS, JavaScript и TypeScript',
      'Разрабатывала интерфейсы на React',
      'Работала с REST API и Git',
    ],
  },
  {
    title: 'TimelySkills',
    company: 'Учебная Стажировка',
    period: '2024 - 2025',
    description:
      'Стажировка в команде разработки с работой над существующим кодом и интерфейсами.',
    achievements: [
      'Работала с существующей кодовой базой и архитектурой проектов',
      'Исправляла ошибки и улучшала UI компонентов',
      'Рефакторила и оптимизировала код',
      'Работала с Git и командным workflow',
    ],
  },
];

export const education: Education[] = [
  {
    title: 'Международный университет Ала-Тоо',
    company: 'Бакалавр computer Science',
    period: '2019 - 2023',
    description: 'Изучение основ программирования, алгоритмов и компьютерных наук.',
    achievements: [
      'Изучение программирования и структуры данных',
      'Освоение фундаментальных принципов разработки программного обеспечения',
    ],
  },
  {
    title: 'Geeks',
    company: 'международная IT-академия',
    period: '2025',
    description: 'Практический курс по современной frontend-разработке.',
    achievements: [
      'HTML, CSS/SCSS, JavaScript и TypeScript',
      'Разработка интерфейсов на React и Next.js',
      'Работа с REST API и Git',
    ],
  },
];


export const contactMethods = [{
    icon: Mail,
    title: 'Email',
    value: 'bknade794@gmail.com',
    link: 'mailto:bknade794@gmail.com',
    gradient: 'gold'
  },
  {
    icon: Send,
    title: 'Telegram',
    value: '@eliza72_32',
    link: 'https://t.me/eliza72_32',
    gradient: 'bronze'
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'github.com/Eliza-stack',
    link: 'https://github.com/Eliza-stack',
    gradient: 'brown'
  }];

export const socialLinks = [{ icon: Github, link: '#', label: 'GitHub' }];
