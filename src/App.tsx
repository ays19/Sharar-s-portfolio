/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="bg-neutral-950 min-h-screen text-white selection:bg-indigo-600 selection:text-white antialiased overflow-x-hidden w-full relative">
      <a
        href="#portfolio-main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[120] focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-indigo-500 text-white focus:text-white focus:font-mono focus:text-xs focus:font-semibold focus:shadow-lg focus:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        Skip to content
      </a>

      <Header />
      
      <main id="portfolio-main-content" tabIndex={-1} className="focus:outline-none">
        <Hero onOpenResumeModal={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <ContactForm />
      </main>

      <Footer />

      {/* Interactive Resume View Overlay */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

