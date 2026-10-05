import React, { useState } from 'react';
import {
  Mail,
  Send,
  Linkedin,
  Instagram,
  Facebook,
  CheckCircle2,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext.tsx';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService = '',
}) => {
  const { profile } = usePortfolio();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(preselectedService || 'Social Media Management');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!message.trim()) {
      setErrorMessage('Please write a brief message about your project or needs.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 lg:py-28 bg-[#FFF8F0]/40 border-t border-[#FFE8D1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Social Proof */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold text-[#F57C00] uppercase tracking-wider mb-2">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#222222]">
                Ready to Get More Done?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
                Let’s take repetitive tasks off your plate so you can focus on growing your business.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#FFE8D1]/80 hover:border-[#F57C00]/40 transition-colors shadow-2xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFE8D1]/60 text-[#F57C00] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#6B6B6B]">Direct Email</div>
                  <div className="text-sm font-bold text-[#222222]">{profile.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#FFE8D1]/80 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#FFE8D1]/60 text-[#F57C00] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#6B6B6B]">Working Hours & Response Time</div>
                  <div className="text-sm font-bold text-[#222222]">
                    Mon – Fri · {profile.timezone}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#222222] mb-3">
                Connect on Social Media
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={profile.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-xl bg-white border border-[#FFE8D1] hover:border-[#F57C00] text-[#222222] hover:text-[#F57C00] flex items-center justify-center transition-all shadow-2xs"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-xl bg-white border border-[#FFE8D1] hover:border-[#F57C00] text-[#222222] hover:text-[#F57C00] flex items-center justify-center transition-all shadow-2xs"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl bg-white border border-[#FFE8D1] hover:border-[#F57C00] text-[#222222] hover:text-[#F57C00] flex items-center justify-center transition-all shadow-2xs"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#FFE8D1] shadow-xl shadow-black/5">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#222222]">Inquiry Received!</h3>
                  <p className="text-sm text-[#6B6B6B] max-w-md mx-auto">
                    Thank you for reaching out, <span className="font-semibold text-[#222222]">{name}</span>.
                    I have received your message and will review your project details shortly.
                    Expect a reply within 24 hours at <span className="font-semibold text-[#222222]">{email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setCompany('');
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#FFF8F0] hover:bg-[#FFE8D1] text-xs font-semibold text-[#222222] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-[#222222]">
                      Send an Inquiry
                    </h3>
                    <p className="text-xs text-[#6B6B6B] mt-1">
                      Fill out the form below and let’s discuss how I can support your business.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-[#222222] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl border border-[#FFE8D1] focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 text-xs sm:text-sm text-[#222222] placeholder:text-[#6B6B6B]/60 outline-hidden transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#222222] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@yourbrand.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#FFE8D1] focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 text-xs sm:text-sm text-[#222222] placeholder:text-[#6B6B6B]/60 outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Business/Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-[#222222] mb-1.5">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Blossom Studio"
                        className="w-full px-4 py-3 rounded-xl border border-[#FFE8D1] focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 text-xs sm:text-sm text-[#222222] placeholder:text-[#6B6B6B]/60 outline-hidden transition-all"
                      />
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-[#222222] mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#FFE8D1] focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 text-xs sm:text-sm text-[#222222] bg-white outline-hidden transition-all"
                      >
                        <option value="Social Media Management">Social Media Management</option>
                        <option value="Graphic Design">Graphic Design & Carousels</option>
                        <option value="Content Creation">Content Creation & Scripts</option>
                        <option value="Data Entry">Data Entry & Spreadsheets</option>
                        <option value="Virtual Assistance">General Virtual Assistance</option>
                        <option value="Basic Research">Basic & Market Research</option>
                        <option value="AI-Assisted Services">AI-Assisted Workflows & Automations</option>
                        <option value="Monthly Retainer">Monthly Dedicated Retainer</option>
                        <option value="Custom Package">Custom Package</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#222222] mb-1.5">
                      How Can I Help You? *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me a bit about your business, current bottlenecks, and what you’d like to delegate..."
                      className="w-full px-4 py-3 rounded-xl border border-[#FFE8D1] focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 text-xs sm:text-sm text-[#222222] placeholder:text-[#6B6B6B]/60 outline-hidden transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#F57C00] hover:bg-[#e06f00] text-white text-sm font-semibold shadow-md shadow-[#F57C00]/20 transition-all duration-200 active:scale-[0.99] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Sending Inquiry...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
