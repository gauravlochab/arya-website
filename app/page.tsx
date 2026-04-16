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
    "I build production AI systems — LLM search, retrieval, and agent infrastructure for industry leaders.",

  subheadline:
    "I design production AI systems — hybrid search engines, RAG pipelines, LLM inference infrastructure, and autonomous agent workflows.",

  about:
    "Building production AI systems at the intersection of language models, retrieval, and backend infrastructure is what drives me. I enjoy bringing complex architectures to life and immersing myself in the problems that fascinate me. My curiosity has driven me to work across LLM fine-tuning, semantic search, autonomous agents, and scalable backends — from ideation to production. Solving hard problems and pushing the boundaries of what AI systems can reliably do at scale brings me immense satisfaction.",

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
        "RAG agent with custom Llama3-8B, LangChain, and Qdrant — query expansion + reranking, 30% improved relevance. 4x model compression via INT8, 2x latency improvement.",
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

  capabilities: [
    {
      title: "LLM Systems & Fine-Tuning",
      description:
        "I build end-to-end LLM pipelines — from fine-tuning foundation models with QLoRA and distillation, to structured extraction, prompt engineering systems, and evaluation frameworks that ensure production reliability.",
    },
    {
      title: "Search & Retrieval Infrastructure",
      description:
        "I specialize in building hybrid search systems that combine BM25 lexical retrieval with dense embeddings, custom ML ranking signals, query expansion, and reranking pipelines that deliver precise results at scale.",
    },
    {
      title: "Agent Systems & Workflows",
      description:
        "I design and build autonomous agent systems using LangGraph state machines, multi-step tool-calling, dynamic task routing, and human-in-the-loop oversight for reliable real-world execution.",
    },
    {
      title: "AI Infrastructure & MLOps",
      description:
        "I architect production inference pipelines with vLLM serving, INT8/INT4 quantization, FastAPI microservices, and Celery + Redis task orchestration — optimized for throughput, latency, and cost.",
    },
    {
      title: "Strategy & Consulting",
      description:
        "I leverage deep expertise to analyze your AI needs, evaluate emerging architectures, and chart a roadmap for success — from assessing existing ML infrastructure to recommending LLM strategies tailored to your organization.",
    },
    {
      title: "On-Demand AI Engineering",
      description:
        "Get a dedicated channel with me and your team where you can ask everything — from specific model issues, inference optimization, pipeline architecture, to production debugging and everything in between.",
    },
  ],

  projects: [
    {
      name: "Hybrid Resume Search Platform",
      company: "Apolis",
      year: "2026",
      domain: "Enterprise",
      tags: ["#llm", "#search", "#fine-tuning", "#elasticsearch"],
    },
    {
      name: "Long Document LLM Extraction",
      company: "Apolis",
      year: "2025",
      domain: "Enterprise",
      tags: ["#fine-tuning", "#nlp", "#llm", "#qlora"],
    },
    {
      name: "Autonomous DeFi Agent System",
      company: "Valory",
      year: "2024-2025",
      domain: "Autonomous",
      tags: ["#agents", "#langgraph", "#on-chain", "#defi"],
    },
    {
      name: "RAG Intelligence Platform",
      company: "Smarter",
      year: "2022-2024",
      domain: "Enterprise",
      tags: ["#rag", "#llm", "#qdrant", "#reranking"],
    },
    {
      name: "Invoice AI Agents",
      company: "Apolis",
      year: "2025",
      domain: "Healthcare",
      tags: ["#agents", "#llm", "#validation", "#auditing"],
    },
    {
      name: "Fashion Sales Forecasting",
      company: "Smarter",
      year: "2023",
      domain: "Retail",
      tags: ["#clip", "#gpt-3", "#embeddings", "#forecasting"],
    },
    {
      name: "Document AI Extraction",
      company: "Pibit.ai",
      year: "2020-2022",
      domain: "Fintech",
      tags: ["#nlp", "#cv", "#aws", "#sagemaker"],
    },
    {
      name: "Tax Fraud Detection",
      company: "Pibit.ai",
      year: "2021",
      domain: "Fintech",
      tags: ["#anomaly-detection", "#clustering", "#ml"],
    },
  ],

  testimonials: [
    {
      quote:
        "Gaurav is the rare engineer who combines deep AI research knowledge with the pragmatism to ship production systems on tight timelines. His work on NexGig — a talent intelligence platform processing 2.7 million resumes with fine-tuned LLMs — was technically ambitious and delivered measurable business impact from day one.",
      quote2:
        "I'd work with him again without hesitation.",
      author: "Rajesh Jaluka",
      role: "CTO",
      company: "Apolis",
      linkedin: "https://www.linkedin.com/in/rjaluka/",
      initials: "RJ",
    },
    {
      quote:
        "Gaurav brought a rare combination of LLM depth and systems-level thinking to Valory. He architected our autonomous agent infrastructure from the ground up — workflows that scaled to millions of on-chain operations managing real assets.",
      quote2:
        "His work directly shaped how we build autonomous services at the protocol level.",
      author: "David Galindo",
      role: "Co-Founder & CTO",
      company: "Valory",
      linkedin: "https://www.linkedin.com/in/dgcrypto/",
      initials: "DG",
    },
  ],

  links: [
    { label: "Email", href: "mailto:gauravlochab487@gmail.com" },
    { label: "GitHub", href: "https://github.com/gauravlochab" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gauravlochab487/" },
    { label: "Twitter", href: "https://x.com/gauravlochab" },
  ],
};

export default function Home() {
  return (
    <main className="relative min-h-screen text-[var(--text)]">
      <CustomCursor />
      <EasterEgg />

      {/* ── Fixed Header (theo.gg style) ── */}
      <header className="site-header">
        <span className="text-xl font-bold tracking-normal text-[var(--text)]">
          {siteData.logo}
        </span>
        <div className="flex items-center gap-6 text-[13px] font-bold">
          <ThemeToggle />
          <a
            className="border-b border-[var(--text)] pb-0.5 transition-opacity hover:opacity-70"
            href={`mailto:${siteData.email}`}
          >
            {siteData.nav.cta}
          </a>
        </div>
      </header>

      {/* ── Hero Section (theo.gg layout: text left, bubbles right) ── */}
      <section className="min-h-screen px-8 pt-32 pb-16 md:px-16 flex flex-col lg:flex-row items-center relative overflow-hidden">
        {/* Left: headline */}
        <div className="w-full lg:w-3/5 z-10 flex flex-col justify-center pt-16 lg:pt-0">
          <div className="w-full max-w-[900px] mb-12" style={{ fontSize: "clamp(28px, 5vw, 54px)", lineHeight: "1.15", fontWeight: 700 }}>
            <TextReveal text={siteData.headline} as="h1" />
          </div>
          <p className="text-[var(--muted)] text-[13px] mt-auto lg:mt-32">
            Trusted by AI-first companies worldwide &rarr;
          </p>
        </div>

        {/* Right: PhysicsBubbles */}
        <div className="w-full lg:w-2/5 h-[400px] lg:h-[600px] mt-16 lg:mt-0 relative hidden md:block">
          <PhysicsBubbles />
        </div>
      </section>

      {/* ── Mobile Bubbles (visible only on small screens) ── */}
      <section className="block md:hidden px-8 pb-16">
        <Reveal>
          <p className="text-[var(--muted)] text-[13px] mb-4">
            Trusted by AI-first companies worldwide &rarr;
          </p>
          <PhysicsBubbles />
        </Reveal>
      </section>

      {/* ── About ── */}
      <section className="py-32 px-8 flex flex-col items-center">
        <Reveal>
          <div className="max-w-2xl text-center leading-relaxed text-[15px] sm:text-[18px]" style={{ color: "var(--text)" }}>
            {siteData.about}
          </div>
        </Reveal>
      </section>

      {/* ── Capabilities Grid (theo.gg services: 3 columns, title + paragraph only) ── */}
      <section className="py-32 px-8 md:px-16 w-full mx-auto max-w-7xl">
        <Reveal>
          <div className="capabilities-grid">
            {siteData.capabilities.map((cap) => (
              <div key={cap.title} className="capability-item">
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Experience ── */}
      <section className="py-32 px-8 md:px-16 w-full mx-auto max-w-5xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-muted mb-6">Experience</div>
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

      {/* ── Projects Table (theo.gg style) ── */}
      <section id="projects" className="py-24 px-8 md:px-16 w-full overflow-x-auto max-w-7xl mx-auto">
        <Reveal>
          <div className="portfolio-table-wrap">
            <table className="portfolio-table">
              <thead>
                <tr>
                  <th className="w-[55%] pl-4">Project</th>
                  <th className="w-[10%]">Year</th>
                  <th className="w-[25%]">Tags</th>
                  <th className="w-[10%]">Domain</th>
                </tr>
              </thead>
              <tbody>
                {siteData.projects.map((project, idx) => (
                  <tr key={project.name} className="group">
                    <td className="pl-4">
                      <span className="portfolio-row-num">
                        {String(idx + 1).padStart(2, "0")}
                      </span>{" "}
                      <span className="portfolio-row-name">{project.name}</span>
                    </td>
                    <td className="text-[var(--muted)]">{project.year}</td>
                    <td className="portfolio-row-tags">
                      {project.tags.join(", ")}
                    </td>
                    <td className="portfolio-row-domain">{project.domain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-32 px-8 md:px-16 max-w-5xl mx-auto w-full">
        <Reveal>
          <div className="testimonials-grid">
            {siteData.testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <blockquote>
                  <p>&ldquo;{t.quote}</p>
                  <p>{t.quote2}&rdquo;</p>
                </blockquote>
                <div className="testimonial-meta">
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="testimonial-author nav-link"
                  >
                    {t.author}, {t.role}
                  </a>
                  <div className="testimonial-role">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── CTA Section ── */}
      <section className="px-8 md:px-16 pb-32 max-w-5xl mx-auto w-full">
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

      {/* ── Footer (minimal, theo.gg style) ── */}
      <footer className="border-t border-[var(--border)] px-8 py-8 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-[10px]">
        <div className="flex items-start gap-8">
          <span className="text-lg font-bold leading-none text-[var(--text)]">
            {siteData.logo}
          </span>
          <div className="flex flex-col gap-1 text-[var(--muted)]">
            <a href={`mailto:${siteData.email}`} className="transition-colors hover:text-[var(--text)]">
              {siteData.email}
            </a>
            <a href={`tel:${siteData.phone}`} className="transition-colors hover:text-[var(--text)]">
              {siteData.phone}
            </a>
            <p>{siteData.location}</p>
          </div>
        </div>
        <div className="text-[var(--muted)]">
          {siteData.name} &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </main>
  );
}
