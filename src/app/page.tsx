'use client';

import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-darkRed">
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
