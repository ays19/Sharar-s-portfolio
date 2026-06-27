import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          id="nav-logo"
          href="#"
          className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center font-bold text-sm text-white shadow-[0_0_15px_rgba(129,140,248,0.5)] group-hover:bg-indigo-600 transition-colors">
            AY
          </span>
          <span className="hidden sm:inline font-mono text-neutral-300 group-hover:text-white transition-colors">
            ahsan.yasir<span className="text-indigo-500 font-sans">()</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              onClick={() => scrollToSection(link.href)}
              className="text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer font-medium"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Socials & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            id="nav-social-github"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white p-2 hover:bg-neutral-800/50 rounded-lg transition-all"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            id="nav-social-linkedin"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white p-2 hover:bg-neutral-800/50 rounded-lg transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <button
            id="nav-cta-contact"
            onClick={() => scrollToSection('#contact')}
            className="text-xs font-semibold bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-lg shadow-indigo-500/20 cursor-pointer"
          >
            Get in touch
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-400 hover:text-white p-2 hover:bg-neutral-800/50 rounded-lg transition-all cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full bg-neutral-950 border-b border-neutral-800 absolute left-0 top-full overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    id={`mobile-nav-link-${link.name.toLowerCase()}`}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-base text-neutral-400 hover:text-white transition-colors cursor-pointer font-medium"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>

              <div className="h-[1px] bg-neutral-800/50 w-full" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    id="mobile-social-github"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white p-2 bg-neutral-900 rounded-lg transition-all"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    id="mobile-social-linkedin"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white p-2 bg-neutral-900 rounded-lg transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    id="mobile-social-mail"
                    href={`mailto:${personalInfo.email}`}
                    className="text-neutral-400 hover:text-white p-2 bg-neutral-900 rounded-lg transition-all"
                    aria-label="Send Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>

                <button
                  id="mobile-cta-contact"
                  onClick={() => scrollToSection('#contact')}
                  className="text-sm font-semibold bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-indigo-500/10"
                >
                  Get in touch
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
