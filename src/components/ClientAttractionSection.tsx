import React, { useState, useEffect } from 'react';
import {
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Globe,
  Calendar,
  Zap,
} from 'lucide-react';

interface ClientAttractionSectionProps {
  onWorkTogether: (customMessage?: string) => void;
}

export const ClientAttractionSection: React.FC<ClientAttractionSectionProps> = ({
  onWorkTogether,
}) => {
  // Interactive Task Selection for Hours Saved Calculator
  const [selectedTasks, setSelectedTasks] = useState<string[]>([
    'social-media',
    'canva-graphics',
    'data-spreadsheets',
  ]);

  const taskOptions = [
    {
      id: 'social-media',
      label: 'Social Media Scheduling & Captions',
      hoursPerWeek: 6,
      icon: '📱',
    },
    {
      id: 'canva-graphics',
      label: 'Designing Canva Carousels & Posts',
      hoursPerWeek: 5,
      icon: '🎨',
    },
    {
      id: 'data-spreadsheets',
      label: 'Spreadsheet Clean Up & Data Entry',
      hoursPerWeek: 4,
      icon: '📊',
    },
    {
      id: 'research',
      label: 'Market & Competitor Research',
      hoursPerWeek: 4,
      icon: '🔍',
    },
    {
      id: 'admin-email',
      label: 'Inbox Triage & File Organization',
      hoursPerWeek: 5,
      icon: '📁',
    },
    {
      id: 'content-scripts',
      label: 'Video Scripting & Content Ideas',
      hoursPerWeek: 4,
      icon: '💡',
    },
  ];

  const toggleTask = (id: string) => {
    if (selectedTasks.includes(id)) {
      if (selectedTasks.length > 1) {
        setSelectedTasks(selectedTasks.filter((t) => t !== id));
      }
    } else {
      setSelectedTasks([...selectedTasks, id]);
    }
  };

  const weeklyHoursSaved = selectedTasks.reduce((sum, taskId) => {
    const task = taskOptions.find((t) => t.id === taskId);
    return sum + (task ? task.hoursPerWeek : 0);
  }, 0);

  const monthlyHoursSaved = weeklyHoursSaved * 4;
  const estimatedRevenueValue = monthlyHoursSaved * 75; // average founder rate $75/hr

  // Live Philippine Time Clock
  const [phTime, setPhTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setPhTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Before & After Transformation state
  const [transformationTab, setTransformationTab] = useState<'after' | 'before'>('after');

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#FFF8F0]/40 to-white border-t border-[#FFE8D1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section 1: Interactive Time Reclaim Calculator */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFE8D1]/60 text-[#F57C00] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive ROI Calculator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#222222]">
              How Much Time Could You Reclaim Each Month?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6B6B6B]">
              Select the repetitive tasks currently taking you away from revenue-generating work:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-[#FFE8D1] shadow-xl shadow-[#F57C00]/5">
            {/* Task Selector Buttons */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#222222]">
                Click Tasks to Delegate:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {taskOptions.map((task) => {
                  const isChecked = selectedTasks.includes(task.id);
                  return (
                    <button
                      key={task.id}
                      type="button"
                      onClick={() => toggleTask(task.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'border-[#F57C00] bg-[#FFF8F0] shadow-xs'
                          : 'border-slate-200 hover:border-[#FFE8D1] bg-white opacity-70'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{task.icon}</span>
                        <div>
                          <div className="text-xs font-semibold text-[#222222] leading-tight">
                            {task.label}
                          </div>
                          <div className="text-[11px] text-[#6B6B6B] mt-0.5">
                            ~{task.hoursPerWeek} hrs/week
                          </div>
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-xs transition-colors shrink-0 ${
                          isChecked
                            ? 'bg-[#F57C00] text-white'
                            : 'border border-slate-300 text-transparent'
                        }`}
                      >
                        ✓
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#222222] to-[#333333] text-white p-7 sm:p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F57C00]/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="text-xs uppercase tracking-wider text-[#FFE8D1] font-semibold">
                  Your Estimated Monthly Savings
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-black text-white tabular-nums tracking-tight">
                    {monthlyHoursSaved}
                  </span>
                  <span className="text-xl text-[#F57C00] font-bold">Hours Saved / Month</span>
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  That’s approximately <strong className="text-white">{weeklyHoursSaved} free hours</strong> back every single week!
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Founder billable value unlocked:</span>
                  <span className="font-bold text-[#FFE8D1] tabular-nums">
                    ~${estimatedRevenueValue.toLocaleString()}/mo
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Task delivery turnaround:</span>
                  <span className="font-bold text-white">24–48 Hours</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Quality guarantee:</span>
                  <span className="font-bold text-[#F57C00]">100% Human Polish + AI Speed</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onWorkTogether(
                    `Hi Jessa! I used your calculator and I would love to delegate ${selectedTasks.length} tasks and reclaim ~${monthlyHoursSaved} hours per month.`
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#F57C00] hover:bg-[#e06f00] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Reclaim These {monthlyHoursSaved} Hours</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Before & After Client Transformation + Live Timezone Overlap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Transformation Comparison Card */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-8 rounded-3xl border border-[#FFE8D1] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs font-bold text-[#F57C00] uppercase tracking-wider">
                    Client Transformation
                  </div>
                  <h3 className="text-2xl font-bold text-[#222222] mt-1">
                    Life Before vs. With Jessa
                  </h3>
                </div>

                {/* Tab switcher */}
                <div className="flex items-center p-1 bg-[#FFF8F0] rounded-xl border border-[#FFE8D1]">
                  <button
                    type="button"
                    onClick={() => setTransformationTab('after')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      transformationTab === 'after'
                        ? 'bg-[#F57C00] text-white shadow-xs'
                        : 'text-[#6B6B6B] hover:text-[#222222]'
                    }`}
                  >
                    With Jessa ✨
                  </button>
                  <button
                    type="button"
                    onClick={() => setTransformationTab('before')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      transformationTab === 'before'
                        ? 'bg-slate-200 text-[#222222]'
                        : 'text-[#6B6B6B] hover:text-[#222222]'
                    }`}
                  >
                    Before
                  </button>
                </div>
              </div>

              {/* Transformation Content */}
              {transformationTab === 'after' ? (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-[#222222]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-950 font-bold">Aesthetic, scheduled social feeds:</strong> All carousels and captions drafted 2 weeks in advance.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-[#222222]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-950 font-bold">Zero administrative headaches:</strong> Clean spreadsheets, organized Drive folders, zero missing data.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-[#222222]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-950 font-bold">100% Focus on Sales & Clients:</strong> Free evenings and weekends without worrying about backlogged tasks.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 animate-in fade-in duration-200 opacity-90">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 text-xs text-[#222222]">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-rose-950 font-bold">Scrambling for content:</strong> Staring at blank Canva screens late at night trying to post something.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 text-xs text-[#222222]">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-rose-950 font-bold">Messy, scattered operations:</strong> Duplicate rows, disorganized folders, and lost client leads.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 text-xs text-[#222222]">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-rose-950 font-bold">Operational burnout:</strong> Spending 15+ hours a week on chores instead of high-value business development.
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-[#FFE8D1]/60 mt-6 flex items-center justify-between text-xs text-[#6B6B6B]">
              <span>Ready for the transformation?</span>
              <button
                type="button"
                onClick={() => onWorkTogether()}
                className="font-bold text-[#F57C00] hover:underline flex items-center gap-1"
              >
                <span>Start Delegating Today</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Live Timezone & Remote Readiness Box */}
          <div className="lg:col-span-5 bg-[#FFF8F0] p-7 sm:p-8 rounded-3xl border border-[#FFE8D1] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#FFE8D1] text-[11px] font-semibold text-[#222222]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Available for 2 Retainers</span>
                </span>
                <span className="text-xs text-[#6B6B6B]">Manila, PH</span>
              </div>

              <h3 className="text-xl font-bold text-[#222222]">
                Global Timezone Synchronization
              </h3>
              <p className="text-xs text-[#6B6B6B] mt-1 mb-6 leading-relaxed">
                Working smoothly across international borders with flexible daytime overlap for North America, Europe, and Australasia.
              </p>

              {/* Live Digital Clock */}
              <div className="p-4 rounded-2xl bg-white border border-[#FFE8D1] mb-5">
                <div className="text-[11px] text-[#6B6B6B] uppercase font-semibold tracking-wider">
                  Live Time in Philippines (GMT+8):
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-[#F57C00] mt-1 tabular-nums">
                  {phTime || 'Loading time...'}
                </div>
              </div>

              {/* Timezone Overlaps */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-[#FFE8D1]/50">
                  <span className="text-[#222222] font-medium">🇺🇸 US Pacific (PST) / Eastern (EST):</span>
                  <span className="text-[#F57C00] font-semibold">Overnight Turnaround</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#FFE8D1]/50">
                  <span className="text-[#222222] font-medium">🇦🇺 Australia (AEST):</span>
                  <span className="text-emerald-700 font-semibold">Direct Daytime Sync</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#222222] font-medium">🇬🇧 United Kingdom (GMT):</span>
                  <span className="text-emerald-700 font-semibold">4–5 Hours Active Overlap</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#FFE8D1]/60 mt-6 text-center">
              <span className="text-xs text-[#6B6B6B]">
                Tasks submitted before you sleep are often completed before you wake up! ☀️
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
