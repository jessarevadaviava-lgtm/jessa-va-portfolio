import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ServiceItem,
  SkillItem,
  PortfolioItem,
  ProcessStep,
  TestimonialItem,
} from '../types.ts';
import {
  SERVICES_DATA,
  SKILLS_DATA,
  PORTFOLIO_DATA,
  PROCESS_DATA,
  TESTIMONIALS_DATA,
  JESSA_PORTRAIT,
} from '../data/portfolioData.ts';

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  headline: string;
  subheadline: string;
  location: string;
  timezone: string;
  email: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  portraitUrl: string;
  stats: {
    hoursSaved: string;
    onTimeRate: string;
    remoteReady: string;
    turnaround: string;
  };
}

export interface AboutData {
  title: string;
  bio1: string;
  bio2: string;
  attributes: { title: string; desc: string }[];
  whyWorkWithMe: { title: string; desc: string; bullet: string }[];
}

interface PortfolioContextType {
  isOwnerAuthenticated: boolean;
  setIsOwnerAuthenticated: (val: boolean) => void;
  verifyPasscode: (code: string) => boolean;
  changePasscode: (newPasscode: string) => void;
  lockEditor: () => void;
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
  about: AboutData;
  setAbout: React.Dispatch<React.SetStateAction<AboutData>>;
  services: ServiceItem[];
  setServices: React.Dispatch<React.SetStateAction<ServiceItem[]>>;
  skills: SkillItem[];
  setSkills: React.Dispatch<React.SetStateAction<SkillItem[]>>;
  portfolio: PortfolioItem[];
  setPortfolio: React.Dispatch<React.SetStateAction<PortfolioItem[]>>;
  processSteps: ProcessStep[];
  setProcessSteps: React.Dispatch<React.SetStateAction<ProcessStep[]>>;
  testimonials: TestimonialItem[];
  setTestimonials: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;
  saveAll: () => void;
  resetToDefaults: () => void;
  hasCustomEdits: boolean;
}

const STORAGE_KEY = 'jessa_portfolio_custom_data_v1';
const PASSCODE_KEY = 'jessa_portfolio_owner_passcode';
const AUTH_SESSION_KEY = 'jessa_portfolio_owner_auth_session';
const DEFAULT_PASSCODE = 'jessa2026';

const defaultProfile: ProfileData = {
  name: 'Jessa Revadavia',
  role: 'AI-Powered Virtual Assistant',
  tagline: 'Social Media · Design · Admin · AI Support',
  headline: 'Your Reliable AI-Powered Virtual Assistant',
  subheadline:
    'I help busy entrepreneurs save time, stay organized, and build a stronger online presence through smart, creative, and reliable virtual assistance.',
  location: 'Philippines',
  timezone: 'GMT+8 (Flexible US/AU/UK overlap)',
  email: 'jessarevadavia1@gmail.com',
  facebookUrl: 'https://facebook.com',
  instagramUrl: 'https://instagram.com',
  linkedinUrl: 'https://linkedin.com',
  portraitUrl: JESSA_PORTRAIT,
  stats: {
    hoursSaved: '40+ Hrs',
    onTimeRate: '99%',
    remoteReady: '100%',
    turnaround: 'AI-Speed',
  },
};

const defaultAbout: AboutData = {
  title: 'Hi, I’m Jessa.',
  bio1: 'I am an AI-powered Virtual Assistant based in the Philippines, working with female entrepreneurs, creators, coaches, and growing businesses worldwide. I specialize in taking repetitive, time-consuming tasks off your plate—from designing aesthetic social media carousels and writing engaging content to organizing complex spreadsheets, managing files, and performing thorough research.',
  bio2: 'By combining proactive virtual assistance with modern AI workflows (ChatGPT, Claude, and smart automations), I help you produce higher quality output in a fraction of the time. My goal is simple: give you back your hours so you can focus on serving your clients and scaling your vision.',
  attributes: [
    { title: 'Remote-ready', desc: 'Seamless asynchronous collaboration via Slack, Zoom, and Notion.' },
    { title: 'Detail-oriented', desc: 'Meticulous eye for formatting, typos, spacing, and brand specs.' },
    { title: 'Organized', desc: 'Structured digital filing systems, clear checklists, and clean folders.' },
    { title: 'Creative', desc: 'Fresh aesthetic visual sense tailored for modern social feeds.' },
    { title: 'Fast learner', desc: 'Rapidly absorbs new client tools, brand styles, and custom SOPs.' },
    { title: 'AI-assisted workflow', desc: 'Leverages cutting-edge AI for faster ideation and synthesis.' },
    { title: 'Reliable communication', desc: 'Proactive status recaps, clear check-ins, and zero ghosting.' },
  ],
  whyWorkWithMe: [
    {
      title: 'Reliable',
      desc: 'You can count on dependable execution every single day. I respect your deadlines, communicate proactively, and treat your business goals with the dedication they deserve.',
      bullet: 'Consistent availability & daily/weekly check-ins',
    },
    {
      title: 'Creative',
      desc: 'I bring an intuitive eye for aesthetics, balanced color palettes, and engaging hooks that capture attention while staying strictly aligned with your signature brand identity.',
      bullet: 'Modern aesthetic sense for female & creative brands',
    },
    {
      title: 'Organized',
      desc: 'Messy spreadsheets and cluttered inboxes are turned into clear, structured, and easy-to-navigate systems. I eliminate operational friction so you can focus on big-picture growth.',
      bullet: 'Logical filing, deduplicated data & clear SOPs',
    },
    {
      title: 'AI-Powered',
      desc: 'By integrating advanced AI tools into drafting, research, and data structuring, I deliver work faster and more cost-effectively—always perfected by human insight and quality control.',
      bullet: '5x faster ideation without compromising standards',
    },
  ],
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOwnerAuthenticated, setIsOwnerAuthenticated] = useState<boolean>(false);
  const [hasCustomEdits, setHasCustomEdits] = useState<boolean>(false);

  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [about, setAbout] = useState<AboutData>(defaultAbout);
  const [services, setServices] = useState<ServiceItem[]>(SERVICES_DATA);
  const [skills, setSkills] = useState<SkillItem[]>(SKILLS_DATA);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(PORTFOLIO_DATA);
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>(PROCESS_DATA);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(TESTIMONIALS_DATA);

  // Check saved session & stored modifications on initial render
  useEffect(() => {
    try {
      const isAuth = sessionStorage.getItem(AUTH_SESSION_KEY);
      if (isAuth === 'true') {
        setIsOwnerAuthenticated(true);
      }

      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.profile) setProfile(parsed.profile);
        if (parsed.about) setAbout(parsed.about);
        if (parsed.services) setServices(parsed.services);
        if (parsed.skills) setSkills(parsed.skills);
        if (parsed.portfolio) setPortfolio(parsed.portfolio);
        if (parsed.processSteps) setProcessSteps(parsed.processSteps);
        if (parsed.testimonials) setTestimonials(parsed.testimonials);
        setHasCustomEdits(true);
      }
    } catch (e) {
      console.error('Failed to load portfolio storage', e);
    }
  }, []);

  const verifyPasscode = (inputCode: string): boolean => {
    const savedPasscode = localStorage.getItem(PASSCODE_KEY) || DEFAULT_PASSCODE;
    if (inputCode.trim() === savedPasscode.trim()) {
      setIsOwnerAuthenticated(true);
      sessionStorage.setItem(AUTH_SESSION_KEY, 'true');
      return true;
    }
    return false;
  };

  const changePasscode = (newPasscode: string) => {
    if (newPasscode.trim().length >= 4) {
      localStorage.setItem(PASSCODE_KEY, newPasscode.trim());
    }
  };

  const lockEditor = () => {
    setIsOwnerAuthenticated(false);
    sessionStorage.removeItem(AUTH_SESSION_KEY);
  };

  const saveAll = () => {
    try {
      const stateToSave = {
        profile,
        about,
        services,
        skills,
        portfolio,
        processSteps,
        testimonials,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
      setHasCustomEdits(true);
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProfile(defaultProfile);
    setAbout(defaultAbout);
    setServices(SERVICES_DATA);
    setSkills(SKILLS_DATA);
    setPortfolio(PORTFOLIO_DATA);
    setProcessSteps(PROCESS_DATA);
    setTestimonials(TESTIMONIALS_DATA);
    setHasCustomEdits(false);
  };

  return (
    <PortfolioContext.Provider
      value={{
        isOwnerAuthenticated,
        setIsOwnerAuthenticated,
        verifyPasscode,
        changePasscode,
        lockEditor,
        profile,
        setProfile,
        about,
        setAbout,
        services,
        setServices,
        skills,
        setSkills,
        portfolio,
        setPortfolio,
        processSteps,
        setProcessSteps,
        testimonials,
        setTestimonials,
        saveAll,
        resetToDefaults,
        hasCustomEdits,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
