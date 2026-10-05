import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext.tsx';

interface HeroSectionProps {
  onExplorePortfolio: () => void;
  onWorkTogether: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePortfolio,
  onWorkTogether,
}) => {
  const { profile } = usePortfolio();

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#FFF8F0]/80 via-white to-white"
    >
      {/* Subtle tech/AI ambient background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden opacity-60"
      >
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#FFE8D1]/50 rounded-full blur-3xl" />
        <div className="absolute top-40 right-0 w-80 h-80 bg-[#FFF8F0] rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-[#FFE8D1]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text and CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Ambient status indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FFE8D1] shadow-2xs text-xs font-medium text-[#222222]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F57C00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F57C00]" />
              </span>
              <span>Available for New Projects</span>
              <span className="text-[#6B6B6B]">·</span>
              <span className="text-[#6B6B6B]">{profile.location} ({profile.timezone.split(' ')[0]})</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#222222] leading-[1.12] text-balance">
              {profile.headline.includes('AI-Powered') ? (
                <>
                  {profile.headline.split('AI-Powered')[0]}
                  <span className="text-[#F57C00] relative inline-block">
                    AI-Powered
                    <svg
                      className="absolute -bottom-1.5 left-0 w-full text-[#FFE8D1] -z-10"
                      height="10"
                      viewBox="0 0 200 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 7C50 2 150 2 197 7"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  {profile.headline.split('AI-Powered')[1]}
                </>
              ) : (
                profile.headline
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {profile.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={onWorkTogether}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#F57C00] rounded-xl hover:bg-[#e06f00] shadow-sm shadow-[#F57C00]/25 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Let’s Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExplorePortfolio}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#222222] bg-white border border-[#FFE8D1] rounded-xl hover:bg-[#FFF8F0] hover:border-[#F57C00]/40 transition-all duration-200 active:scale-[0.98]"
              >
                <span>View My Portfolio</span>
              </button>
            </div>

            {/* Adjacency Trust Markers */}
            <div className="pt-4 border-t border-[#FFE8D1]/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="text-lg font-bold text-[#222222] tabular-nums">{profile.stats.hoursSaved}</div>
                <div className="text-xs text-[#6B6B6B]">Saved Per Month</div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#222222] tabular-nums">{profile.stats.onTimeRate}</div>
                <div className="text-xs text-[#6B6B6B]">On-Time Delivery</div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#222222] tabular-nums">{profile.stats.remoteReady}</div>
                <div className="text-xs text-[#6B6B6B]">Remote-Ready</div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#F57C00] flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-[#F57C00]" />
                  <span>{profile.stats.turnaround}</span>
                </div>
                <div className="text-xs text-[#6B6B6B]">Human Polish</div>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait and Decorative Elements */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Outer decorative halo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-[#FFE8D1] to-[#FFF8F0] rounded-3xl transform rotate-3 scale-95 opacity-80"
              />

              {/* Main Card Frame */}
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-xl shadow-[#222222]/5 border border-[#FFE8D1]/80">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FFF8F0]">
                  <img
                    src={profile.portraitUrl}
                    alt={`${profile.name} - ${profile.role}`}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle corner badge for AI-Assisted Workflows */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#FFE8D1] shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#FFE8D1] flex items-center justify-center text-[#F57C00]">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#222222]">AI-Enhanced Workflows</div>
                        <div className="text-[11px] text-[#6B6B6B]">Canva · Meta · Sheets · Claude</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>

                {/* Floating micro-card: Reliable Remote Support */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white py-2 px-3.5 rounded-xl shadow-lg border border-[#FFE8D1] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F57C00]" />
                  <span className="text-xs font-semibold text-[#222222]">Vetted & Detail-Oriented</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
