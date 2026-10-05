import React from 'react';
import {
  ShieldCheck,
  Palette,
  Layers,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext.tsx';

export const AboutSection: React.FC = () => {
  const { about, profile } = usePortfolio();

  const getPillarIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'reliable':
        return ShieldCheck;
      case 'creative':
        return Palette;
      case 'organized':
        return Layers;
      case 'ai-powered':
        return Sparkles;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="about" className="scroll-mt-20 py-20 lg:py-28 bg-[#FFF8F0]/40 border-t border-[#FFE8D1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-[#F57C00] uppercase tracking-wider mb-2">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#222222]">
            {about.title}
          </h2>
          <div className="mt-4 text-base sm:text-lg text-[#6B6B6B] leading-relaxed space-y-4">
            <p>{about.bio1}</p>
            <p>{about.bio2}</p>
          </div>
        </div>

        {/* Core Attributes Grid */}
        <div className="mb-20">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#222222] mb-6">
            Core Professional Attributes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {about.attributes.map((attr, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#FFE8D1]/80 hover:border-[#F57C00]/40 transition-colors shadow-xs"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#222222]">{attr.title}</h4>
                    <p className="mt-1 text-xs text-[#6B6B6B] leading-normal">{attr.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Summary Card */}
            <div className="p-5 rounded-2xl bg-[#FFE8D1]/50 border border-[#FFE8D1] flex flex-col justify-center">
              <div className="text-xs text-[#6B6B6B]">Availability & Location</div>
              <div className="mt-1 text-sm font-bold text-[#222222]">{profile.location} · Remote Global</div>
              <div className="mt-1 text-xs text-[#F57C00] font-medium">{profile.timezone}</div>
            </div>
          </div>
        </div>

        {/* Why Work With Me Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#222222]">
              Why Work With Me?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#6B6B6B]">
              Four pillars that guarantee a frictionless, high-value partnership for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.whyWorkWithMe.map((item, idx) => {
              const Icon = getPillarIcon(item.title);
              return (
                <div
                  key={idx}
                  className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#FFE8D1]/80 hover:shadow-lg hover:shadow-[#F57C00]/5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FFE8D1]/60 text-[#F57C00] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#222222] mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#FFE8D1]/50 text-xs font-medium text-[#222222] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F57C00]" />
                    <span>{item.bullet}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
