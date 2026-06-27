import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Sparkles, Database, Layers, Check } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'All' | 'Backend' | 'AI & Agents' | 'Full-stack'>('All');

  const categories: ('All' | 'Backend' | 'AI & Agents' | 'Full-stack')[] = [
    'All',
    'Backend',
    'AI & Agents',
    'Full-stack',
  ];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((project) => project.category === activeTab);

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
            An exploration of robust backend services, agentic generative AI pipelines, and interactive web tools.
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
                className="rounded-2xl bg-neutral-900/40 border border-neutral-800/60 hover:border-indigo-500/40 transition-all duration-300 flex flex-col h-full overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-neutral-950">
                  <div className="absolute inset-0 bg-neutral-950/20 z-10 group-hover:bg-neutral-950/0 transition-all" />
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-neutral-950/90 border border-neutral-800 rounded-full text-[10px] font-mono font-semibold text-neutral-200">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </div>
                </div>

                {/* Card Content details */}
                <div className="p-6 flex flex-col flex-grow gap-4">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed min-h-[72px]">
                      {project.description}
                    </p>
                  </div>

                  {/* Recruiter-Ready Metrics Highlight */}
                  {project.metrics && (
                    <div className="flex flex-col gap-1.5 bg-neutral-900/80 border border-neutral-850 p-3 rounded-xl">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-semibold">Key Achievements</span>
                      <ul className="flex flex-col gap-1">
                        {project.metrics.map((metric, mIdx) => (
                          <li key={mIdx} className="text-xs text-neutral-300 flex items-center gap-1.5 font-sans">
                            <Check size={12} className="text-indigo-500 flex-shrink-0" />
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
                  <div className="flex items-center justify-between mt-1">
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
                    <a
                      id={`project-${project.id}-demo`}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-semibold text-indigo-500 hover:text-indigo-600 flex items-center gap-1.5 group/link transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
