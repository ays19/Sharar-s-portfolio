import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Download, Terminal, FileText } from 'lucide-react';
import { personalInfo } from '../data';
import profileImg from '../assets/images/pic.webp';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const [typedName, setTypedName] = useState(() => (prefersReducedMotion ? personalInfo.name : ''));

  useEffect(() => {
    const nameString = personalInfo.name;
    if (prefersReducedMotion) {
      setTypedName(nameString);
      return;
    }

    let currentIndex = 0;
    setTypedName('');

    const interval = setInterval(() => {
      if (currentIndex < nameString.length) {
        setTypedName(nameString.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 120); // Steady modern typing speed

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: prefersReducedMotion ? 0 : 14, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0.15 }
        : { duration: 0.45, ease: easeOutExpo },
    },
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  const impactMetrics = [
    { value: '1,002 → 3', label: 'DB queries (35% faster)' },
    { value: '200+', label: 'Selenium E2E tests' },
    { value: '145', label: 'Vitest & Playwright tests' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-10 sm:pb-12 overflow-hidden bg-neutral-950 text-white"
    >
      {/* Visual Background Accent Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
        {/* Sleek Dot Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Hero Content Left */}
        <motion.div
          className="lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Introductory Text Block */}
          <div className="flex flex-col gap-4 sm:gap-5 text-center lg:text-left items-center lg:items-start">
              {/* Badge & Location */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-900/30 text-xs font-mono text-indigo-300 w-fit">
                  <span className={`w-1.5 h-1.5 rounded-full bg-emerald-500 ${prefersReducedMotion ? '' : 'animate-pulse'}`} />
                  Available for full-time roles & contracts
                </span>
                <span className="text-xs font-mono text-neutral-400">Dhaka, Bangladesh / Remote</span>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants} className="flex flex-col gap-1.5 w-full items-center lg:items-start">
                <span className="text-xs sm:text-sm font-mono text-neutral-400 font-medium">Hello, World! I am</span>
                <h1 className="relative text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white leading-tight grid">
                  <span aria-hidden="true" className="invisible pointer-events-none select-none col-start-1 row-start-1">
                    {personalInfo.name}
                    <span className="inline-block w-[3px] h-[0.8em] ml-1.5" />
                  </span>
                  <span className="col-start-1 row-start-1 flex items-center justify-center lg:justify-start flex-wrap">
                    <span>{typedName}</span>
                    <span
                      aria-hidden="true"
                      className={`inline-block w-[3px] h-[0.8em] bg-indigo-500 ml-1.5 ${prefersReducedMotion ? 'opacity-80' : 'animate-pulse'}`}
                      style={prefersReducedMotion ? undefined : { animationDuration: '0.8s' }}
                    />
                  </span>
                </h1>
                <p className="text-lg sm:text-2xl font-sans text-neutral-200 font-semibold">
                  Backend Software Engineer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">AI Application Developer</span>
                </p>
              </motion.div>

              {/* Tagline / Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed"
              >
                I build production-grade Python/Django APIs, integrate LLM-powered agent workflows, and ship automated QA test suites alongside the code.
              </motion.p>

              {/* Compact 3-Item Quantified Impact Strip (verified metrics from src/data.ts) */}
              <motion.dl
                variants={itemVariants}
                aria-label="Verified engineering impact metrics"
                className="w-full max-w-xl grid grid-cols-3 divide-x divide-neutral-800/80 rounded-xl bg-neutral-900/50 border border-neutral-800/80"
              >
                {impactMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="px-2.5 py-2.5 sm:px-4 sm:py-3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-0.5"
                  >
                    <dt className="order-2 text-[10px] sm:text-xs font-mono text-neutral-400 leading-snug">
                      {metric.label}
                    </dt>
                    <dd className="order-1 text-sm sm:text-lg font-mono font-bold text-white tabular-nums tracking-tight">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </motion.dl>

              {/* Call to Actions */}
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
                <button
                  id="hero-cta-projects"
                  onClick={scrollToProjects}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-xl transition-colors duration-200 flex items-center gap-2 shadow-lg shadow-indigo-500/25 group cursor-pointer motion-safe:active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  View Projects
                  <ArrowDown size={16} className="motion-safe:group-hover:translate-y-0.5 transition-transform duration-200" />
                </button>
                <a
                  id="hero-cta-resume"
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-200 font-semibold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-xl transition-colors duration-200 flex items-center gap-2 group cursor-pointer motion-safe:active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                >
                  View Resume
                  <Download size={16} className="motion-safe:group-hover:translate-y-0.5 transition-transform duration-200" />
                </a>
                <button
                  id="hero-cta-interactive-resume"
                  type="button"
                  onClick={onOpenResumeModal}
                  className="bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 hover:border-indigo-500/40 text-neutral-300 hover:text-white font-mono text-xs font-semibold px-4 py-3 rounded-xl transition-colors duration-200 flex items-center gap-2 cursor-pointer motion-safe:active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                >
                  <FileText size={15} className="text-indigo-400" />
                  interactive_resume.json
                </button>
              </motion.div>

              {/* Hero Social Links */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Connect:</span>
                <div className="flex gap-2">
                  <a
                    id="hero-social-github"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-indigo-500/60 hover:bg-neutral-800/80 text-neutral-400 hover:text-white flex items-center justify-center transition-colors duration-200 shadow-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} className="motion-safe:group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                  <a
                    id="hero-social-linkedin"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-indigo-500/60 hover:bg-neutral-800/80 text-neutral-400 hover:text-white flex items-center justify-center transition-colors duration-200 shadow-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} className="motion-safe:group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            </div>
        </motion.div>

        {/* Large Profile Picture Right */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14, scale: prefersReducedMotion ? 1 : 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={
            prefersReducedMotion
              ? { duration: 0.15 }
              : { duration: 0.55, delay: 0.15, ease: easeOutExpo }
          }
        >
          <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
            {/* Ambient Backlight Glow */}
            <div className={`absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-30 pointer-events-none ${prefersReducedMotion ? '' : 'animate-pulse'}`} />
            
            {/* Image Frame */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800/80 hover:border-indigo-500/40 transition-colors duration-300 bg-neutral-900 shadow-2xl group">
              <img
                src={profileImg}
                alt={personalInfo.name}
                // object-[35%_center] shifts the image inside the frame to the right. Adjust the 35% up or down if needed! (50% is perfectly centered)
                className="w-full h-full object-cover object-[35%_center] transition-transform duration-700 motion-safe:group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-white/[0.05] pointer-events-none rounded-3xl" />
            </div>

            {/* Floating Status Badge */}
            <motion.div
              className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 bg-neutral-900/95 backdrop-blur-md border border-neutral-800 rounded-xl p-4 shadow-xl ring-1 ring-inset ring-white/[0.04] flex items-center gap-3 z-10"
              animate={prefersReducedMotion ? { y: 0 } : { y: [0, -8, 0] }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-950 border border-indigo-900/50 flex items-center justify-center text-indigo-400 relative">
                <Terminal size={20} />
                <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-neutral-900 ${prefersReducedMotion ? '' : 'animate-pulse'}`} />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-mono">System Status</p>
                <p className="text-sm font-bold text-white">Ready for Impact</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-5 h-9 border-2 border-neutral-800 rounded-full flex items-start justify-center p-1"
          animate={prefersReducedMotion ? { y: 0 } : { y: [0, 4, 0] }}
          transition={prefersReducedMotion ? { duration: 0 } : { repeat: Infinity, duration: 2 }}
        >
          <motion.div 
            className="w-1.5 h-2 bg-indigo-500 rounded-full"
            animate={prefersReducedMotion ? { y: 0 } : { y: [0, 10, 0] }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
