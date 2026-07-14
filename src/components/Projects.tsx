import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Sparkles, Database, Layers, Check, ChevronLeft, ChevronRight, X, PlayCircle, Trophy } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'All' | 'Backend' | 'AI & Agents' | 'Full-stack'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
      if (e.key === 'ArrowRight' && selectedProject) nextImage();
      if (e.key === 'ArrowLeft' && selectedProject) prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
    }
  };

  const openLightbox = (project: Project) => {
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
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`project-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveTab(cat)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? 'text-white bg-indigo-500 font-semibold shadow-lg shadow-indigo-500/20'
                  : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Container with AnimatePresence */}
        <motion.div
          id="projects-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl bg-neutral-900/40 border transition-all duration-300 flex flex-col h-full overflow-hidden group ${
                  project.featured
                    ? 'border-amber-500/40 hover:border-amber-400/70 shadow-lg shadow-amber-500/5'
                    : 'border-neutral-800/60 hover:border-indigo-500/40'
                }`}
              >
                {/* Project Image */}
                <div
                  className="relative h-48 overflow-hidden bg-neutral-950 cursor-pointer"
                  onClick={() => openLightbox(project)}
                >
                  <div className="absolute inset-0 bg-neutral-950/20 z-10 group-hover:bg-neutral-950/0 transition-all pointer-events-none" />
                  <img
                    src={project.images[0]}
                    alt={`${project.title} Screenshot`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                <div className="p-6 flex flex-col flex-grow gap-4">
                  <div className="flex flex-col gap-1.5">
                    <h3 className={`text-xl font-bold transition-colors ${
                      project.featured
                        ? 'text-white group-hover:text-amber-400'
                        : 'text-white group-hover:text-indigo-500'
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed min-h-[72px]">
                      {project.description}
                    </p>
                  </div>

                  {/* Recruiter-Ready Metrics Highlight */}
                  {project.metrics && (
                    <div className={`flex flex-col gap-1.5 border p-3 rounded-xl ${
                      project.featured
                        ? 'bg-amber-950/20 border-amber-900/30'
                        : 'bg-neutral-900/80 border-neutral-850'
                    }`}>
                      <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                        project.featured ? 'text-amber-500/70' : 'text-neutral-500'
                      }`}>
                        Key Achievements
                      </span>
                      <ul className="flex flex-col gap-1">
                        {project.metrics.map((metric, mIdx) => (
                          <li key={mIdx} className="text-xs text-neutral-300 flex items-center gap-1.5 font-sans">
                            <Check size={12} className={project.featured ? 'text-amber-400 flex-shrink-0' : 'text-indigo-500 flex-shrink-0'} />
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technology Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 bg-neutral-950/50 border border-neutral-850 rounded text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Divider line */}
                  <div className="h-[1px] bg-neutral-800/50 w-full mt-2" />

                  {/* Action Link Buttons */}
                  <div className="flex items-center justify-between mt-1 flex-wrap gap-2">
                    <a
                      id={`project-${project.id}-code`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-semibold text-neutral-400 hover:text-white flex items-center gap-1.5 group/link transition-colors"
                    >
                      <Github size={14} className="group-hover/link:text-indigo-500" />
                      Source Code
                    </a>

                    <div className="flex items-center gap-3 flex-wrap">
                      {project.demoUrl && (
                        <a
                          id={`project-${project.id}-demo`}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-semibold text-indigo-500 hover:text-indigo-400 flex items-center gap-1.5 group/link transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      {project.projectVideoUrl && (
                        <a
                          id={`project-${project.id}-video`}
                          href={project.projectVideoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-semibold text-indigo-500 hover:text-indigo-400 flex items-center gap-1.5 group/link transition-colors"
                        >
                          <PlayCircle size={14} />
                          Video
                        </a>
                      )}
                      {project.kaggleUrl && (
                        <a
                          id={`project-${project.id}-kaggle`}
                          href={project.kaggleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 group/link transition-colors"
                        >
                          <Trophy size={14} />
                          Kaggle
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Image Gallery Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.images.length > 0 && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center hover:bg-neutral-800 transition-all cursor-pointer shadow-xl"
            >
              <X size={24} />
            </button>

            {/* Modal Content container */}
            <motion.div
              className="relative max-w-5xl w-full flex flex-col items-center gap-4 outline-none"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-950/60 hover:bg-neutral-900 border border-neutral-700/50 text-white flex items-center justify-center backdrop-blur-sm transition-all z-20"
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
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-950/60 hover:bg-neutral-900 border border-neutral-700/50 text-white flex items-center justify-center backdrop-blur-sm transition-all z-20"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>

              {/* Image Indicators */}
              {selectedProject.images.length > 1 && (
                <div className="flex items-center gap-2 mt-4">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex
                          ? selectedProject.featured
                            ? 'bg-amber-400 w-6'
                            : 'bg-indigo-500 w-6'
                          : 'bg-neutral-700 hover:bg-neutral-500'
                      }`}
                    />
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