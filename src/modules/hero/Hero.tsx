import { motion } from 'framer-motion';
import portfolioImg from '@/assets/images/portfolio.jpg';
import Image from 'next/image';
import { Download, Briefcase } from 'lucide-react';
import styles from './Hero.module.scss';
import { Button } from '@/ui/Button/Button';

export const Hero = () => {
  return (
    <section id='home' className={styles.hero}>
      <div className={styles.background}>
        <motion.div
          className={styles.gradient1}
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className={styles.gradient2}
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className={styles.gradient3}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <div>
            
            <h1 className={styles.name}>Eliza Atanbaeva</h1>
            <h2 className={styles.role}>Frontend-разработчик</h2>

            <p className={styles.description}>
              Разрабатываю современные и удобные веб-интерфейсы с использованием
              HTML, CSS/SCSS, JavaScript, TypeScript и React. Создаю адаптивные,
              быстрые и понятные пользовательские интерфейсы.
            </p>
          </div>

          <div className={styles.buttons}>
            <a href='#portfolio' className={styles.primaryBtn}>
              <Briefcase size={20} />
              Посмотреть проекты
            </a>

            <Button variant='outline'>
              <Download size={20} />
              Скачать резюме
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={styles.imageWrapper}
        >
          <Image
            src={portfolioImg}
            alt='Developer portrait'
            width={350}
            height={400}
            className={styles.image}
          />
        </motion.div>
      </div>
    </section>
  );
};
