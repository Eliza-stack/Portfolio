import styles from './Resume.module.scss';
import { experiences, education } from '@data/projects/projects';
import { TimelineItem, SectionTitle, Button } from '@ui/index';
import { Download } from 'lucide-react';

export const Resume = () => {
  return (
    <section id='resume' className={styles.resume}>
      <div className={styles.gridBackground}></div>

      <div className={styles.container}>
        <SectionTitle
          title='Опыт и Образование'
          description='Мой профессиональный путь и образование'
        />

        <div className={styles.download}>
          <a href='/Eliza-Atanbaeva-Frontend-Developer.pdf' download>
            <Button icon={<Download size={18} />}>Скачать резюме</Button>
          </a>
        </div>

        <h3 className={styles.subtitle}>Опыт работы</h3>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} delay={index * 0.15} />
          ))}
        </div>

        <h3 className={styles.subtitle}>Образование</h3>

        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <TimelineItem key={index} {...edu} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};
