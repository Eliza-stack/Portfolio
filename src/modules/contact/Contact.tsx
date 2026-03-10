import styles from './Contact.module.scss';
import { SectionTitle, ContactCard } from '@ui/index';
import { contactMethods} from '@data/projects/projects';

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <SectionTitle
          title="Свяжитесь со мной"
          description="Есть идея или проект? Давайте обсудим, как мы можем реализовать его вместе."
        />

        <div className={styles.cards}>
          {contactMethods.map((method, index) => (
            <ContactCard
              key={index}
              variant='gold'
              {...method}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
