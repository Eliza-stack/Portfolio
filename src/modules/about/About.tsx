import { motion } from 'framer-motion';
import styles from './About.module.scss';
import { SectionTitle, InfoCard } from '@ui/index';
import Image from 'next/image';
import { Coffee, Heart, Rocket, Code, Palette } from 'lucide-react';
import Portfolio2 from '@assets/images/portfolio2.jpg';

export const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.container}>
        <SectionTitle
          title='About Me'
          description='Немного о человеке, который пишет этот код'
        />

        <div className={styles.grid}>
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.gradientBorder}></div>

            <div className={styles.imageContainer}>
              <Image
                src={Portfolio2}
                alt='portfolio'
                width={500}
                height={500}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <Code className={styles.icon1} />
            <Palette className={styles.icon2} />
          </motion.div>

          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.text}>
              <p>
                Frontend-разработчик на JavaScript и React: создаю адаптивные
                интерфейсы на HTML5/CSS3, реализую фильтрацию, пагинацию,
                слайдеры, таймлайны и работу с API, использую Ant Design и
                Material UI. Разрабатываю переиспользуемые компоненты, аккуратно
                структурирую код, уверенно работаю с чужой кодом, вношу
                доработки и устраняю ошибки через Git. Изучаю TypeScript и
                Next.js, углубляю понимание современных подходов и стремлюсь
                развиваться в командной разработке
              </p>

            </div>

            <div className={styles.cards}>
              <InfoCard
                icon={<Coffee size={18} />}
                title='Выпечка'
                text='Люблю готовить десерты и экспериментировать с рецептами.'
              />

              <InfoCard
                icon={<Heart size={18} />}
                title='Кошки'
                text='Очень люблю кошек и животных.'
              />

              <InfoCard
                icon={<Rocket size={18} />}
                title='Изучение нового'
                text='Постоянно изучаю новые технологии и развиваюсь в IT.'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
