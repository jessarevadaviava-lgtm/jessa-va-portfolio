import {
  ServiceItem,
  SkillItem,
  PortfolioItem,
  ProcessStep,
  TestimonialItem,
} from '../types.ts';

// High-resolution generated assets
export const JESSA_PORTRAIT = '/src/assets/images/jessa_portrait_1791242024327.jpg';
export const PORTFOLIO_SOCIAL_IMG = '/src/assets/images/portfolio_social_design_1791242039595.jpg';
export const PORTFOLIO_BRAND_IMG = '/src/assets/images/portfolio_brand_kit_1791242052777.jpg';
export const PORTFOLIO_WORKSPACE_IMG = '/src/assets/images/portfolio_workspace_data_1791242064573.jpg';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'smm',
    number: '01',
    title: 'Social Media Management',
    tagline: 'Build consistent, cohesive social presence without the daily stress.',
    description:
      'End-to-end management covering content planning, compelling captions, scheduling, proactive community engagement support, and basic monthly growth analytics.',
    features: [
      'Monthly & weekly content calendars',
      'Copywriting & caption formulation with relevant hashtags',
      'Automated scheduling via Meta Business Suite, Buffer, or Later',
      'Daily engagement & DM/comment moderation support',
      'Monthly performance insights & metric tracking',
    ],
    icon: 'Share2',
  },
  {
    id: 'graphic-design',
    number: '02',
    title: 'Graphic Design',
    tagline: 'Stunning, on-brand visuals tailored for your ideal audience.',
    description:
      'Polished social media graphics, high-converting carousels, promotional materials, banners, and branded visuals that maintain aesthetic consistency.',
    features: [
      'Multi-slide Instagram & LinkedIn carousels',
      'Promotional banners, flyers, and digital brochures',
      'YouTube & podcast cover thumbnails',
      'Stories, Pinterest pins, and highlight icons',
      'Brand style consistency across all graphics',
    ],
    icon: 'Palette',
  },
  {
    id: 'content-creation',
    number: '03',
    title: 'Content Creation',
    tagline: 'Engaging content ideas, hooks, and scripts ready for execution.',
    description:
      'Brainstorming trending topics, drafting scroll-stopping hooks, writing short-form video scripts (Reels/TikTok), and producing structured content calendars.',
    features: [
      'Niche-tailored content ideation & angle development',
      'High-retention hooks and story frameworks',
      'Short-form video scripts (30s–60s Reels & TikToks)',
      'Newsletter drafts and promotional email copy',
      'Full monthly content batching pipelines',
    ],
    icon: 'PenTool',
  },
  {
    id: 'data-entry',
    number: '04',
    title: 'Data Entry',
    tagline: 'Flawless accuracy, organized records, and zero spreadsheet headaches.',
    description:
      'Accurate data input, spreadsheet formatting, copy-paste tasks, CRM database updates, and regular record cleanup with strict attention to detail.',
    features: [
      'Clean data organization in Google Sheets & Excel',
      'CRM contact updates and lead list hygiene',
      'Invoice, receipt, and basic expense log tracking',
      'E-commerce product catalog updates & categorization',
      'Error checking and data deduplication',
    ],
    icon: 'Database',
  },
  {
    id: 'virtual-assistance',
    number: '05',
    title: 'Virtual Assistance',
    tagline: 'Reliable day-to-day administrative support to reclaim your focus.',
    description:
      'Comprehensive administrative assistance including email triage, calendar coordination, structured file organization, internet research, and general task management.',
    features: [
      'Inbox zero management & customer support replies',
      'Google Drive & Dropbox digital filing systems',
      'Meeting scheduling across multiple timezones',
      'Travel booking & itinerary coordination',
      'Daily task coordination on Asana, ClickUp, or Trello',
    ],
    icon: 'Briefcase',
  },
  {
    id: 'basic-research',
    number: '06',
    title: 'Basic Research',
    tagline: 'Thorough, structured data gathering so you can make informed decisions.',
    description:
      'Competitor audits, product research, market trends, supplier discovery, and synthesized summary reports presented in clean, digestible briefs.',
    features: [
      'Competitor content & pricing benchmarking',
      'Product sourcing and supplier price comparison',
      'Podcast guest, influencer, and affiliate lead lists',
      'Industry trend digests and audience sentiment tracking',
      'Executive summary memos with actionable insights',
    ],
    icon: 'Search',
  },
  {
    id: 'ai-assisted',
    number: '07',
    title: 'AI-Assisted Services',
    tagline: 'Leveraging smart AI models to 5x productivity and turnaround speed.',
    description:
      'AI-powered content ideation, automated research synthesis, workflow optimization, and productivity enhancements that pass quality human review.',
    features: [
      'AI prompt engineering tailored to your brand voice',
      'Rapid transcript summarization & content repurposing',
      'Automated repetitive task workflows (Zapier/Make)',
      'AI-assisted copy variation drafting and editing',
      'Fast turnaround without sacrificing human polish',
    ],
    icon: 'Sparkles',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'Social Media Management',
    category: 'Design & Creative',
    level: 95,
    experience: '3+ Years',
    description: 'Planning, scheduling, captions, and audience engagement across Meta, LinkedIn, and Instagram.',
  },
  {
    name: 'Canva Pro & Visual Design',
    category: 'Design & Creative',
    level: 96,
    experience: '3+ Years',
    description: 'Creating high-converting carousels, brand kits, marketing collateral, and social assets.',
  },
  {
    name: 'Graphic Design Principles',
    category: 'Design & Creative',
    level: 90,
    experience: '2.5 Years',
    description: 'Visual balance, color theory, typography pairing, and strict brand identity guidelines.',
  },
  {
    name: 'Content Writing & Copywriting',
    category: 'Design & Creative',
    level: 92,
    experience: '3 Years',
    description: 'Engaging captions, high-converting hooks, email newsletters, and blog outlines.',
  },
  {
    name: 'CapCut Video Editing',
    category: 'Design & Creative',
    level: 88,
    experience: '2 Years',
    description: 'Dynamic captions, cuts, transitions, and audio sync for viral Reels & TikToks.',
  },
  {
    name: 'Data Entry & Spreadsheet Mastery',
    category: 'Admin & Operations',
    level: 98,
    experience: '4 Years',
    description: 'VLOOKUP, Pivot tables, data validation, CRM updating, and zero-error logging.',
  },
  {
    name: 'Google Workspace',
    category: 'Admin & Operations',
    level: 96,
    experience: '4 Years',
    description: 'Docs, Sheets, Slides, Drive, Forms, Gmail, Calendar, and structured file architecture.',
  },
  {
    name: 'Microsoft Office 365',
    category: 'Admin & Operations',
    level: 94,
    experience: '4 Years',
    description: 'Excel formatting, Word document styling, PowerPoint decks, and OneDrive.',
  },
  {
    name: 'File Management & Organization',
    category: 'Admin & Operations',
    level: 97,
    experience: '4 Years',
    description: 'Logical folder structures, consistent file naming conventions, and archival hygiene.',
  },
  {
    name: 'Basic & Competitive Research',
    category: 'Admin & Operations',
    level: 92,
    experience: '3 Years',
    description: 'Deep web research, supplier comparison, market trends, and formatted executive summaries.',
  },
  {
    name: 'ChatGPT & Prompt Engineering',
    category: 'AI & Tech',
    level: 95,
    experience: '2 Years',
    description: 'Custom system prompts, content repurposing, brand tone alignment, and research extraction.',
  },
  {
    name: 'AI Tools & Automation',
    category: 'AI & Tech',
    level: 90,
    experience: '2 Years',
    description: 'Claude, Perplexity, Midjourney/Image tools, Notion AI, and Make/Zapier workflow automations.',
  },
  {
    name: 'Reliable Remote Communication',
    category: 'Core Strengths',
    level: 98,
    experience: 'Ongoing',
    description: 'Proactive Slack updates, Loom video walkthroughs, and clear weekly progress recaps.',
  },
  {
    name: 'Organization & Time Management',
    category: 'Core Strengths',
    level: 99,
    experience: 'Ongoing',
    description: 'Strict deadline adherence, priority matrix handling, and autonomous execution.',
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Minimalist Wellness Carousel Series',
    category: 'Graphic Design',
    shortDescription: '10-slide educational Instagram carousel with high-contrast typography and subtle textures.',
    fullDescription:
      'Designed a multi-part carousel campaign for an organic wellness brand. Focused on breaking down complex nutritional advice into easily digestible visual steps with engaging swipe-through cues.',
    tools: ['Canva Pro', 'ChatGPT (Hook Ideation)', 'Adobe Express'],
    image: PORTFOLIO_SOCIAL_IMG,
    deliverables: [
      '5 Complete 10-slide Instagram carousels',
      'Matching Story highlight graphics',
      'Engaging caption scripts and call-to-actions',
    ],
    resultsOrImpact: 'Increased average post saves by +140% and generated 340+ organic profile visits in 14 days.',
    clientType: 'Holistic Health & Wellness Brand',
  },
  {
    id: 'p2',
    title: 'SaaS Launch Facebook Promotional Posts',
    category: 'Social Media',
    shortDescription: 'Conversion-focused promotional ad creatives and organic announcement banners.',
    fullDescription:
      'Created cohesive announcement visuals, feature spotlight graphics, and discount promotions for a boutique CRM tool launch, ensuring uniform visual hierarchy and high readability on mobile devices.',
    tools: ['Canva', 'Meta Business Suite', 'ChatGPT'],
    image: PORTFOLIO_BRAND_IMG,
    deliverables: [
      '12 Promotional feed graphics (1080x1080)',
      '6 Story promos (1080x1920)',
      'Pre-written promotional captions with tracked UTM links',
    ],
    resultsOrImpact: 'Contributed to 210 beta signups during the launch week with a 3.8% click-through rate.',
    clientType: 'B2B SaaS Startup',
  },
  {
    id: 'p3',
    title: '30-Day Omnichannel Content Calendar',
    category: 'Content Creation',
    shortDescription: 'Structured master content schedule spanning Instagram, LinkedIn, and email newsletter.',
    fullDescription:
      'Developed a comprehensive editorial planner organizing 30 days of high-value content categorized by content pillars: Educational, Social Proof, Behind-the-Scenes, and Conversion.',
    tools: ['Google Sheets', 'Notion', 'ChatGPT'],
    image: PORTFOLIO_WORKSPACE_IMG,
    deliverables: [
      'Color-coded master schedule with publication dates',
      'Ready-to-use captions, media links, and hashtags',
      'Repurposing map converting 1 long-form topic into 5 bite-sized posts',
    ],
    resultsOrImpact: 'Eliminated daily posting overwhelm, saving the founder 12 hours every week in planning time.',
    clientType: 'Executive Business Coach',
  },
  {
    id: 'p4',
    title: 'Reels Concepts & Short-Form Video Scripts',
    category: 'Content Creation',
    shortDescription: 'Storyboards, dynamic hook variations, and audio-synced video production outlines.',
    fullDescription:
      'Scripted 15 high-retention 30-second video concepts for a personal finance creator, integrating pattern interrupts, on-screen text overlays, and clear b-roll suggestions.',
    tools: ['CapCut', 'ChatGPT', 'Notion'],
    image: PORTFOLIO_SOCIAL_IMG,
    deliverables: [
      '15 Word-for-word short video scripts with timing cues',
      'Curated list of 20 trending audio links for commercial use',
      'CapCut project templates with clean animated captions',
    ],
    resultsOrImpact: 'Three reels surpassed 45,000 organic views and grew follower base by +1,200 targeted users.',
    clientType: 'Personal Finance Creator',
  },
  {
    id: 'p5',
    title: 'Aesthetic Brand Canva Design Collection',
    category: 'Graphic Design',
    shortDescription: 'Complete social media template kit built in Canva for effortless daily publishing.',
    fullDescription:
      'Crafted 40+ reusable Canva templates tailored to the client brand style: quote cards, client testimonials, podcast promotions, newsletter previews, and notification mockups.',
    tools: ['Canva Pro', 'Typography System', 'Color Palette Generator'],
    image: PORTFOLIO_BRAND_IMG,
    deliverables: [
      '40 Reusable Canva Pro templates with unlocked elements',
      'User guide on editing colors, photos, and fonts',
      'Curated stock photography board matching brand palette',
    ],
    resultsOrImpact: 'Enabled the client’s internal team to create on-brand assets in under 5 minutes per graphic.',
    clientType: 'Boutique Skincare Studio',
  },
  {
    id: 'p6',
    title: 'Brand Kits & Visual Aesthetic Guidelines',
    category: 'Graphic Design',
    shortDescription: 'Comprehensive visual identity system including color codes, fonts, and mood boards.',
    fullDescription:
      'Established a polished visual identity for a consulting firm, specifying primary and secondary palettes, typographic hierarchy, photography art direction, and icon sets.',
    tools: ['Canva', 'Coolors', 'Notion Documentation'],
    image: PORTFOLIO_BRAND_IMG,
    deliverables: [
      'Brand Kit PDF Guidebook (16 pages)',
      'Hex, RGB, and CMYK color specification sheets',
      'Font pairings with Google Fonts alternatives',
      'Logo usage dos and don’ts',
    ],
    resultsOrImpact: 'Standardized client branding across slide decks, website, and social channels seamlessly.',
    clientType: 'Management Consulting Firm',
  },
  {
    id: 'p7',
    title: 'Clean CRM Lead Tracker & Inventory System',
    category: 'Data Entry',
    shortDescription: 'Dynamic Google Sheets database with data validation, conditional formatting, and dashboard.',
    fullDescription:
      'Cleaned, normalized, and restructured 4,500+ customer records from scattered CSVs into a centralized Google Sheets CRM with automated status color-coding and automated follow-up reminders.',
    tools: ['Google Sheets', 'Advanced Formulas', 'Data Validation', 'Google Forms'],
    image: PORTFOLIO_WORKSPACE_IMG,
    deliverables: [
      'Centralized CRM spreadsheet with 100% deduplicated rows',
      'Automated sales pipeline dashboard with conversion metrics',
      'SOP document detailing daily update protocols',
    ],
    resultsOrImpact: 'Reduced lead search time from 8 minutes to 15 seconds; zero record errors over 6 months.',
    clientType: 'Online Retailer & Wholesaler',
  },
  {
    id: 'p8',
    title: 'Competitor & Market Research Benchmark Report',
    category: 'Virtual Assistance',
    shortDescription: 'In-depth market intelligence brief analyzing 8 key industry competitors.',
    fullDescription:
      'Conducted rigorous research covering competitor pricing tiers, primary marketing channels, content engagement rates, and customer pain points sourced from review sites and Reddit communities.',
    tools: ['Google Docs', 'Deep Web Research', 'Google Sheets'],
    image: PORTFOLIO_WORKSPACE_IMG,
    deliverables: [
      '18-Page comprehensive market intelligence report',
      'Competitor feature comparison matrix spreadsheet',
      'Top 5 strategic product positioning opportunities',
    ],
    resultsOrImpact: 'Provided the foundational research that guided the client’s Q3 pricing and packaging overhaul.',
    clientType: 'Subscription Box Brand',
  },
  {
    id: 'p9',
    title: '30-Day Social Media Growth Strategy',
    category: 'Social Media',
    shortDescription: 'Actionable organic distribution and community engagement roadmap.',
    fullDescription:
      'Engineered an organic engagement workflow targeting active accounts in the client’s niche, scheduling 5 value posts weekly and conducting 20 minutes of daily meaningful outbound comments.',
    tools: ['Notion', 'Metricool', 'Canva'],
    image: PORTFOLIO_SOCIAL_IMG,
    deliverables: [
      '30-Day strategic milestone roadmap',
      'Weekly engagement checklist (outbound & inbound)',
      'Weekly analytics recap template measuring follower growth & DM leads',
    ],
    resultsOrImpact: '+86% increase in inbound DM inquiries for the client’s 1-on-1 coaching program in month one.',
    clientType: 'Career Strategist & Coach',
  },
  {
    id: 'p10',
    title: 'AI-Assisted Content Production Workflow',
    category: 'Virtual Assistance',
    shortDescription: 'Human-in-the-loop AI pipeline repurposing 1 podcast episode into 12 distinct assets.',
    fullDescription:
      'Designed and executed a semi-automated content pipeline: transcribing raw podcast audio, generating multi-platform outlines using customized ChatGPT prompts, and hand-crafting final visuals in Canva.',
    tools: ['ChatGPT-4o', 'Claude', 'Google Drive', 'Canva'],
    image: PORTFOLIO_WORKSPACE_IMG,
    deliverables: [
      'Automated transcription & summarization protocol',
      '1 Long-form LinkedIn newsletter draft',
      '3 Carousel scripts and 5 Twitter/X threads',
      'Complete SOP manual for scalable content repurposing',
    ],
    resultsOrImpact: 'Cut content production turnaround from 14 hours down to 3.5 hours per episode.',
    clientType: 'Podcaster & Agency Owner',
  },
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Understand your unique vision and daily bottlenecks',
    description:
      'We begin with a brief onboarding questionnaire or kickoff chat to dive deep into your business goals, target audience, brand voice, software stack, and immediate priorities.',
    activities: [
      'Review existing brand assets & guidelines',
      'Identify time-draining tasks to delegate immediately',
      'Establish preferred communication channels & working rhythms',
    ],
    duration: 'Day 1–2',
  },
  {
    step: '02',
    title: 'Plan',
    subtitle: 'Structure the roadmap and project deliverables',
    description:
      'I formulate a clear action plan with transparent task boards, realistic timelines, and clear checkpoints so you always know exactly what is happening and when.',
    activities: [
      'Organize shared Google Drive folders and task boards (Trello/Asana)',
      'Set weekly deliverable deadlines and milestones',
      'Configure templates, access permissions, and SOPs',
    ],
    duration: 'Day 2–3',
  },
  {
    step: '03',
    title: 'Create',
    subtitle: 'Produce high-quality creative and administrative output',
    description:
      'I get straight to work producing polished graphics, drafting compelling copy, executing data entry, conducting research, and managing daily administrative workflows with autonomous care.',
    activities: [
      'Design on-brand graphics and schedule posts ahead of time',
      'Perform accurate data entry and maintain pristine spreadsheets',
      'Utilize AI tools to accelerate ideation while applying strict human quality checks',
    ],
    duration: 'Active Execution',
  },
  {
    step: '04',
    title: 'Deliver',
    subtitle: 'Submit organized work, iterate, and provide updates',
    description:
      'You receive tidy deliverables with Loom video walkthroughs when needed. I implement any requested revisions promptly and provide proactive weekly status recaps.',
    activities: [
      'Submit organized deliverables ahead of deadlines',
      'Accommodate prompt iterations and feedback',
      'Deliver weekly summary reports highlighting accomplishments and next steps',
    ],
    duration: 'Ongoing & Reliable',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    clientName: 'Chloe Henderson',
    role: 'Founder & Creative Director',
    business: 'Aura Living Studios',
    country: 'Australia',
    rating: 5,
    content:
      '“Jessa has been a complete game changer for our brand! Our Instagram was neglected for months because I was drowned in client work. Within two weeks of bringing Jessa on board, our feed looked like a luxury editorial magazine and our saves shot through the roof. She is prompt, receptive, and incredibly organized.”',
    avatarText: 'CH',
    isSample: true,
  },
  {
    id: 't2',
    clientName: 'Marcus Vance',
    role: 'Managing Partner',
    business: 'Vance Capital & Advisory',
    country: 'United States',
    rating: 5,
    content:
      '“Finding a virtual assistant who understands both administrative precision and modern AI tools is rare. Jessa cleaned up our messy CRM of 4,000+ leads without a single duplicate and delivered thorough competitor reports. Her communication is crystal clear and she always meets deadlines.”',
    avatarText: 'MV',
    isSample: true,
  },
  {
    id: 't3',
    clientName: 'Sophie Bennett',
    role: 'Mindset & Business Mentor',
    business: 'Elevate Coaching Co.',
    country: 'United Kingdom',
    rating: 5,
    content:
      '“Working with Jessa feels effortless. She drafts my weekly newsletters, designs beautiful carousels in Canva, and repurposes my podcast episodes into bite-sized content with AI assistance. She saves me at least 15 hours every single week. I couldn’t run my business without her!”',
    avatarText: 'SB',
    isSample: true,
  },
];
