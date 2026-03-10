import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import clsx from 'clsx'
import styles from './ContactCard.module.scss'

interface ContactProps {
  icon: LucideIcon
  title: string
  value: string
  link: string
  variant: 'gold' | 'bronze' | 'brown'
  delay?: number
}

export const ContactCard = ({
  icon: Icon,
  title,
  value,
  link,
  variant,
  delay = 0,
}: ContactProps) => {
  return (
    <motion.a
      href={link}
      className={styles.wrapper}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className={clsx(styles.glow, styles[variant])} />

      <div className={styles.card}>
        <div className={clsx(styles.icon, styles[variant])}>
          <Icon size={22} className={styles.iconSvg} />
        </div>

        <h4 className={styles.title}>{title}</h4>
        <p className={styles.value}>{value}</p>
      </div>
    </motion.a>
  )
}