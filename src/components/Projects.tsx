import { useState, useEffect, useCallback, useRef, type PointerEvent, type ReactNode } from 'react';
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from 'motion/react';
import { Github, ExternalLink, Sparkles, Database, Layers, Check, ChevronLeft, ChevronRight, X, PlayCircle, Trophy } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface ProjectCardProps {
  project: Project;
  index: number;
  prefersReducedMotion: boolean;
  getCategoryIcon: (category: string) => ReactNode;
  onOpenLightbox: (project: Project, triggerEl?: HTMLElement | null) => void;
}

function ProjectCard({
  project,
  index,
  prefersReducedMotion,
  getCategoryIcon,
  onOpenLightbox,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [spotlightActive, setSpotlightActive] = useState(false);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || e.pointerType === 'touch') return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`);
    if (!spotlightActive) {
      setSpotlightActive(true);
    }
  };

  const handlePointerLeave = () => {
    if (spotlightActive) {
      setSpotlightActive(false);
    }
  };

  const surfaceSpotlightGradient = project.featured
    ? 'radial-gradient(360px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(251, 191, 36, 0.085), transparent 70%)'
    : 'radial-gradient(360px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(129, 140, 248, 0.08), transparent 70%)';

  const borderSpotlightGradient = project.featured
    ? 'radial-gradient(240px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(251, 191, 36, 0.7), transparent 70%)'
    : 'radial-gradient(240px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(129, 140, 248, 0.55), transparent 70%)';

  return (
    <motion.div
      ref={cardRef}
      layout={!prefersReducedMotion}
      id={`project-card-${project.id}`}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      exit={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 8,
        scale: prefersReducedMotion ? 1 : 0.98,
        transition: { duration: prefersReducedMotion ? 0.1 : 0.18, ease: EASE_OUT_EXPO },
      }}
      transition={{
        duration: prefersReducedMotion ? 0.15 : 0.32,
        delay: prefersReducedMotion ? 0 : Math.min(index * 0.05, 0.2),
        ease: EASE_OUT_EXPO,
        layout: prefersReducedMotion
          ? { duration: 0.1 }
          : { duration: 0.28, ease: EASE_OUT_EXPO },
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative rounded-2xl bg-neutral-900/40 border transition-colors duration-300 flex flex-col h-full overflow-hidden group ${
        project.featured
          ? 'border-amber-500/40 hover:border-amber-400/70 shadow-lg shadow-amber-500/5'
          : 'border-neutral-800/60 hover:border-indigo-500/40'
      }`}
    >
      {/* Subtle cursor-tracking radial surface & border spotlight (disabled under reduced motion) */}
      {!prefersReducedMotion && (
        <>
          <div
            aria-hidden="true"
            className="card-spotlight-surface pointer-events-none absolute inset-0 rounded-2xl z-10 transition-opacity duration-300"
            style={{
              opacity: spotlightActive ? 1 : 0,
              background: surfaceSpotlightGradient,
            }}
          />
          <div
            aria-hidden="true"
            className="card-spotlight-border pointer-events-none absolute inset-0 rounded-2xl p-[1px] z-30 transition-opacity duration-300"
            style={{
              opacity: spotlightActive ? 1 : 0,
              background: borderSpotlightGradient,
            }}
          />
        </>
      )}

      {/* Project Image */}
      <div
        role="button"
        tabIndex={0}
        aria-label={`Open image gallery for ${project.title}`}
        className="relative h-48 overflow-hidden bg-neutral-950 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-400"
        onClick={(e) => onOpenLightbox(project, e.currentTarget)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenLightbox(project, e.currentTarget);
          }
        }}
      >
        <div className="absolute inset-0 bg-neutral-950/20 z-10 group-hover:bg-neutral-950/0 transition-all pointer-events-none" />
        <img
          src={project.images[0]}
          alt={`${project.title} Screenshot`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover motion-safe:group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Photo count indicator if multiple */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 right-3 z-20 bg-neutral-900/80 backdrop-blur border border-neutral-700/50 text-white text-[10px] font-mono px-2 py-1 rounded-md flex items-center gap-1 shadow-lg pointer-events-none">
            <span>1/{project.images.length}</span>
          </div>
        )}

        {/* Category Pill Tag Overlay */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-neutral-950/90 border border-neutral-800 rounded-full text-[10px] font-mono font-semibold text-neutral-200">
          {getCategoryIcon(project.category)}
          {project.category}
        </div>

        {/* Kaggle Capstone Badge — only on featured project */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/20 border border-amber-500/50 rounded-full text-[10px] font-mono font-semibold text-amber-300">
            <Trophy size={10} className="text-amber-400" />
            Kaggle Capstone
          </div>
        )}
      </div>

      {/* Card Content details */}
      <div className="relative z-20 p-5 sm:p-6 flex flex-col flex-grow gap-3.5">
        {/* Title & 1-line Value Summary */}
        <div className="flex flex-col gap-1">
          <h3 className={`text-lg sm:text-xl font-bold leading-snug transition-colors ${
            project.featured
              ? 'text-white group-hover:text-amber-400'
              : 'text-white group-hover:text-indigo-400'
          }`}>
            {project.title}
          </h3>
          <p
            title={project.description}
            className="text-xs sm:text-sm text-neutral-400 leading-snug line-clamp-2"
          >
            {project.description}
          </p>
        </div>

        {/* Key Quantified Achievement Badge + Secondary Proof */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-col gap-2">
            <div
              className={`flex items-start gap-2 px-3 py-2 rounded-xl border ${
                project.featured
                  ? 'bg-amber-950/25 border-amber-500/35 text-amber-200'
                  : 'bg-emerald-950/20 border-emerald-500/25 text-emerald-200'
              }`}
            >
              <Check
                size={14}
                className={`mt-0.5 flex-shrink-0 ${
                  project.featured ? 'text-amber-400' : 'text-emerald-400'
                }`}
              />
              <span className="text-xs font-mono font-semibold leading-snug">
                {project.metrics[0]}
              </span>
            </div>

            {project.metrics.length > 1 && (
              <ul className="flex flex-col gap-1 px-1">
                {project.metrics.slice(1).map((metric, mIdx) => (
                  <li key={mIdx} className="text-[11px] text-neutral-400 flex items-start gap-1.5 font-sans leading-snug">
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                        project.featured ? 'bg-amber-400/80' : 'bg-indigo-400/80'
                      }`}
                    />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Technology Stack Tags (capped for clean scanning) */}
        <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 bg-neutral-950/60 border border-neutral-850 rounded text-neutral-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span
              title={project.techStack.slice(5).join(', ')}
              className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900/80 border border-neutral-800 rounded text-neutral-400"
            >
              +{project.techStack.length - 5} more
            </span>
          )}
        </div>

        {/* Divider line */}
        <div className="h-[1px] bg-neutral-800/60 w-full mt-1" />

        {/* Action Link Buttons */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            {project.demoUrl && (
              <a
                id={`project-${project.id}-demo`}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/35 text-xs font-mono font-semibold text-indigo-300 hover:text-white flex items-center gap-1.5 group/link transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <ExternalLink size={13} className="motion-safe:group-hover/link:translate-x-0.5 transition-transform duration-200" />
                Live Demo
              </a>
            )}
            <a
              id={`project-${project.id}-code`}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs font-mono font-semibold text-neutral-300 hover:text-white flex items-center gap-1.5 group/link transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
            >
              <Github size={13} className="group-hover/link:text-indigo-400 transition-colors" />
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {project.projectVideoUrl && (
              <a
                id={`project-${project.id}-video`}
                href={project.projectVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1.5 rounded-lg text-xs font-mono font-semibold text-neutral-400 hover:text-indigo-400 flex items-center gap-1 group/link transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
              >
                <PlayCircle size={13} />
                Video
              </a>
            )}
            {project.kaggleUrl && (
              <a
                id={`project-${project.id}-kaggle`}
                href={project.kaggleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1.5 rounded-lg text-xs font-mono font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 group/link transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
              >
                <Trophy size={13} />
                Kaggle
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [activeTab, setActiveTab] = useState<'All' | 'Backend' | 'AI & Agents' | 'Full-stack'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const closeLightbox = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
    }
  }, [selectedProject]);

  // Handle focus management, ESC, and arrow keys for modal
  useEffect(() => {
    if (!selectedProject) return;
    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [selectedProject, closeLightbox, nextImage, prevImage]);

  const openLightbox = (project: Project, triggerEl?: HTMLElement | null) => {
    previousFocusRef.current = triggerEl ?? (document.activeElement as HTMLElement | null);
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const categories: ('All' | 'Backend' | 'AI & Agents' | 'Full-stack')[] = [
    'All',
    'Backend',
    'AI & Agents',
    'Full-stack',
  ];

  // Featured projects are always sorted first within any tab
  const filteredProjects = (
    activeTab === 'All'
      ? projects
      : projects.filter((project) => project.category === activeTab)
  ).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend':
        return <Database size={14} className="text-indigo-500" />;
      case 'AI & Agents':
        return <Sparkles size={14} className="text-indigo-450" />;
      case 'Full-stack':
      default:
        return <Layers size={14} className="text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-neutral-950 text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-semibold">My Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-xl text-sm sm:text-base">
            Production-grade backend APIs, LLM-powered applications, and full-stack web projects.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <LayoutGroup id="project-category-tabs">
          <div className="flex justify-center flex-wrap gap-2 mb-12" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  id={`project-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(cat)}
                  className={`relative min-h-11 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-colors duration-200 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    isActive
                      ? 'text-white font-semibold border-transparent'
                      : 'text-neutral-400 hover:text-white bg-neutral-900 border-neutral-800/80 hover:border-neutral-700'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeProjectCategoryTab"
                      aria-hidden="true"
                      className="absolute -inset-px rounded-xl bg-indigo-500 shadow-lg shadow-indigo-500/25"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0.1 }
                          : { type: 'spring', stiffness: 420, damping: 32 }
                      }
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        {/* Projects Grid Container with AnimatePresence */}
        <motion.div
          id="projects-grid"
          layout={!prefersReducedMotion}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                prefersReducedMotion={prefersReducedMotion}
                getCategoryIcon={getCategoryIcon}
                onOpenLightbox={openLightbox}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Image Gallery Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.images.length > 0 && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} image gallery`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.2 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={closeLightbox}
              aria-label="Close project image gallery"
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center hover:bg-neutral-800 transition-all cursor-pointer shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <X size={24} />
            </button>

            {/* Modal Content container */}
            <motion.div
              className="relative max-w-5xl w-full flex flex-col items-center gap-4 outline-none"
              initial={{
                opacity: 0,
                scale: prefersReducedMotion ? 1 : 0.96,
                y: prefersReducedMotion ? 0 : 12,
              }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: prefersReducedMotion ? 1 : 0.96,
                y: prefersReducedMotion ? 0 : 12,
              }}
              transition={
                prefersReducedMotion
                  ? { duration: 0.12 }
                  : { duration: 0.28, ease: EASE_OUT_EXPO }
              }
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Title */}
              <div className="flex items-center gap-3">
                {selectedProject.featured && (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/20 border border-amber-500/50 rounded-full text-[10px] font-mono font-semibold text-amber-300">
                    <Trophy size={10} className="text-amber-400" />
                    Kaggle Capstone
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedProject.title}</h3>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl flex items-center justify-center max-h-[70vh] w-full group">

                {/* Navigation: Left */}
                {selectedProject.images.length > 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    aria-label="Previous project image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-neutral-950/60 hover:bg-neutral-900 border border-neutral-700/50 text-white flex items-center justify-center backdrop-blur-sm transition-all z-20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  className="max-h-[70vh] w-full object-contain select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Navigation: Right */}
                {selectedProject.images.length > 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    aria-label="Next project image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-neutral-950/60 hover:bg-neutral-900 border border-neutral-700/50 text-white flex items-center justify-center backdrop-blur-sm transition-all z-20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>

              {/* Image Indicators */}
              {selectedProject.images.length > 1 && (
                <div className="flex items-center gap-1 mt-2" role="tablist" aria-label="Gallery slide indicators">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      aria-label={`View screenshot ${idx + 1} of ${selectedProject.images.length}`}
                      aria-current={idx === currentImageIndex ? 'true' : undefined}
                      className="min-w-11 min-h-11 flex items-center justify-center cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                      <span
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? selectedProject.featured
                              ? 'bg-amber-400 w-6'
                              : 'bg-indigo-500 w-6'
                            : 'w-2.5 bg-neutral-700 hover:bg-neutral-500'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}