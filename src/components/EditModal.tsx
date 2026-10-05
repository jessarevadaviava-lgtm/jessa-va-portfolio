import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext.tsx';
import {
  X,
  Save,
  RotateCcw,
  Download,
  Plus,
  Trash2,
  Edit3,
  User,
  Star,
  FolderKanban,
  Sparkles,
  Check,
  ShieldCheck,
  Lock,
  KeyRound,
} from 'lucide-react';
import { PortfolioItem, TestimonialItem } from '../types.ts';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'profile' | 'testimonials' | 'portfolio' | 'services' | 'security';
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'profile',
}) => {
  const {
    profile,
    setProfile,
    about,
    setAbout,
    testimonials,
    setTestimonials,
    portfolio,
    setPortfolio,
    services,
    setServices,
    saveAll,
    resetToDefaults,
    changePasscode,
    lockEditor,
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<'profile' | 'testimonials' | 'portfolio' | 'services' | 'security'>(
    initialTab
  );
  const [saveToast, setSaveToast] = useState(false);

  // Security pass state
  const [newPasscode, setNewPasscode] = useState('');
  const [passcodeSuccess, setPasscodeSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    saveAll();
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handleExportJSON = () => {
    const data = {
      profile,
      about,
      testimonials,
      portfolio,
      services,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `jessa-revadavia-portfolio-data-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleChangePasscode = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPasscode.trim().length >= 4) {
      changePasscode(newPasscode);
      setPasscodeSuccess(true);
      setNewPasscode('');
      setTimeout(() => setPasscodeSuccess(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col border border-[#FFE8D1] overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#FFE8D1] bg-[#FFF8F0]/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FFE8D1] text-[#F57C00] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#222222]">Owner Editor — Jessa Revadavia</h2>
              <p className="text-xs text-[#6B6B6B]">Passcode protected · Only you can edit this page</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#F57C00] hover:bg-[#e06f00] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close editor"
              className="p-2 text-[#6B6B6B] hover:text-[#222222] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-100 bg-white overflow-x-auto">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'profile'
                ? 'border-[#F57C00] text-[#F57C00]'
                : 'border-transparent text-[#6B6B6B] hover:text-[#222222]'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Profile & Bio</span>
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'testimonials'
                ? 'border-[#F57C00] text-[#F57C00]'
                : 'border-transparent text-[#6B6B6B] hover:text-[#222222]'
            }`}
          >
            <Star className="w-3.5 h-3.5" />
            <span>Testimonials ({testimonials.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'portfolio'
                ? 'border-[#F57C00] text-[#F57C00]'
                : 'border-transparent text-[#6B6B6B] hover:text-[#222222]'
            }`}
          >
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Portfolio Projects ({portfolio.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'services'
                ? 'border-[#F57C00] text-[#F57C00]'
                : 'border-transparent text-[#6B6B6B] hover:text-[#222222]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Services ({services.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'security'
                ? 'border-[#F57C00] text-[#F57C00]'
                : 'border-transparent text-[#6B6B6B] hover:text-[#222222]'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Passcode & Security</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {saveToast && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Your customizations have been saved successfully!</span>
            </div>
          )}

          {/* TAB 1: PROFILE & BIO */}
          {activeTab === 'profile' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#222222] mb-1">Your Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-[#FFE8D1] rounded-xl outline-hidden focus:border-[#F57C00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#222222] mb-1">Professional Title</label>
                  <input
                    type="text"
                    value={profile.role}
                    onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-[#FFE8D1] rounded-xl outline-hidden focus:border-[#F57C00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#222222] mb-1">Hero Headline</label>
                <input
                  type="text"
                  value={profile.headline}
                  onChange={(e) => setProfile({ ...profile, headline: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs border border-[#FFE8D1] rounded-xl outline-hidden focus:border-[#F57C00]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#222222] mb-1">Hero Subheadline</label>
                <textarea
                  rows={2}
                  value={profile.subheadline}
                  onChange={(e) => setProfile({ ...profile, subheadline: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs border border-[#FFE8D1] rounded-xl outline-hidden focus:border-[#F57C00]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#222222] mb-1">Contact Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-[#FFE8D1] rounded-xl outline-hidden focus:border-[#F57C00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#222222] mb-1">Timezone & Working Availability</label>
                  <input
                    type="text"
                    value={profile.timezone}
                    onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-[#FFE8D1] rounded-xl outline-hidden focus:border-[#F57C00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#222222] mb-1">Facebook URL</label>
                  <input
                    type="url"
                    value={profile.facebookUrl}
                    onChange={(e) => setProfile({ ...profile, facebookUrl: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-[#FFE8D1] rounded-xl outline-hidden focus:border-[#F57C00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#222222] mb-1">Instagram URL</label>
                  <input
                    type="url"
                    value={profile.instagramUrl}
                    onChange={(e) => setProfile({ ...profile, instagramUrl: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-[#FFE8D1] rounded-xl outline-hidden focus:border-[#F57C00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#222222] mb-1">LinkedIn URL</label>
                  <input
                    type="url"
                    value={profile.linkedinUrl}
                    onChange={(e) => setProfile({ ...profile, linkedinUrl: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-[#FFE8D1] rounded-xl outline-hidden focus:border-[#F57C00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#222222] mb-1">About Me - Bio Paragraph 1</label>
                <textarea
                  rows={3}
                  value={about.bio1}
                  onChange={(e) => setAbout({ ...about, bio1: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs border border-[#FFE8D1] rounded-xl outline-hidden focus:border-[#F57C00]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#222222] mb-1">About Me - Bio Paragraph 2</label>
                <textarea
                  rows={2}
                  value={about.bio2}
                  onChange={(e) => setAbout({ ...about, bio2: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs border border-[#FFE8D1] rounded-xl outline-hidden focus:border-[#F57C00]"
                />
              </div>
            </div>
          )}

          {/* TAB 2: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#6B6B6B]">
                  Replace sample client testimonials with your real client feedback anytime!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const newId = `t_${Date.now()}`;
                    setTestimonials([
                      ...testimonials,
                      {
                        id: newId,
                        clientName: 'New Client Name',
                        role: 'Founder',
                        business: 'Brand Name',
                        country: 'USA',
                        rating: 5,
                        content: '“Jessa is wonderful to work with! She helped us...”',
                        avatarText: 'NC',
                        isSample: false,
                      },
                    ]);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FFF8F0] text-[#F57C00] hover:bg-[#FFE8D1] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              <div className="space-y-4">
                {testimonials.map((t, idx) => (
                  <div
                    key={t.id}
                    className="p-4 rounded-2xl border border-[#FFE8D1] bg-[#FFF8F0]/30 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#F57C00]">
                        Testimonial #{idx + 1} {t.isSample ? '(Sample)' : '(Real)'}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setTestimonials(testimonials.filter((item) => item.id !== t.id));
                        }}
                        className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                        aria-label="Delete testimonial"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-[#222222] mb-1">Client Name</label>
                        <input
                          type="text"
                          value={t.clientName}
                          onChange={(e) => {
                            const updated = [...testimonials];
                            updated[idx].clientName = e.target.value;
                            updated[idx].avatarText = e.target.value.slice(0, 2).toUpperCase();
                            setTestimonials(updated);
                          }}
                          className="w-full px-3 py-1.5 text-xs border border-[#FFE8D1] rounded-lg bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-[#222222] mb-1">Role & Business</label>
                        <input
                          type="text"
                          value={t.business}
                          onChange={(e) => {
                            const updated = [...testimonials];
                            updated[idx].business = e.target.value;
                            setTestimonials(updated);
                          }}
                          className="w-full px-3 py-1.5 text-xs border border-[#FFE8D1] rounded-lg bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-[#222222] mb-1">Country</label>
                        <input
                          type="text"
                          value={t.country}
                          onChange={(e) => {
                            const updated = [...testimonials];
                            updated[idx].country = e.target.value;
                            setTestimonials(updated);
                          }}
                          className="w-full px-3 py-1.5 text-xs border border-[#FFE8D1] rounded-lg bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#222222] mb-1">Feedback Quote</label>
                      <textarea
                        rows={3}
                        value={t.content}
                        onChange={(e) => {
                          const updated = [...testimonials];
                          updated[idx].content = e.target.value;
                          updated[idx].isSample = false;
                          setTestimonials(updated);
                        }}
                        className="w-full px-3 py-1.5 text-xs border border-[#FFE8D1] rounded-lg bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PORTFOLIO */}
          {activeTab === 'portfolio' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#6B6B6B]">
                  Edit existing samples or add new client case studies.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const newProj: PortfolioItem = {
                      id: `p_${Date.now()}`,
                      title: 'New Client Showcase',
                      category: 'Social Media',
                      shortDescription: 'Brief description of project deliverables and achievements.',
                      fullDescription: 'Full breakdown of the project strategy, execution, and client impact.',
                      tools: ['Canva Pro', 'ChatGPT'],
                      image: '/src/assets/images/portfolio_social_design_1791242039595.jpg',
                      deliverables: ['Custom templates', 'Scheduled posts'],
                      resultsOrImpact: '+50% engagement increase',
                      clientType: 'E-commerce Brand',
                    };
                    setPortfolio([newProj, ...portfolio]);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FFF8F0] text-[#F57C00] hover:bg-[#FFE8D1] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </div>

              <div className="space-y-4">
                {portfolio.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-2xl border border-[#FFE8D1] bg-[#FFF8F0]/20 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#222222]">
                        {idx + 1}. {proj.title}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setPortfolio(portfolio.filter((item) => item.id !== proj.id));
                        }}
                        className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                        aria-label="Delete project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-[#222222] mb-1">Title</label>
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => {
                            const updated = [...portfolio];
                            updated[idx].title = e.target.value;
                            setPortfolio(updated);
                          }}
                          className="w-full px-3 py-1.5 text-xs border border-[#FFE8D1] rounded-lg bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-[#222222] mb-1">Category</label>
                        <select
                          value={proj.category}
                          onChange={(e) => {
                            const updated = [...portfolio];
                            updated[idx].category = e.target.value as any;
                            setPortfolio(updated);
                          }}
                          className="w-full px-3 py-1.5 text-xs border border-[#FFE8D1] rounded-lg bg-white"
                        >
                          <option value="Social Media">Social Media</option>
                          <option value="Graphic Design">Graphic Design</option>
                          <option value="Content Creation">Content Creation</option>
                          <option value="Virtual Assistance">Virtual Assistance</option>
                          <option value="Data Entry">Data Entry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#222222] mb-1">Short Description</label>
                      <input
                        type="text"
                        value={proj.shortDescription}
                        onChange={(e) => {
                          const updated = [...portfolio];
                          updated[idx].shortDescription = e.target.value;
                          setPortfolio(updated);
                        }}
                        className="w-full px-3 py-1.5 text-xs border border-[#FFE8D1] rounded-lg bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#222222] mb-1">Results or Impact</label>
                      <input
                        type="text"
                        value={proj.resultsOrImpact}
                        onChange={(e) => {
                          const updated = [...portfolio];
                          updated[idx].resultsOrImpact = e.target.value;
                          setPortfolio(updated);
                        }}
                        className="w-full px-3 py-1.5 text-xs border border-[#FFE8D1] rounded-lg bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <p className="text-xs text-[#6B6B6B]">
                Fine-tune service descriptions and bullet points to match your current offerings.
              </p>
              {services.map((srv, idx) => (
                <div key={srv.id} className="p-4 rounded-2xl border border-[#FFE8D1] bg-white space-y-2">
                  <div className="text-xs font-bold text-[#F57C00]">
                    {srv.number}. {srv.title}
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#222222] mb-1">Tagline</label>
                    <input
                      type="text"
                      value={srv.tagline}
                      onChange={(e) => {
                        const updated = [...services];
                        updated[idx].tagline = e.target.value;
                        setServices(updated);
                      }}
                      className="w-full px-3 py-1.5 text-xs border border-[#FFE8D1] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#222222] mb-1">Description</label>
                    <textarea
                      rows={2}
                      value={srv.description}
                      onChange={(e) => {
                        const updated = [...services];
                        updated[idx].description = e.target.value;
                        setServices(updated);
                      }}
                      className="w-full px-3 py-1.5 text-xs border border-[#FFE8D1] rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: SECURITY & PASSCODE */}
          {activeTab === 'security' && (
            <div className="space-y-6 max-w-lg">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Owner Protection Active</span>
                </div>
                <p className="text-[11px] text-emerald-700 leading-relaxed">
                  Only you can edit this portfolio website. For all other visitors, potential clients, and recruiters, the site is 100% read-only and no edit buttons are shown.
                </p>
              </div>

              <form onSubmit={handleChangePasscode} className="space-y-3">
                <h4 className="text-xs font-bold text-[#222222] uppercase tracking-wider">
                  Change Your Secret Owner Passcode
                </h4>
                <p className="text-xs text-[#6B6B6B]">
                  Update your private passcode to keep your portfolio protected.
                </p>

                {passcodeSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Your owner passcode has been updated!</span>
                  </div>
                )}

                <div className="flex gap-2">
                  <input
                    type="password"
                    required
                    minLength={4}
                    value={newPasscode}
                    onChange={(e) => setNewPasscode(e.target.value)}
                    placeholder="Enter new owner passcode (min 4 chars)"
                    className="flex-1 px-3.5 py-2 text-xs border border-[#FFE8D1] rounded-xl outline-hidden focus:border-[#F57C00]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#F57C00] hover:bg-[#e06f00] rounded-xl transition-colors cursor-pointer"
                  >
                    Update Passcode
                  </button>
                </div>
              </form>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold text-[#222222] uppercase tracking-wider">
                  How to Access the Editor Anytime:
                </h4>
                <ul className="text-xs text-[#6B6B6B] space-y-1.5 list-disc pl-4">
                  <li>Press <code className="bg-[#FFF8F0] px-1 py-0.5 rounded border border-[#FFE8D1] font-mono text-[#F57C00]">Ctrl + Shift + E</code> (or <code className="bg-[#FFF8F0] px-1 py-0.5 rounded border border-[#FFE8D1] font-mono text-[#F57C00]">Cmd + Shift + E</code> on Mac).</li>
                  <li>Click <strong>Owner Portal</strong> in the footer.</li>
                  <li>Enter your owner passcode to unlock editing.</li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    lockEditor();
                    onClose();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Lock Editor & Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-[#FFE8D1] bg-[#FFF8F0]/30 gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExportJSON}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#222222] hover:bg-white rounded-lg transition-colors border border-[#FFE8D1] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#F57C00]" />
              <span>Backup Data (JSON)</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Reset all changes back to original defaults?')) {
                  resetToDefaults();
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#6B6B6B] hover:text-[#222222] rounded-xl cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                handleSave();
                onClose();
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#F57C00] hover:bg-[#e06f00] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Save & Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
