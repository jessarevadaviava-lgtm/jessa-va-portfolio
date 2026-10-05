import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext.tsx';
import { PortfolioCategory, PortfolioItem } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProjectForInquiry: (projectName: string) => void;
}

const CATEGORIES: PortfolioCategory[] = [
  'All',
  'Social Media',
  'Graphic Design',
  'Content Creation',
  'Virtual Assistance',
  'Data Entry',
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProjectForInquiry,
}) => {
  const { portfolio } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? portfolio
      : portfolio.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="scroll-mt-20 py-20 lg:py-28 bg-white border-t border-[#FFE8D1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-[#F57C00] uppercase tracking-wider mb-2">
            Selected Works & Samples
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#222222]">
            Work Samples That Drive Real Results
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B6B6B]">
            Explore real project deliverables spanning social media designs, editorial calendars,
            accurate spreadsheet systems, and research briefings.
          </p>

          {/* Interactive Filter Tabs (Buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#FFF8F0] border border-[#FFE8D1] rounded-2xl max-w-fit mx-auto mt-8 shadow-xs">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#F57C00] shadow-sm font-semibold'
                      : 'text-[#6B6B6B] hover:text-[#222222]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white border border-[#FFE8D1]/80 hover:border-[#F57C00]/40 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-black/5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div>
                <div className="relative aspect-4/3 w-full bg-[#FFF8F0] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Unboxed Metadata (Zero-Pill Rule) */}
                  <div className="flex items-center gap-2 text-xs text-[#6B6B6B] mb-2.5">
                    <span className="font-semibold text-[#F57C00]">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{project.tools.slice(0, 2).join(', ')}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] tracking-tight mb-2 group-hover:text-[#F57C00] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#222222] bg-[#FFF8F0] hover:bg-[#FFE8D1] hover:text-[#F57C00] transition-colors"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquire={onSelectProjectForInquiry}
        />
      </div>
    </section>
  );
};
