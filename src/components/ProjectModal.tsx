import React, { useEffect } from 'react';
import { PortfolioItem } from '../types.ts';
import { X, CheckCircle, Wrench, Sparkles, Building2, TrendingUp } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-[#FFE8D1] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/90 text-[#222222] hover:bg-[#FFE8D1] transition-colors flex items-center justify-center shadow-xs border border-[#FFE8D1]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Banner */}
        <div className="relative aspect-16/9 w-full bg-[#FFF8F0] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-medium text-[#FFE8D1] uppercase tracking-wider">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B6B6B] pb-4 border-b border-[#FFE8D1]/80">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#F57C00]" />
              <span>{project.clientType}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-[#F57C00]" />
              <span>{project.tools.join(', ')}</span>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#222222] mb-2">
              Project Overview & Approach
            </h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#222222] mb-3">
              Key Deliverables
            </h3>
            <div className="space-y-2">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#222222]">
                  <CheckCircle className="w-4 h-4 text-[#F57C00] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results / Impact Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF8F0] border border-[#FFE8D1] flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#F57C00] uppercase tracking-wider">
                Measurable Impact / Client Result
              </div>
              <p className="text-xs sm:text-sm text-[#222222] font-medium mt-0.5">
                {project.resultsOrImpact}
              </p>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#FFE8D1]/80">
            <div className="text-xs text-[#6B6B6B]">
              Need similar deliverables for your brand?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-[#FFE8D1] text-xs font-medium text-[#6B6B6B] hover:text-[#222222] hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-[#F57C00] text-white text-xs font-semibold hover:bg-[#e06f00] transition-colors"
              >
                Request Similar Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
