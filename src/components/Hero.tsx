import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Download, Terminal, Briefcase, Zap } from 'lucide-react';
import { personalInfo } from '../data';
import profileImg from '../assets/images/pic.png';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const nameString = personalInfo.name;
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
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100 },
    },
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-neutral-950 text-white"
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Content Left */}
        <motion.div
          className="lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Introductory Text Block */}
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
              {/* Badge & Location */}
              <motion.div variants={itemVariants} className="flex flex-col gap-2 items-center lg:items-start">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-900/30 text-xs font-mono text-indigo-300 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  Available for full-time roles & contracts
                </span>
                <span className="text-xs font-mono text-neutral-500">Based in Dhaka, Bangladesh / Remote</span>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants} className="flex flex-col gap-2 w-full items-center lg:items-start">
                <span className="text-sm font-mono text-neutral-400 font-medium">Hello, World! I am</span>
                <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-white leading-tight min-h-[1.2em] flex items-center justify-center lg:justify-start">
                  <span>{typedName}</span>
                  <span className="inline-block w-[3px] h-[0.8em] bg-indigo-500 ml-1.5 animate-pulse" style={{ animationDuration: '0.8s' }} />
                </h1>
                <p className="text-xl sm:text-2xl font-sans text-neutral-300 font-medium">
                  Backend Software Engineer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">AI Architect</span>
                </p>
              </motion.div>

              {/* Tagline / Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-neutral-400 max-w-xl text-base leading-relaxed"
              >
                I build highly optimized backend APIs, orchestrate agentic language model systems, and design bulletproof testing infrastructures. Currently creating high-impact solutions at <span className="text-indigo-400 font-medium">SWOT System Limited</span>.
              </motion.p>

              {/* Call to Actions */}
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <button
                  id="hero-cta-projects"
                  onClick={scrollToProjects}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25 group cursor-pointer"
                >
                  View Work
                  <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                </button>
                <a
                  id="hero-cta-resume"
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2 group cursor-pointer"
                >
                  View Resume
                  <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                </a>
              </motion.div>

              {/* Hero Social Links */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Connect:</span>
                <div className="flex gap-2">
                  <a
                    id="hero-social-github"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-indigo-500 text-neutral-400 hover:text-white flex items-center justify-center transition-all shadow-md"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    id="hero-social-linkedin"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-indigo-500 text-neutral-400 hover:text-white flex items-center justify-center transition-all shadow-md"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </motion.div>
            </div>
        </motion.div>

        {/* Large Profile Picture Right */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 1, delay: 0.3 }}
        >
          <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse pointer-events-none" />
            
            {/* Image Frame */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800/80 bg-neutral-900 shadow-2xl group">
              <img
                src={profileImg}
                alt={personalInfo.name}
                // object-[35%_center] shifts the image inside the frame to the right. Adjust the 35% up or down if needed! (50% is perfectly centered)
                className="w-full h-full object-cover object-[35%_center] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none rounded-3xl" />
            </div>

            {/* Floating Status Badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-neutral-900 border border-neutral-800 rounded-xl p-4 shadow-xl flex items-center gap-3 z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-950 flex items-center justify-center text-indigo-400 relative">
                <Terminal size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-neutral-900 animate-pulse" />
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
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-5 h-9 border-2 border-neutral-800 rounded-full flex items-start justify-center p-1"
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div 
            className="w-1.5 h-2 bg-indigo-500 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
