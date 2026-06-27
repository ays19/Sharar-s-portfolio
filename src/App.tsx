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
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-100 selection:bg-indigo-600 selection:text-white antialiased">
      <Header />
      
      <main id="portfolio-main-content">
        <Hero onOpenResumeModal={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
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

