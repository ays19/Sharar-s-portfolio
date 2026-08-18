import { motion } from 'motion/react';
import { skillsMatrix } from '../data';
import { Cpu, Server, Sparkles, Database, ShieldCheck } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'languages':
        return <Cpu size={18} className="text-indigo-500" />;
      case 'frameworks & server-side':
        return <Server size={18} className="text-indigo-500" />;
      case 'ai & agentic workflows':
        return <Sparkles size={18} className="text-indigo-500" />;
      case 'databases & cache':
        return <Database size={18} className="text-emerald-450" />;
      case 'qa & test automation':
      case 'devops & tools':
      default:
        return <ShieldCheck size={18} className="text-emerald-450" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-neutral-950 text-white relative border-t border-neutral-900">
      {/* Background accents */}
      <div className="absolute top-[20%] left-[-10%] w-[25rem] h-[25rem] bg-indigo-950/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-semibold">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            Technical Skills Matrix
          </h2>
          <p className="text-neutral-400 max-w-xl text-sm sm:text-base">
            An overview of my toolkits across backend systems, machine intelligence protocols, data storage, and reliability.
          </p>
        </div>

        {/* Categorized Grid */}
        <div id="skills-matrix-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsMatrix.map((category, catIdx) => (
            <motion.div
              key={category.title}
              id={`skill-category-card-${catIdx}`}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/50 hover:border-indigo-500/30 transition-all duration-300 shadow-xl flex flex-col gap-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
                <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills List - Tags Layout */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    id={`skill-item-${catIdx}-${sIdx}`}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-neutral-900/60 border border-neutral-800/80 hover:border-indigo-500/30 text-neutral-300 hover:text-white transition-all duration-300 shadow-sm flex items-center gap-1.5 cursor-default group/tag"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: sIdx * 0.03 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover/tag:bg-indigo-400 transition-colors" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}