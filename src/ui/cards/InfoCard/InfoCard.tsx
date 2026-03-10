import styles from './InfoCard.module.scss';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  text: string;
}

export const InfoCard = ({ icon, title, text }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
