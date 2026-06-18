import {
  FileSearch,
  ShieldCheck,
  ScanSearch,
  Globe2,
  BarChart3,
  BookOpen,
  User,
  Building2,
  FlaskConical,
  Scale,
  Network,
} from 'lucide-react';
import type {
  Service,
  ExpertiseDomain,
  ProcessStep,
  ClientType,
  NavLink,
  ContactInfo,
} from '@/types';

export const SITE_NAME = 'Vicky Infotech';
export const SITE_TAGLINE = 'Prior Art Search | Patentability Assessment | Cross-Domain Patent Research';
export const SITE_DESCRIPTION =
  'Expert prior art search services for technology-driven inventions. Led by Vipin Kumar, Registered Patent Agent with 18+ years of experience in computer science, electronics, AI, and cross-domain patent research.';

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const CONTACT: ContactInfo = {
  email: 'kumar.vipin1980@gmail.com',
  phone: '+91 77092 69318',
  address: {
    line1: 'Shop No. 2, Plot No. 105',
    line2: 'Narayan Vihar, Sikandra',
    city: 'Agra',
    state: 'Uttar Pradesh',
    country: 'India',
    pin: '282007',
  },
};

export const STATS = [
  { value: '18+', label: 'Years of Patent Experience' },
  { value: '120M+', label: 'Patent Documents Accessed' },
  { value: '2008', label: 'Registered Patent Agent Since' },
] as const;

export const SERVICES: Service[] = [
  {
    id: 'prior-art',
    number: '01',
    title: 'Prior Art Searches',
    description:
      'Identify existing patent and non-patent references relevant to an invention before filing or strategy decisions. Comprehensive research across global patent publications.',
    Icon: ScanSearch,
  },
  {
    id: 'patentability',
    number: '02',
    title: 'Patentability Searches',
    description:
      'Assess whether an invention appears novel and inventive in view of available technical disclosures. Evaluate novelty, inventive step, and industrial applicability.',
    Icon: ShieldCheck,
  },
  {
    id: 'invalidation',
    number: '03',
    title: 'Invalidation & Opposition Searches',
    description:
      'Locate strong references that may support patent challenge, opposition, or litigation-related analysis. Strategic research for IP disputes and enforcement.',
    Icon: Scale,
  },
  {
    id: 'fto',
    number: '04',
    title: 'Freedom-to-Operate Support',
    description:
      'Assist in identifying patent documents that may be relevant before launching or commercializing a technology. Reduce risk before market entry.',
    Icon: Globe2,
  },
  {
    id: 'landscape',
    number: '05',
    title: 'Patent Landscape Studies',
    description:
      'Map technology trends, key players, filing patterns, and innovation activity in a technical field. Strategic intelligence for R&D and business decisions.',
    Icon: BarChart3,
  },
  {
    id: 'technical-analysis',
    number: '06',
    title: 'Technical Reference Analysis',
    description:
      'Review patent documents and explain their relevance in clear technical language. Structured analysis of novelty, claim mapping, and technical comparison.',
    Icon: FileSearch,
  },
];

export const EXPERTISE_DOMAINS: ExpertiseDomain[] = [
  {
    domain: 'Software & Algorithms',
    topics: [
      'Algorithms & Data Structures',
      'Compiler Design',
      'Graph Theory',
      'Theory of Computation',
      'Software Architecture',
      'Database Management',
    ],
  },
  {
    domain: 'Hardware & Embedded Systems',
    topics: [
      'Computer Architecture',
      'Digital Hardware Design',
      'Microprocessors',
      'Embedded Systems',
      'System Engineering',
      'Electronics Interfaces',
    ],
  },
  {
    domain: 'Systems & Infrastructure',
    topics: [
      'Operating Systems',
      'File Structures',
      'Cloud Systems',
      'Information System Design',
      'Distributed Systems',
      'Virtualization',
    ],
  },
  {
    domain: 'Networks & Communication',
    topics: [
      'Computer Networks',
      'Communication Technologies',
      'Wireless Systems',
      'Internet of Things (IoT)',
      'Communication Protocols',
      'Signal Processing',
    ],
  },
  {
    domain: 'AI & Intelligent Systems',
    topics: [
      'Artificial Intelligence',
      'Machine Learning',
      'Digital Image Processing',
      'Computer Graphics',
      'Simulation & Modelling',
      'Neural Architectures',
    ],
  },
  {
    domain: 'Security & Emerging Tech',
    topics: [
      'Cybersecurity',
      'Blockchain Technology',
      'Numerical Computing',
      'Scientific Computing',
      'Manufacturing Systems',
      'Cross-Domain Technologies',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Understand the Invention',
    description: 'Review the invention disclosure, key features, problem solved, and technical advantages',
  },
  {
    step: 2,
    title: 'Define the Search Strategy',
    description:
      'Identify keywords, classifications, assignees, inventors, technical synonyms, and relevant patent classes',
  },
  {
    step: 3,
    title: 'Search Patent Databases',
    description:
      'Use free and paid patent database sources covering global patent publications and granted patents.',
  },
  {
    step: 4,
    title: 'Filter & Analyze References',
    description:
      'Shortlist the most relevant patent documents and compare them with the disclosed invention.',
  },
  {
    step: 5,
    title: 'Prepare the Report',
    description:
      'Present key references, relevance notes, and practical observations in a structured search report.',
  },
  {
    step: 6,
    title: 'Discuss Findings',
    description:
      'Provide optional remote or in-office support to help inventors understand the cited references',
  },
];
export const CLIENT_TYPES: ClientType[] = [
  {
    title: 'Individual Inventors',
    description: 'Preparing to file a patent application and needing to understand prior art landscape.',
    Icon: User,
  },
  {
    title: 'Startups & MSMEs',
    description: 'Validating technology ideas before investment or commercial launch.',
    Icon: Building2,
  },
  {
    title: 'R&D Teams',
    description: 'Evaluating novelty and competitive technology activity in a research domain.',
    Icon: FlaskConical,
  },
  {
    title: 'Patent Attorneys & Law Firms',
    description: 'Requiring technical search and analysis support for filing and prosecution.',
    Icon: Scale,
  },
  {
    title: 'Technology Businesses',
    description: 'Reviewing product risks, technology trends, or patent portfolios for strategic decisions.',
    Icon: Network,
  },
  {
    title: 'Research Organizations',
    description: 'Needing comprehensive patent landscape studies and technology intelligence reports.',
    Icon: BookOpen,
  },
];
