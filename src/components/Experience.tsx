import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle, Award, ShieldAlert, TestTube } from 'lucide-react';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-neutral-950 text-white relative border-t border-neutral-900 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-[40%] right-[-10%] w-[25rem] h-[25rem] bg-indigo-650/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-semibold">Career History</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="text-neutral-400 max-w-xl text-sm sm:text-base">
            My professional experience in backend development, AI integration, and software engineering.
          </p>
        </div>

        {/* Timeline Stack */}
        <div id="experience-timeline" className="max-w-4xl mx-auto flex flex-col gap-12 relative before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-800">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                id={`experience-item-${idx}`}
                className={`flex flex-col md:flex-row gap-8 relative items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-950 border-4 border-neutral-800 flex items-center justify-center z-10 text-indigo-500 group-hover:border-indigo-600 transition-colors shadow-lg shadow-black">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-550" />
                </div>

                {/* Left/Right spacer for layout alignment */}
                <div className="hidden md:block md:w-1/2" />

                {/* Core Timeline Card Content */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800/80 hover:border-indigo-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group">
                    {/* Visual Badge */}
                    <span className="absolute top-4 right-4 text-[10px] font-mono font-semibold px-2.5 py-1 bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700/50 uppercase">
                      {exp.type}
                    </span>

                    {/* Header */}
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-500 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-neutral-400 font-mono">
                        <span className="flex items-center gap-1.5 font-semibold text-indigo-500">
                          <Award size={14} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="flex flex-col gap-3 mb-6 text-sm text-neutral-400 leading-relaxed">
                      {exp.description.map((bullet, bIdx) => {
                        // Highlight metrics and testing words dynamically for recruiter-ready optimization!
                        const isTesting = bullet.toLowerCase().includes('pytest') || bullet.toLowerCase().includes('testing') || bullet.toLowerCase().includes('coverage');
                        return (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            {isTesting ? (
                              <span className="text-indigo-500 mt-1 flex-shrink-0">
                                <TestTube size={14} />
                              </span>
                            ) : (
                              <span className="text-emerald-500 mt-1 flex-shrink-0">
                                <CheckCircle size={14} />
                              </span>
                            )}
                            <span>{bullet}</span>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Technology Badges Used */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skillsUsed.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono px-2.5 py-1 bg-neutral-950/60 border border-neutral-800 rounded-lg text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
