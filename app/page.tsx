import CustomCursor from "./components/CustomCursor";
import EasterEgg from "./components/EasterEgg";
import PhysicsBubbles from "./components/PhysicsBubbles";
import Reveal from "./components/Reveal";
import TextReveal from "./components/TextReveal";
import ThemeToggle from "./components/ThemeToggle";

const siteData = {
  name: "Gaurav Lochab",
  logo: "GL.",
  location: "Delhi, India",
  email: "gauravlochab487@gmail.com",
  phone: "+91-8222022505",
  nav: { cta: "Reach out" },

  headline:
    "I build autonomous agent systems and LLM pipelines for production teams.",

  status: "Available for collaboration",

  about:
    "Senior AI / Machine Learning Engineer with 6+ years shipping production systems. I specialise in LLM pipelines, autonomous agents, on-chain agent infrastructure, and fine-tuning open-source models — from 2.7M-resume search platforms to $10M+ DeFi portfolios. Biased toward things that ship.",

  experience: [
    {
      company: "Apolis",
      role: "Senior AI / ML Engineer",
      period: "Oct 2025 – Mar 2026",
      location: "Remote",
      highlights: [
        "Architected NexGig — AI talent search across 2.7M+ resumes. Elasticsearch BM25 + dense embeddings + custom ML ranking across skill, role, experience, and location signals.",
        "Fine-tuned Qwen2.5-3B with QLoRA (4-bit NF4) + teacher-student distillation. Deployed invoice AI agents for healthcare/financial auditing — LLM reasoning + rule-based validation.",
      ],
    },
    {
      company: "Valory",
      role: "Senior AI Developer",
      period: "Jun 2024 – Oct 2025",
      location: "Remote",
      highlights: [
        "Built autonomous DeFi agents for portfolio management across blockchain protocols — 5M+ requests, $10M+ managed assets, 25% portfolio performance improvement.",
        "LangGraph state-machine agent workflows with dynamic task routing. Fine-tuned Llama + OpenAI / Claude APIs for financial AI at <200ms latency.",
      ],
    },
    {
      company: "Smarter",
      role: "Senior ML Engineer",
      period: "Oct 2022 – May 2024",
      location: "London, UK (Remote)",
      highlights: [
        "RAG agent with custom Llama3-8B, LangChain, and Qdrant — query expansion + reranking, 30% improved relevance. 4× model compression via INT8, 2× latency improvement.",
        "Fashion sales forecasting using CLIP embeddings + GPT-3. Improved inventory management, boosted quarterly sales 18%.",
      ],
    },
    {
      company: "Pibit.ai",
      role: "Founding Team — ML",
      period: "Jun 2020 – Sep 2022",
      location: "Gurugram, India",
      highlights: [
        "Custom entity extraction from financial documents using NLP + CV — 35% accuracy improvement. Deployed Document AI to production via AWS Lambda and SageMaker.",
        "Income tax fraud detection via ensemble anomaly detection, unsupervised clustering, and rule-based backtracking.",
      ],
    },
  ],

  services: [
    {
      title: "Autonomous Agents",
      description:
        "End-to-end agent systems that reason, plan, and act — from LangGraph state machines to multi-step tool-calling pipelines with human-in-the-loop oversight.",
    },
    {
      title: "LLM Fine-Tuning",
      description:
        "QLoRA and LoRA fine-tuning of open-source models (Llama, Qwen, Mistral) for structured extraction, classification, and domain-specific generation tasks.",
    },
    {
      title: "RAG & Search Pipelines",
      description:
        "Retrieval-augmented generation with dense and sparse embeddings, reranking, query expansion, and evaluation frameworks for production relevance.",
    },
    {
      title: "On-Chain Agents",
      description:
        "Autonomous agents operating on decentralised protocols — DeFi portfolio management, on-chain execution, and multi-agent coordination via Open Autonomy.",
    },
    {
      title: "LLM Infrastructure",
      description:
        "Scalable inference with vLLM and quantisation, eval pipelines, MLOps, model distillation, and cost-optimised serving on AWS and Azure.",
    },
    {
      title: "Consulting & R&D",
      description:
        "Architecture strategy and hands-on research for teams adopting agent-first systems, LLM ops, and production ML — from proof of concept to production.",
    },
  ],

  skills: [
    {
      category: "LLMs & Agents",
      items: [
        "LangChain",
        "LangGraph",
        "OpenAI",
        "Anthropic Claude",
        "HuggingFace",
        "vLLM",
        "RAG",
        "QLoRA",
        "RLHF / ORPO",
        "AutoGen",
      ],
    },
    {
      category: "Backend & MLOps",
      items: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Celery",
        "Docker",
        "Kubernetes",
        "Apache Airflow",
        "CI/CD",
      ],
    },
    {
      category: "Cloud & Search",
      items: [
        "AWS (Lambda, SageMaker)",
        "Azure",
        "Elasticsearch",
        "Qdrant",
        "BM25",
        "Sparse Embeddings (SPLADE)",
      ],
    },
    {
      category: "Blockchain & Web3",
      items: [
        "Open Autonomy",
        "Olas Ecosystem",
        "On-Chain Agents",
        "DeFi Protocols",
        "Multi-Agent Coordination",
      ],
    },
  ],

  projects: [
    {
      name: "NexGig",
      company: "Apolis",
      year: "2026",
      tags: "LLM, Search, Fine-Tuning",
      domain: "Enterprise",
      description:
        "AI talent search platform across 2.7M+ resumes. Elasticsearch + dense embeddings + fine-tuned Qwen2.5-3B with QLoRA.",
    },
    {
      name: "Optimus / DeFi Agents",
      company: "Valory",
      year: "2024–2025",
      tags: "Agents, On-Chain, LangGraph",
      domain: "Autonomous",
      description:
        "Autonomous portfolio management agents. 5M+ requests, $10M+ managed assets, LangGraph state machines.",
    },
    {
      name: "RAG Intelligence Platform",
      company: "Smarter",
      year: "2022–2024",
      tags: "RAG, LLM, Infrastructure",
      domain: "Enterprise",
      description:
        "Custom Llama3-8B RAG with query expansion and reranking. 30% relevance improvement. 4× model compression via INT8.",
    },
    {
      name: "Document AI & Fraud Detection",
      company: "Pibit.ai",
      year: "2020–2022",
      tags: "NLP, CV, AWS",
      domain: "Fintech",
      description:
        "Entity extraction from financial documents. Income tax fraud detection via ensemble anomaly detection. AWS Lambda + SageMaker.",
    },
  ],

  testimonials: [
    {
      quote:
        "Gaurav is the rare engineer who combines deep AI research knowledge with the pragmatism to ship production systems on tight timelines. His work on NexGig — a talent intelligence platform processing 2.7 million resumes with fine-tuned LLMs — was technically ambitious and delivered measurable business impact from day one. I'd work with him again without hesitation.",
      author: "Rajesh Jaluka",
      role: "CTO",
      company: "Apolis",
      linkedin: "https://www.linkedin.com/in/rjaluka/",
    },
    {
      quote:
        "Gaurav brought a rare combination of LLM depth and systems-level thinking to Valory. He architected our autonomous agent infrastructure from the ground up — workflows that scaled to millions of on-chain operations managing real assets. His work directly shaped how we build autonomous services at the protocol level.",
      author: "David Galindo",
      role: "Co-Founder & CTO",
      company: "Valory",
      linkedin: "https://www.linkedin.com/in/dgcrypto/",
    },
  ],

  education: {
    degree: "B.E. in Computer Science and Engineering",
    institution: "USICT Delhi",
    period: "Aug 2016 – May 2020",
    gpa: "8.1 / 10",
    coursework:
      "Machine Learning, Data Mining, Quantitative Analysis, Financial Mathematics, Statistics, DSA, Databases",
  },

  awards: [
    "Research Paper — International Advanced Computing Conference '22",
    "Mentor at Scaler Academy — Quantitative analysis and ML in finance",
  ],

  links: [
    { label: "Email", href: "mailto:gauravlochab487@gmail.com" },
    { label: "GitHub", href: "https://github.com/gauravlochab" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gauravlochab487/" },
  ],
};

export default function Home() {
  return (
    <main className="relative min-h-screen text-[var(--text)]">
      <CustomCursor />
      <EasterEgg />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-5 pb-20 pt-8 sm:gap-24 sm:px-10 sm:pb-28 sm:pt-12">

        {/* ── Header ── */}
        <Reveal>
          <header className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
            <span className="text-lg font-semibold tracking-normal text-[var(--text)]">
              {siteData.logo}
            </span>
            <div className="flex items-center gap-3 sm:gap-6">
              <ThemeToggle />
              <a className="nav-link text-[var(--text)]" href={`mailto:${siteData.email}`}>
                {siteData.nav.cta}
              </a>
            </div>
          </header>
        </Reveal>

        {/* ── Hero ── */}
        <section>
          <Reveal>
            <div className="max-w-4xl text-2xl leading-relaxed text-[var(--text)] sm:text-3xl md:text-[2.6rem] md:leading-[1.25]">
              <TextReveal text={siteData.headline} as="h1" />
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted">
              <span className="status-dot" />
              {siteData.status} · {siteData.location}
            </div>
          </Reveal>
        </section>

        {/* ── About ── */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">About</div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {siteData.about}
            </p>
          </Reveal>
        </section>

        {/* ── Physics Bubbles ── */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Trusted by</div>
            <PhysicsBubbles />
          </Reveal>
        </section>

        {/* ── Services ── */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">What I do</div>
            <div className="services-grid">
              {siteData.services.map((service) => (
                <div key={service.title} className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── Experience ── */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Experience</div>
            <div className="experience-list">
              {siteData.experience.map((job) => (
                <div key={job.company} className="experience-item">
                  <div className="experience-header">
                    <div className="experience-left">
                      <span className="experience-company">{job.company}</span>
                      <span className="experience-role">{job.role}</span>
                    </div>
                    <div className="experience-right">
                      <span className="experience-period">{job.period}</span>
                      <span className="experience-location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="experience-highlights">
                    {job.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── Selected Work ── */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Selected work</div>
            <div className="overflow-x-auto">
              <table className="portfolio-table">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Company</th>
                    <th>Year</th>
                    <th>Tags</th>
                    <th>Domain</th>
                  </tr>
                </thead>
                <tbody>
                  {siteData.projects.map((project) => (
                    <tr key={project.name}>
                      <td className="font-medium text-[var(--text)]">{project.name}</td>
                      <td>{project.company}</td>
                      <td>{project.year}</td>
                      <td>{project.tags}</td>
                      <td>{project.domain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* ── Skills ── */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Skills & Stack</div>
            <div className="skills-grid">
              {siteData.skills.map((group) => (
                <div key={group.category} className="skills-group">
                  <div className="skills-category">{group.category}</div>
                  <div className="skills-tags">
                    {group.items.map((item) => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── Testimonials ── */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Kind words</div>
            <div className="testimonials-grid">
              {siteData.testimonials.map((t, i) => (
                <div key={i} className="testimonial-card">
                  <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="testimonial-footer">
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="testimonial-author nav-link"
                    >
                      {t.author}
                    </a>
                    <span className="testimonial-role">
                      {t.role}, {t.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── Education & Awards ── */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Education</div>
            <div className="education-card">
              <div className="education-header">
                <div>
                  <span className="education-degree">{siteData.education.degree}</span>
                  <span className="education-institution">{siteData.education.institution}</span>
                </div>
                <div className="education-meta">
                  <span>{siteData.education.period}</span>
                  <span className="education-gpa">GPA {siteData.education.gpa}</span>
                </div>
              </div>
              <p className="education-coursework">
                <span className="text-muted text-xs uppercase tracking-widest mr-2">Coursework</span>
                {siteData.education.coursework}
              </p>
              <div className="education-awards">
                {siteData.awards.map((award, i) => (
                  <span key={i} className="award-item">▸ {award}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── CTA ── */}
        <section>
          <Reveal>
            <div className="cta-section">
              <h2 className="cta-heading">I&apos;m available for new projects</h2>
              <p className="text-sm text-muted mb-6">
                Let&apos;s build something together — agents, LLM systems, or production ML infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em] text-muted">
                {siteData.links.map((link) => (
                  <a key={link.label} className="nav-link" href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Footer ── */}
        <Reveal>
          <footer className="site-footer">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-lg font-semibold tracking-normal text-[var(--text)]">
                {siteData.logo}
              </span>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-muted">
                {siteData.links.map((link) => (
                  <a key={link.label} className="nav-link" href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-4 text-xs text-muted">
              {siteData.name} · {siteData.location} &copy; 2025
            </div>
          </footer>
        </Reveal>

      </div>
    </main>
  );
}
