import React, { useState, useEffect, useRef } from 'react';
import { NavSectionId, ViewMode } from './types.ts';
import { PortfolioProvider } from './context/PortfolioContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ClientAttractionSection } from './components/ClientAttractionSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { EditToolbar } from './components/EditToolbar.tsx';
import { TabPagination } from './components/TabPagination.tsx';

function MainPortfolioContent() {
  const [activeSection, setActiveSection] = useState<NavSectionId>('home');
  const [viewMode, setViewMode] = useState<ViewMode>('scroll');
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');

  const isProgrammaticScroll = useRef(false);

  // Parse initial hash from URL if present (e.g. #portfolio or #services)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as NavSectionId;
    const validSections: NavSectionId[] = [
      'home',
      'about',
      'services',
      'skills',
      'portfolio',
      'process',
      'testimonials',
      'contact',
    ];
    if (validSections.includes(hash)) {
      setActiveSection(hash);
      setTimeout(() => {
        handleNavigate(hash);
      }, 100);
    }
  }, []);

  // Scroll Spy to keep active nav indicator in sync during scroll mode
  useEffect(() => {
    if (viewMode !== 'scroll') return;

    const sectionIds: NavSectionId[] = [
      'home',
      'about',
      'services',
      'skills',
      'portfolio',
      'process',
      'testimonials',
      'contact',
    ];

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const handleNavigate = (id: NavSectionId) => {
    setActiveSection(id);

    // Update URL hash without abrupt jumps
    try {
      history.replaceState(null, '', `#${id}`);
    } catch (e) {
      // In sandbox environments, ignore history push restrictions
    }

    if (viewMode === 'tabbed') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    // Scroll mode navigation with offset compensation
    isProgrammaticScroll.current = true;
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    // Release programmatic lock after scroll finishes
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 850);
  };

  const handleSelectService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForInquiry(serviceName);
    }
    handleNavigate('contact');
  };

  const handleSelectProjectForInquiry = (projectName: string) => {
    setSelectedServiceForInquiry(`Similar project to: ${projectName}`);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#222222]">
      {/* Sticky Navigation Bar with all functioning tabs */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {viewMode === 'tabbed' ? (
          /* TABBED VIEW MODE: Show focused active tab with pagination */
          <div className="pt-16 animate-in fade-in duration-200">
            {activeSection === 'home' && (
              <HeroSection
                onExplorePortfolio={() => handleNavigate('portfolio')}
                onWorkTogether={() => handleNavigate('contact')}
              />
            )}
            {activeSection === 'about' && <AboutSection />}
            {activeSection === 'services' && (
              <>
                <ServicesSection onSelectService={handleSelectService} />
                <ClientAttractionSection onWorkTogether={handleSelectService} />
              </>
            )}
            {activeSection === 'skills' && <SkillsSection />}
            {activeSection === 'portfolio' && (
              <PortfolioSection
                onSelectProjectForInquiry={handleSelectProjectForInquiry}
              />
            )}
            {activeSection === 'process' && <ProcessSection />}
            {activeSection === 'testimonials' && <TestimonialsSection />}
            {activeSection === 'contact' && (
              <ContactSection preselectedService={selectedServiceForInquiry} />
            )}

            {/* Previous & Next Tab Pagination */}
            <TabPagination
              currentTab={activeSection}
              onNavigate={handleNavigate}
              onSwitchToScrollView={() => {
                setViewMode('scroll');
                setTimeout(() => handleNavigate(activeSection), 50);
              }}
            />
          </div>
        ) : (
          /* SCROLL VIEW MODE: All sections continuous with smooth jump */
          <div>
            {/* 1. Home */}
            <HeroSection
              onExplorePortfolio={() => handleNavigate('portfolio')}
              onWorkTogether={() => handleNavigate('contact')}
            />

            {/* 2. About Me */}
            <AboutSection />

            {/* 3. Services */}
            <ServicesSection onSelectService={handleSelectService} />

            {/* Client Attraction Magnet: ROI Calculator & Timezone Overlap */}
            <ClientAttractionSection onWorkTogether={handleSelectService} />

            {/* 4. Skills */}
            <SkillsSection />

            {/* 5. Portfolio */}
            <PortfolioSection
              onSelectProjectForInquiry={handleSelectProjectForInquiry}
            />

            {/* 6. Process */}
            <ProcessSection />

            {/* 7. Testimonials */}
            <TestimonialsSection />

            {/* 8. Contact */}
            <ContactSection preselectedService={selectedServiceForInquiry} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Owner Customization Toolbar */}
      <EditToolbar />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <MainPortfolioContent />
    </PortfolioProvider>
  );
}
