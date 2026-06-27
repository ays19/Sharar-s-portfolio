import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-neutral-950 border-t border-neutral-900/60 py-12 text-neutral-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <p className="text-neutral-400 font-sans font-semibold text-sm">
            {personalInfo.name} &copy; {new Date().getFullYear()}
          </p>
          <p className="text-[10px]">
            Designed &amp; engineered for performance &bull; 
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
