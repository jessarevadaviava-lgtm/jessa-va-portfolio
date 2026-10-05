import React, { useState, useEffect } from 'react';
import { NavSectionId, NavItem, ViewMode } from '../types.ts';
import { Menu, X, ArrowUpRight, LayoutList, Layers } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext.tsx';

interface NavbarProps {
  activeSection: NavSectionId;
  onNavigate: (sectionId: NavSectionId) => void;
  viewMode: ViewMode;
  onToggleViewMode: (mode: ViewMode) => void;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'process', label: 'Process' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  viewMode,
  onToggleViewMode,
}) => {
  const { profile } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: NavSectionId) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-[#FFE8D1]/60'
          : 'bg-white/80 backdrop-blur-xs py-4 border-b border-[#FFE8D1]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Wordmark), Zone 2 (Nav links), Zone 3 (Action) */}
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Single text wordmark */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-[#222222] hover:text-[#F57C00] transition-colors text-left"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#F57C00] transition-transform duration-300 group-hover:scale-125 shrink-0" />
            <span className="truncate">{profile.name}</span>
          </button>

          {/* Zone 2: Navigation Links (All 8 Tabs) */}
          <nav
            role="tablist"
            aria-label="Portfolio sections"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 bg-[#FFF8F0]/80 rounded-full border border-[#FFE8D1]/60"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`section-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-white bg-[#F57C00] shadow-xs font-semibold'
                      : 'text-[#6B6B6B] hover:text-[#222222] hover:bg-white/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Mode Switcher & Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Mode Toggle (Tabs vs Scroll) */}
            <div className="hidden sm:inline-flex items-center p-0.5 rounded-xl bg-[#FFF8F0] border border-[#FFE8D1]">
              <button
                type="button"
                onClick={() => onToggleViewMode('tabbed')}
                title="Tabbed view: Focus on one section tab at a time"
                className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-lg transition-all ${
                  viewMode === 'tabbed'
                    ? 'bg-white text-[#F57C00] shadow-2xs font-semibold'
                    : 'text-[#6B6B6B] hover:text-[#222222]'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Tab View</span>
              </button>
              <button
                type="button"
                onClick={() => onToggleViewMode('scroll')}
                title="Scroll view: Browse all sections on a single continuous page"
                className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-lg transition-all ${
                  viewMode === 'scroll'
                    ? 'bg-white text-[#F57C00] shadow-2xs font-semibold'
                    : 'text-[#6B6B6B] hover:text-[#222222]'
                }`}
              >
                <LayoutList className="w-3 h-3" />
                <span>Scroll All</span>
              </button>
            </div>

            {/* Let's Work Together CTA */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-[#F57C00] rounded-full hover:bg-[#e06f00] active:scale-95 transition-all shadow-xs shadow-[#F57C00]/20 whitespace-nowrap cursor-pointer"
            >
              <span>Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#222222] hover:bg-[#FFE8D1]/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#F57C00]/30"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#FFE8D1] bg-white rounded-2xl shadow-xl px-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Mode Switcher */}
            <div className="flex items-center justify-between p-2 mb-2 bg-[#FFF8F0] rounded-xl border border-[#FFE8D1]">
              <span className="text-xs font-medium text-[#6B6B6B]">Display Mode:</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => onToggleViewMode('tabbed')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                    viewMode === 'tabbed'
                      ? 'bg-white text-[#F57C00] shadow-xs font-semibold'
                      : 'text-[#6B6B6B]'
                  }`}
                >
                  Tab View
                </button>
                <button
                  type="button"
                  onClick={() => onToggleViewMode('scroll')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                    viewMode === 'scroll'
                      ? 'bg-white text-[#F57C00] shadow-xs font-semibold'
                      : 'text-[#6B6B6B]'
                  }`}
                >
                  Scroll All
                </button>
              </div>
            </div>

            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#F57C00] bg-[#FFF8F0] font-semibold'
                      : 'text-[#222222] hover:bg-[#FFF8F0]/70'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#F57C00]" />}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#F57C00] rounded-xl hover:bg-[#e06f00] transition-colors"
              >
                <span>Let’s Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
