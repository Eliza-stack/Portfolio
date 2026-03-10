import styles from './Portfolio.module.scss';
import { featuredProjects, smallProjects } from '@data/projects/projects';
import { ProjectCard, SmallProjectCard  } from '@ui/index';

export function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}>Featured Work</h2>

      <div className={styles.projects}>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <h3 className={styles.smallTitle}>Small Projects</h3>

      <div className={styles.smallProjects}>
        {smallProjects.map((project) => (
          <SmallProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
