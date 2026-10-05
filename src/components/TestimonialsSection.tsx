import React from 'react';
import { usePortfolio } from '../context/PortfolioContext.tsx';
import { Star, Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = usePortfolio();

  return (
    <section id="testimonials" className="scroll-mt-20 py-20 lg:py-28 bg-white border-t border-[#FFE8D1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#F57C00] uppercase tracking-wider mb-2">
            Client Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#222222]">
            Endorsed by Busy Founders & Creators
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B6B6B]">
            Client feedback illustrating typical collaborations and outcomes.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1 rounded-full bg-[#FFF8F0] border border-[#FFE8D1] text-[11px] font-medium text-[#6B6B6B]">
            <Sparkles className="w-3.5 h-3.5 text-[#F57C00]" />
            <span>Editable anytime via the "Edit Portfolio" tool or by asking</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-white border border-[#FFE8D1]/80 hover:border-[#F57C00]/40 transition-all duration-300 shadow-xs flex flex-col justify-between relative"
            >
              <div>
                {/* Top Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#F57C00]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F57C00]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#FFE8D1]" />
                </div>

                {/* Content Quote */}
                <p className="text-xs sm:text-sm text-[#222222] leading-relaxed italic mb-8 font-normal">
                  {t.content}
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-5 border-t border-[#FFE8D1]/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFE8D1] text-[#F57C00] font-bold text-xs flex items-center justify-center shrink-0">
                  {t.avatarText}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#222222]">{t.clientName}</div>
                  <div className="text-xs text-[#6B6B6B]">
                    {t.role} · {t.business} {t.country ? `(${t.country})` : ''}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
