import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface ExpertiseDomain {
  domain: string;
  topics: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ClientType {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    pin: string;
  };
}
