import { Github } from 'lucide-react';
import styles from './SmallProjectCards.module.scss';
import type { SmallProject } from '../../../types/types';

interface Props {
  project: SmallProject;
}

export function SmallProjectCard({ project }: Props) {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{project.title}</h4>

      <div className={styles.tech}>
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          className={styles.githubLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Github size={16} />
          <span>View on GitHub</span>
        </a>
      )}
    </div>
  );
}
