export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Capability {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  quote2: string;
  author: string;
  role: string;
  company: string;
  linkedin: string;
  initials: string;
}

export interface SiteLink {
  label: string;
  href: string;
}

export interface SiteProfile {
  name: string;
  logo: string;
  location: string;
  email: string;
  phone: string;
  nav: { cta: string };
  headline: string;
  subheadline: string;
  about: string;
}

export interface SiteData extends SiteProfile {
  experience: ExperienceItem[];
  capabilities: Capability[];
  testimonials: Testimonial[];
  links: SiteLink[];
}
