import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext.tsx';
import { Cpu } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Design & Creative', 'Admin & Operations', 'AI & Tech', 'Core Strengths'];

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  const toolBadges = [
    { name: 'Canva Pro', role: 'Design & Carousels' },
    { name: 'ChatGPT-4o', role: 'Prompts & Drafting' },
    { name: 'Google Sheets', role: 'Data & Dashboards' },
    { name: 'Google Drive', role: 'Cloud Filing' },
    { name: 'CapCut', role: 'Short-Form Reels' },
    { name: 'Meta Business Suite', role: 'Publishing' },
    { name: 'Notion', role: 'SOPs & Content Plans' },
    { name: 'Asana & Trello', role: 'Project Tracking' },
    { name: 'Claude & Perplexity', role: 'Research & Synthesis' },
    { name: 'Slack & Zoom', role: 'Remote Comms' },
  ];

  return (
    <section id="skills" className="scroll-mt-20 py-20 lg:py-28 bg-[#FFF8F0]/30 border-t border-[#FFE8D1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-[#F57C00] uppercase tracking-wider mb-2">
            Technical & Practical Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#222222]">
            Competencies & Tool Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B6B6B]">
            A balanced toolkit combining high-precision administrative skills with creative visual
            craft and state-of-the-art AI productivity tools.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white border border-[#FFE8D1] rounded-2xl max-w-fit mx-auto mt-8 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#F57C00] text-white shadow-xs font-semibold'
                    : 'text-[#6B6B6B] hover:text-[#222222] hover:bg-[#FFF8F0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-[#FFE8D1]/80 hover:border-[#F57C00]/40 transition-all shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-[#222222]">{skill.name}</h3>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#6B6B6B]">{skill.experience}</span>
                  <span className="text-[#FFE8D1]">·</span>
                  <span className="font-semibold text-[#F57C00] tabular-nums">{skill.level}%</span>
                </div>
              </div>

              <p className="text-xs text-[#6B6B6B] mb-3 leading-relaxed">
                {skill.description}
              </p>

              {/* Elegant Progress Bar */}
              <div className="w-full h-2 rounded-full bg-[#FFE8D1]/40 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FFE8D1] to-[#F57C00] rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Software & Platform Stack Showcase */}
        <div className="bg-white rounded-3xl p-8 border border-[#FFE8D1]/80 shadow-xs">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-5 h-5 text-[#F57C00]" />
            <h3 className="text-lg font-bold text-[#222222]">
              Everyday Software & Software Stack
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {toolBadges.map((tool, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#FFF8F0] border border-[#FFE8D1] text-center hover:bg-white hover:border-[#F57C00]/40 transition-colors"
              >
                <div className="text-xs font-bold text-[#222222] truncate">{tool.name}</div>
                <div className="text-[11px] text-[#6B6B6B] truncate mt-0.5">{tool.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
