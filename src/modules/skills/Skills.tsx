import styles from './Skills.module.scss'

import { skillCategories } from '@data/projects/projects'
import { SkillCard } from '@/ui/cards/SkillCard/SkillCard'

export function Skills() {
  return (
    <section id="skills" className={styles.skills}>

      <h2 className={styles.title}>
        Навыки и технологии
      </h2>

      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <SkillCard
            key={category.title}
            category={category}
          />
        ))}
      </div>

    </section>
  )
}