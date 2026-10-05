import React from 'react';
import { ArrowUp } from 'lucide-react';
import { NavSectionId } from '../types.ts';
import { usePortfolio } from '../context/PortfolioContext.tsx';

interface FooterProps {
  onNavigate: (sectionId: NavSectionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { profile } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#222222] text-white pt-16 pb-12 border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F57C00]" />
              <span>{profile.name}</span>
            </div>
            <div className="text-xs text-[#FFE8D1] font-medium tracking-wide">
              {profile.role}
            </div>
            <div className="mt-2 text-xs text-white/60">
              {profile.tagline}
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/70">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-white transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="hover:text-white transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => onNavigate('process')}
              className="hover:text-white transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => onNavigate('testimonials')}
              className="hover:text-white transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Scroll to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#F57C00] text-white flex items-center justify-center transition-all duration-200 border border-white/10 self-start md:self-auto shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p className="flex items-center gap-2">
            <span>© 2026 {profile.name}. All Rights Reserved.</span>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-owner-auth'))}
              className="opacity-30 hover:opacity-100 transition-opacity text-[10px] text-white/60 hover:text-white cursor-pointer"
              title="Owner Portal (Passcode Required)"
            >
              🔒
            </button>
          </p>
          <p className="flex items-center gap-1">
            <span>{profile.location}</span>
            <span>·</span>
            <span>Serving Global Clients</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
