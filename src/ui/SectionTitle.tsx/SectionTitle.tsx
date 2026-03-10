import { motion } from 'framer-motion';
import styles from './SectionTitle.module.scss';

interface Props {
  title: string;
  description?: string;
}

export const SectionTitle = ({ title, description }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={styles.wrapper}
    >
      <h2 className={styles.title}>{title}</h2>

      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  );
};
