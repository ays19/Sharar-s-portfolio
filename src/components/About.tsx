import { motion } from 'motion/react';
import { Cpu, TestTube, Lightbulb, Code } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
  const cards = [
    {
      icon: <Cpu className="text-indigo-500" size={24} />,
      title: 'Backend Engineering',
      desc: 'Designing lightweight, optimized, and robust APIs with Django and FastAPI. Focused on database efficiency and Redis layer integration.',
    },
    {
      icon: <Code className="text-indigo-500" size={24} />,
      title: 'Agentic AI Workflows',
      desc: 'Integrating Gemini and AI Studio APIs into backend workflows to automate ticket classification, response generation, and summarization.',
    },
    {
      icon: <TestTube className="text-indigo-500" size={24} />,
      title: 'Obsessive Testing',
      desc: 'Maintaining high stability by implementing mock schemas, continuous integration integrations, and rigorous PyTest unit and load tests.',
    },
    {
      icon: <Lightbulb className="text-indigo-500" size={24} />,
      title: 'Microservices & DevOps',
      desc: 'Containerizing services with Docker, managing multi-tier architectures, and automating GitHub Actions for seamless continuous deployment.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-neutral-950 text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Summary Left */}
          <motion.div
            className="lg:col-span-6 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-semibold">About Me</span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
                Building Backend Systems Powered by AI
              </h2>
            </div>

            <p className="text-neutral-300 leading-relaxed text-base">
              {personalInfo.about.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {personalInfo.about.highlights.map((item, index) => (
                <div
                  key={index}
                  id={`about-highlight-${index}`}
                  className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex flex-col gap-1"
                >
                  <span className="text-xs font-mono text-neutral-500">{item.label}</span>
                  <span className="text-sm font-semibold text-neutral-200">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards Grid Right */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                id={`about-card-${idx}`}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/50 hover:border-indigo-500/50 transition-all duration-300 flex flex-col gap-3 group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Visual hover background glow */}
                <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:bg-indigo-950 group-hover:border-indigo-500/30 transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
