import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Eye, X, Calendar, Building, ExternalLink } from 'lucide-react';
import { certificates } from '../data';
import { Certificate } from '../types';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certificates" className="py-24 bg-neutral-950 text-white relative border-t border-neutral-900">
      {/* Visual background accents */}
      <div className="absolute top-[30%] right-[-10%] w-[30rem] h-[30rem] bg-indigo-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[25rem] h-[25rem] bg-indigo-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-semibold">Accomplishments</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            Certifications & Credentials
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
            Verified professional qualifications in software engineering, cloud systems development, and intelligent agentic workflows.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="certificates-grid">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              id={`certificate-card-${cert.id}`}
              className="group bg-neutral-900/30 border border-neutral-800/80 hover:border-indigo-500/30 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 shadow-xl relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Image Preview Container */}
              <div 
                className="relative aspect-[4/3] overflow-hidden bg-neutral-950 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye size={20} />
                  </motion.div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-500 font-semibold uppercase tracking-wider">
                    <Building size={12} className="flex-shrink-0" />
                    <span>{cert.distributor}</span>
                  </div>
                  
                  <h3 
                    className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors cursor-pointer"
                    onClick={() => setSelectedCert(cert)}
                  >
                    {cert.title}
                  </h3>
                </div>

                <div className="mt-auto pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    Issued: {cert.year}
                  </span>
                  
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-indigo-500 hover:text-indigo-400 transition-colors flex items-center gap-1 group/btn"
                  >
                    Expand View
                    <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Expanded View Overlay Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            id="certificate-lightbox-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            {/* Close button top right */}
            <button
              id="lightbox-close-btn"
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center hover:bg-neutral-800 transition-all cursor-pointer shadow-xl"
              aria-label="Close image lightbox"
            >
              <X size={24} />
            </button>

            {/* Lightbox Modal Box */}
            <motion.div
              id="certificate-lightbox-content"
              className="relative max-w-5xl w-full flex flex-col items-center gap-6"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
            >
              {/* Image Frame with reflection/neon shadow */}
              <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-[0_0_50px_rgba(99,102,241,0.15)] max-h-[75vh] flex items-center justify-center">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="max-h-[75vh] object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption details below image */}
              <div className="text-center flex flex-col gap-2 max-w-2xl px-4">
                <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                  <Award size={13} /> {selectedCert.distributor}
                </span>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white leading-tight">
                  {selectedCert.title}
                </h3>
                <div className="flex items-center justify-center gap-4 text-xs font-mono text-neutral-400">
                  <span>Issued: {selectedCert.year}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
