import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext.tsx';
import { Compass, CalendarDays, Wand2, Send, Check } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { processSteps } = usePortfolio();
  const [activeStep, setActiveStep] = useState<string>('01');

  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Compass className="w-5 h-5" />;
      case '02':
        return <CalendarDays className="w-5 h-5" />;
      case '03':
        return <Wand2 className="w-5 h-5" />;
      case '04':
        return <Send className="w-5 h-5" />;
      default:
        return <Check className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="scroll-mt-20 py-20 lg:py-28 bg-[#FFF8F0]/30 border-t border-[#FFE8D1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#F57C00] uppercase tracking-wider mb-2">
            Working Together
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#222222]">
            A Smooth, Seamless 4-Step Process
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B6B6B]">
            From initial kickoff to continuous delivery, my workflow is designed to minimize your
            workload and maximize peace of mind.
          </p>

          {/* Step Selector Tabs */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {processSteps.map((s) => (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(s.step)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                  activeStep === s.step
                    ? 'bg-[#F57C00] text-white shadow-xs'
                    : 'bg-white text-[#6B6B6B] hover:text-[#222222] border border-[#FFE8D1]'
                }`}
              >
                Step {s.step}: {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((item) => {
            const isSelected = activeStep === item.step;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className={`cursor-pointer relative p-6 sm:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-white border-2 border-[#F57C00] shadow-lg shadow-[#F57C00]/10 scale-102'
                    : 'bg-white border border-[#FFE8D1]/80 hover:border-[#F57C00]/40 shadow-xs'
                }`}
              >
                <div>
                  {/* Top Number + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#F57C00] tracking-tight tabular-nums">
                      {item.step}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform ${
                        isSelected
                          ? 'bg-[#F57C00] text-white'
                          : 'bg-[#FFE8D1]/60 text-[#F57C00] group-hover:scale-110'
                      }`}
                    >
                      {getStepIcon(item.step)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[#222222] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-[#F57C00] mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Key Activities */}
                  <div className="space-y-2 pt-4 border-t border-[#FFE8D1]/50 mb-6">
                    {item.activities.map((act, actIdx) => (
                      <div key={actIdx} className="flex items-start gap-2 text-xs text-[#222222]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F57C00] shrink-0 mt-1.5" />
                        <span className="leading-snug">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Footer Timeline */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#6B6B6B]">
                  <span>Phase Timeline</span>
                  <span className="font-semibold text-[#222222]">{item.duration}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
