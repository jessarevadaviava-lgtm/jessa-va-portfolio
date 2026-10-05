import React from 'react';
import {
  Share2,
  Palette,
  PenTool,
  Database,
  Briefcase,
  Search,
  Sparkles,
  Check,
  ArrowRight,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext.tsx';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { services } = usePortfolio();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Share2':
        return <Share2 className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="scroll-mt-20 py-20 lg:py-28 bg-white border-t border-[#FFE8D1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-[#F57C00] uppercase tracking-wider mb-2">
              Services & Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#222222]">
              Specialized Remote Support Tailored for Your Growth
            </h2>
            <p className="mt-4 text-base text-[#6B6B6B]">
              From visual aesthetics to backend administrative workflows, I provide dependable support
              so you can focus on core client delivery and business expansion.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('Custom Package')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#F57C00] bg-[#FFE8D1]/50 hover:bg-[#FFE8D1] transition-colors self-start md:self-end"
          >
            <span>Need a custom monthly retainer?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const isFeatured = service.id === 'ai-assisted' || service.id === 'smm';
            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#FFF8F0] to-white border-2 border-[#FFE8D1] shadow-md shadow-[#F57C00]/5'
                    : 'bg-white border border-[#FFE8D1]/80 hover:border-[#F57C00]/40 hover:shadow-lg hover:shadow-black/5'
                }`}
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#6B6B6B] tracking-widest">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FFE8D1]/60 text-[#F57C00] flex items-center justify-center">
                      {getIcon(service.icon)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-[#222222] tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#F57C00] mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-[#FFE8D1]/60 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#222222]">
                        <Check className="w-3.5 h-3.5 text-[#F57C00] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-[#222222] bg-[#FFF8F0] hover:bg-[#FFE8D1] hover:text-[#F57C00] transition-colors"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}

          {/* Bonus Retainer Card */}
          <div className="rounded-3xl p-7 sm:p-8 bg-[#222222] text-white flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F57C00] uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4 text-[#F57C00]" />
                <span>Dedicated Partnership</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Monthly VA Retainer
              </h3>
              <p className="text-xs sm:text-sm text-[#FFE8D1]/80 leading-relaxed mb-6">
                Need ongoing support combining social media, design, daily administrative tasks, and AI
                assistance? Reserve dedicated 10, 20, or 40 hours per month with priority turnaround.
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#F57C00]" />
                  <span>Guaranteed weekly hours reserved</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#F57C00]" />
                  <span>Direct Slack / WhatsApp channel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#F57C00]" />
                  <span>Weekly progress & strategy recaps</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onSelectService('Monthly Retainer')}
              className="mt-8 w-full py-3 px-4 rounded-xl text-xs font-semibold text-[#222222] bg-white hover:bg-[#FFE8D1] transition-colors"
            >
              Discuss a Retainer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
