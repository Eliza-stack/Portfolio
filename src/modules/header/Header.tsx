'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/utils/constatnts';
import { motion } from 'framer-motion';
import { Container } from '@/ui/container/Container';
import styles from './Header.module.scss';
import { clsx } from 'clsx';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
      <Container>
        <div className={styles.wrapper}>
          <a href='#home' className={styles.logo}>
            <div className={styles.logoIcon}>E</div>
            <span className={styles.logoText}>Eliza Atanbaeva</span>
          </a>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
                <span className={styles.navUnderline}></span>
              </a>
            ))}
          </nav>

          <a href='#contact' className={styles.cta}>
            Связаться со мной
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.mobileBtn}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileNav}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={styles.mobileLink}
                >
                  {link.label}
                </a>
              ))}

              <a
                href='#contact'
                onClick={() => setIsMobileMenuOpen(false)}
                className={styles.mobileCta}
              >
                Связаться со мной
              </a>
            </div>
          </motion.div>
        )}
      </Container>
    </header>
  );
};
