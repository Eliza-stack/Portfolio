'use client';
import { Hero } from '@/modules/hero/Hero';
import { Portfolio } from '@/modules/portfolio/Portfolio';
import { Resume } from '@/modules/resume/Resume';
import { Skills } from '@/modules/skills/Skills';
import { Header } from '@modules/header/Header';
import { About } from '@modules/about/About';
import { Contact } from '@/modules/contact/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}
