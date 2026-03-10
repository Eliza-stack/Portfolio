import styles from './SkillCard.module.scss';
import type { SkillCategory } from '../../../types/types';

interface Props {
  category: SkillCategory;
}

export function SkillCard({ category }: Props) {
  const Icon = category.icon;

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon size={24} />
      </div>

      <h3 className={styles.title}>{category.title}</h3>

      <div className={styles.skills}>
        {category.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
