import type { SiteLink, SiteProfile } from "./types";

export const profile: SiteProfile = {
  name: "Gaurav Lochab",
  logo: "GL.",
  location: "Delhi, India",
  email: "gauravlochab487@gmail.com",
  phone: "+91-8222022505",
  nav: { cta: "Reach out" },
  headline:
    "I build production AI systems — LLM search, retrieval, and agent infrastructure for industry leaders.",
  subheadline:
    "I design production AI systems — hybrid search engines, RAG pipelines, LLM inference infrastructure, and autonomous agent workflows.",
  about:
    "Building production AI systems at the intersection of language models, retrieval, and backend infrastructure is what drives me. I enjoy bringing complex architectures to life and immersing myself in the problems that fascinate me. My curiosity has driven me to work across LLM fine-tuning, semantic search, autonomous agents, and scalable backends — from ideation to production. Solving hard problems and pushing the boundaries of what AI systems can reliably do at scale brings me immense satisfaction.",
};

export const links: SiteLink[] = [
  { label: "Email", href: "mailto:gauravlochab487@gmail.com" },
  { label: "GitHub", href: "https://github.com/gauravlochab" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gauravlochab487/" },
  { label: "Twitter", href: "https://x.com/gauravlochab" },
];
