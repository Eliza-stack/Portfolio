import styles from './Button.module.scss';
import type { ButtonProps } from '../../types/types';
import clsx from 'clsx';

export const Button = ({
  children,
  icon,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};
