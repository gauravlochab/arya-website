import type { SiteData } from "./types";
import { profile, links } from "./site";
import { experience } from "./experience";
import { capabilities } from "./capabilities";
import { testimonials } from "./testimonials";

/**
 * Single source of truth for all editable site copy.
 * Edit the individual files in this directory — not the components.
 */
export const siteData: SiteData = {
  ...profile,
  experience,
  capabilities,
  testimonials,
  links,
};

export { profile, links, experience, capabilities, testimonials };
export type {
  SiteData,
  SiteProfile,
  ExperienceItem,
  Capability,
  Testimonial,
  SiteLink,
} from "./types";
