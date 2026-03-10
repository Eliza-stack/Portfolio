import { ExternalLink, Github } from 'lucide-react';
import styles from './ProjectsCards.module.scss';
import type { Project } from '@/types/types';
import Image from 'next/image';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className={styles.projectCard}>
      <Image src={project.image} alt={project.title} className={styles.image} width={500} height={300} />

      <div className={styles.content}>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className={styles.tech}>
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className={styles.buttons}>
          {project.liveUrl && (
            <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
              <ExternalLink size={16} />
              Live
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github size={16} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
