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
    "AI Systems Engineer building LLM search, retrieval, and agent infrastructure.",

  subheadline:
    "I design production AI systems — hybrid search engines, RAG pipelines, LLM inference infrastructure, and autonomous agent workflows.",

  status: "Available for collaboration",

  about:
    "I build production AI systems at the intersection of language models, retrieval, and backend infrastructure. My work spans LLM-powered applications, semantic search and ranking, RAG pipelines, agentic workflows, and scalable AI backends. I enjoy solving problems where AI must operate reliably at scale.",

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

  capabilities: [
    {
      title: "LLM Systems",
      description: "Fine-tuning, structured extraction, prompt systems, evaluation pipelines.",
      bullets: ["QLoRA / LoRA fine-tuning", "Structured JSON extraction", "Prompt engineering systems", "LLM evaluation frameworks"],
    },
    {
      title: "Retrieval & Search",
      description: "Hybrid search (BM25 + embeddings), ranking pipelines, semantic retrieval.",
      bullets: ["BM25 + dense embeddings", "Custom ML ranking signals", "Query expansion & reranking", "SPLADE sparse vectors"],
    },
    {
      title: "AI Infrastructure",
      description: "Inference pipelines, FastAPI microservices, GPU optimization, production monitoring.",
      bullets: ["vLLM inference serving", "FastAPI microservices", "INT8/INT4 quantization", "Celery + Redis pipelines"],
    },
    {
      title: "Agent Systems",
      description: "LangGraph workflows, tool-calling agents, multi-step automation systems.",
      bullets: ["LangGraph state machines", "Multi-step tool-calling", "On-chain agent execution", "Human-in-the-loop oversight"],
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
      name: "Hybrid Resume Search Platform",
      company: "Apolis",
      year: "2026",
      domain: "Enterprise",
      tags: ["LLM", "Search", "Fine-Tuning", "Elasticsearch"],
      problem: "Recruiters struggled to search millions of resumes effectively using keyword matching alone.",
      architecture: ["Resume ingestion", "LLM extraction", "Elasticsearch indexing", "Dense embeddings", "Hybrid retrieval", "ML ranking", "FastAPI API"],
      stack: ["Python", "FastAPI", "Elasticsearch", "OpenAI Embeddings", "QLoRA", "Qwen2.5-3B"],
      contribution: "Architected end-to-end pipeline from ingestion to ranked retrieval. Fine-tuned Qwen2.5-3B with QLoRA for structured extraction.",
      impact: "2.7M+ resumes indexed. Improved candidate-job matching accuracy significantly.",
    },
    {
      name: "Long Document LLM Extraction",
      company: "Apolis",
      year: "2025",
      domain: "Enterprise",
      tags: ["Fine-Tuning", "NLP", "LLM"],
      problem: "Resumes are long, noisy, and difficult to parse reliably with off-the-shelf models.",
      architecture: ["Document input", "Prompt extraction", "Structured JSON output", "Validation layer", "Index write"],
      stack: ["Python", "QLoRA", "Qwen2.5-3B", "HuggingFace", "Pydantic"],
      contribution: "Designed fine-tuning pipeline with teacher-student distillation and structured prompt templates.",
      impact: "Consistent structured extraction at scale. Significantly reduced hallucinations vs zero-shot baselines.",
    },
    {
      name: "Autonomous DeFi Agent System",
      company: "Valory",
      year: "2024–2025",
      domain: "Autonomous",
      tags: ["Agents", "LangGraph", "On-Chain", "DeFi"],
      problem: "Complex DeFi portfolio management requires multi-step reasoning, real-time market data, and on-chain execution.",
      architecture: ["User task", "Agent planning", "Tool execution", "State management", "On-chain write", "Result synthesis"],
      stack: ["Python", "LangGraph", "OpenAI", "Claude APIs", "Open Autonomy", "Olas"],
      contribution: "Built LangGraph state-machine agent workflows with dynamic task routing and blockchain execution layer.",
      impact: "5M+ requests processed. $10M+ in managed assets. 25% portfolio performance improvement.",
    },
    {
      name: "RAG Intelligence Platform",
      company: "Smarter",
      year: "2022–2024",
      domain: "Enterprise",
      tags: ["RAG", "LLM", "Qdrant", "Reranking"],
      problem: "Organizations need AI to answer questions accurately over private knowledge without hallucination.",
      architecture: ["Documents", "Chunking", "Embeddings", "Qdrant vector DB", "Retrieval", "Reranking", "LLM answer generation"],
      stack: ["Python", "Llama3-8B", "LangChain", "Qdrant", "FastAPI", "AWS"],
      contribution: "Built custom RAG with query expansion, reranking, and 4× model compression via INT8 quantization.",
      impact: "30% improved retrieval relevance. 2× latency improvement. Deployed to production on AWS.",
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
    { label: "Twitter", href: "https://x.com/gauravlochab" },
  ],
};

const archDiagrams = [
  {
    label: "LLM Pipeline",
    steps: ["Data", "Extraction", "Embeddings", "Vector DB", "Retrieval", "LLM Synthesis", "Evaluation"],
  },
  {
    label: "Hybrid Search",
    steps: ["Query", "BM25 Retrieval", "Dense Embedding Retrieval", "Reranking", "LLM Reasoning"],
  },
];

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
              <a className="nav-link hidden sm:inline text-muted hover:text-[var(--accent)]" href="#projects">Projects</a>
              <a className="nav-link hidden sm:inline text-muted hover:text-[var(--accent)]" href="/case-studies">Case Studies</a>
              <a className="nav-link hidden sm:inline text-muted hover:text-[var(--accent)]" href="https://github.com/gauravlochab" target="_blank" rel="noopener noreferrer">GitHub</a>
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
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {siteData.subheadline}
            </p>
            <div className="hero-buttons">
              <a className="btn-primary" href="#projects">View Projects</a>
              <a className="btn-secondary" href="https://github.com/gauravlochab" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn-secondary" href="#">Resume</a>
              <a className="btn-secondary" href={`mailto:${siteData.email}`}>Contact</a>
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

        {/* ── What I Build ── */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">What I build</div>
            <div className="capability-grid">
              {siteData.capabilities.map((cap) => (
                <div key={cap.title} className="capability-card">
                  <h3>{cap.title}</h3>
                  <p>{cap.description}</p>
                  <ul className="capability-bullets">
                    {cap.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
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

        {/* ── Featured Projects ── */}
        <section id="projects">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Featured projects</div>
            <div className="project-cards-grid">
              {siteData.projects.map((project) => (
                <div key={project.name} className="project-card">
                  {/* Header */}
                  <div className="project-card-header">
                    <div>
                      <div className="project-card-name">{project.name}</div>
                      <div className="project-card-meta">{project.company} · {project.year}</div>
                    </div>
                    <span className="project-domain-badge">{project.domain}</span>
                  </div>

                  {/* Tags */}
                  <div>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  {/* Problem */}
                  <div>
                    <div className="project-section-label">Problem</div>
                    <p className="project-problem">{project.problem}</p>
                  </div>

                  {/* Architecture flow */}
                  <div>
                    <div className="project-section-label">Architecture</div>
                    <div className="arch-flow">
                      {project.architecture.map((step, i) => (
                        <span key={i} className="flex items-center gap-1">
                          <span className="arch-step">{step}</span>
                          {i < project.architecture.length - 1 && (
                            <span className="arch-arrow">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stack */}
                  <div>
                    <div className="project-section-label">Stack</div>
                    <div>
                      {project.stack.map((s) => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Contribution */}
                  <div>
                    <div className="project-section-label">My contribution</div>
                    <p className="project-contribution">{project.contribution}</p>
                  </div>

                  {/* Impact */}
                  <div>
                    <div className="project-section-label">Impact</div>
                    <p className="project-impact">{project.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── Architecture Diagrams ── */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">How I architect systems</div>
            <div className="arch-diagrams-grid">
              {archDiagrams.map((diagram) => (
                <div key={diagram.label} className="arch-diagram-card">
                  <div className="arch-diagram-title">{diagram.label}</div>
                  <div className="arch-diagram-flow">
                    {diagram.steps.map((step, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <span className="arch-diagram-step">{step}</span>
                        {i < diagram.steps.length - 1 && (
                          <span className="arch-diagram-arrow">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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
