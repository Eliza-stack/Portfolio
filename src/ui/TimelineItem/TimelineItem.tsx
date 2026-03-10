import { motion } from 'framer-motion';
import styles from './TimelineItem.module.scss';
import { Award } from 'lucide-react';

interface Props {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  delay?: number;
}

export const TimelineItem = ({
  title,
  company,
  period,
  description,
  achievements,
  delay = 0,
}: Props) => {
  return (
    <motion.div
      className={styles.item}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className={styles.dot}></div>

      <div className={styles.card}>
        <div className={styles.header}>
          <div>
            <h4>{title}</h4>
            <p className={styles.company}>{company}</p>
          </div>

          <span className={styles.period}>{period}</span>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.achievements}>
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className={styles.achievement}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Award size={16} />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
