import { X, Printer, Mail, MapPin, Github, Linkedin, Briefcase, Award, GraduationCap, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo, experiences, skillsMatrix } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="resume-modal-overlay" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
      <motion.div
        id="resume-modal-content"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden print:p-0 print:border-none print:max-h-none print:bg-white"
      >
        {/* Modal Action Controls (Hidden in print) */}
        <div className="bg-neutral-950 px-6 py-4 border-b border-neutral-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
            <h3 className="text-sm font-mono text-neutral-400 font-semibold">interactive_resume.json</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer"
            >
              <Printer size={13} />
              Print / Save PDF
            </button>
            <button
              id="resume-close-btn"
              onClick={onClose}
              className="p-1.5 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Area */}
        <div className="flex-grow overflow-y-auto p-6 sm:p-8 bg-neutral-950 text-neutral-300 print:bg-white print:text-black print:p-0 print:overflow-visible">
          {/* Printable Styles block */}
          <style>{`
            @media print {
              body * {
                visibility: hidden;
              }
              #resume-modal-overlay, #resume-modal-content, #resume-modal-content * {
                visibility: visible;
              }
              #resume-modal-overlay {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                background: white !important;
                padding: 0 !important;
              }
              #resume-modal-content {
                border: none !important;
                box-shadow: none !important;
                background: white !important;
                color: black !important;
              }
              .text-indigo-400, .text-indigo-300 {
                color: #4f46e5 !important;
              }
              .bg-neutral-900, .bg-neutral-950, .bg-neutral-950\\/60 {
                background-color: #f3f4f6 !important;
                border-color: #e5e7eb !important;
              }
              .border-neutral-800, .border-neutral-750 {
                border-color: #e5e7eb !important;
              }
            }
          `}</style>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto font-sans">
            {/* Header / Meta */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 border-b border-neutral-800 pb-6 print:border-neutral-200">
              <div>
                <h1 className="text-3xl font-bold text-white print:text-black">{personalInfo.name}</h1>
                <p className="text-indigo-500 font-mono text-sm font-semibold mt-1 print:text-indigo-600">{personalInfo.title}</p>
                <p className="text-xs text-neutral-400 font-mono mt-1 print:text-neutral-600 flex items-center gap-1">
                  <MapPin size={11} /> {personalInfo.location}
                </p>
              </div>

              {/* Info columns */}
              <div className="flex flex-col gap-1.5 text-xs font-mono text-neutral-400 print:text-black mt-1 md:text-right">
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors flex items-center gap-1.5 md:justify-end">
                  <Mail size={12} className="text-indigo-500 print:text-indigo-600" />
                  {personalInfo.email}
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 md:justify-end">
                  <Github size={12} className="text-indigo-500 print:text-indigo-600" />
                  github.com/sahsanyasir
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 md:justify-end">
                  <Linkedin size={12} className="text-indigo-500 print:text-indigo-600" />
                  linkedin.com/in/sahsanyasir
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-mono text-indigo-500 font-bold uppercase tracking-widest flex items-center gap-2 print:text-indigo-600">
                <GraduationCap size={14} /> Executive Summary
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed print:text-neutral-800">
                {personalInfo.about.summary}
              </p>
            </div>

            {/* Professional Experience */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-mono text-indigo-500 font-bold uppercase tracking-widest flex items-center gap-2 print:text-indigo-600">
                <Briefcase size={14} /> Professional Work Experience
              </h4>

              <div className="flex flex-col gap-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-2 border-l-2 border-neutral-800 pl-4 print:border-neutral-200">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <h5 className="font-bold text-sm text-white print:text-black">{exp.role}</h5>
                      <span className="text-xs font-mono text-neutral-400 print:text-neutral-500">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-500 font-semibold print:text-indigo-600">
                      <span>{exp.company}</span>
                      <span className="text-neutral-600">&bull;</span>
                      <span className="text-neutral-400 font-normal">{exp.location}</span>
                    </div>

                    <ul className="flex flex-col gap-1.5 mt-2 text-xs text-neutral-400 print:text-neutral-700 leading-relaxed">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle size={12} className="text-indigo-500 mt-0.5 flex-shrink-0 print:text-indigo-600" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills grid */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-mono text-indigo-500 font-bold uppercase tracking-widest flex items-center gap-2 print:text-indigo-600">
                <Award size={14} /> Skills Inventory
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillsMatrix.map((cat) => (
                  <div key={cat.title} className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 print:bg-neutral-100 print:border-neutral-200">
                    <h5 className="text-xs font-mono text-white print:text-black font-bold mb-2 border-b border-neutral-800 pb-1.5 print:border-neutral-300">
                      {cat.title}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="text-[10px] font-mono px-2 py-0.5 bg-neutral-950 border border-neutral-850 rounded text-neutral-400 print:bg-white print:text-black print:border-neutral-300"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Credential */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-mono text-indigo-500 font-bold uppercase tracking-widest flex items-center gap-2 print:text-indigo-600">
                <GraduationCap size={14} /> Education
              </h4>
              <div className="flex justify-between items-start text-xs border-l-2 border-neutral-800 pl-4 print:border-neutral-200">
                <div>
                  <h5 className="font-bold text-white print:text-black">Bachelor of Science (B.S.) in Computer Science</h5>
                  <p className="text-neutral-400 mt-0.5 print:text-neutral-600">Key Focus: Software Engineering & Backend Systems</p>
                </div>
                <div className="text-right text-neutral-400 print:text-neutral-500 font-mono">
                  <span>Graduated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
