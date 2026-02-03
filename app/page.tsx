import Reveal from "./components/Reveal";
import TextReveal from "./components/TextReveal";
import ThemeToggle from "./components/ThemeToggle";

const siteData = {
  name: "Gaurav Lochab",
  headline: "AI engineer building scalable LLM systems for hiring and hospitality.",
  subheadline:
    "Production-first LLM infrastructure for private data, large document volumes, and real-world constraints.",
  location: "New Delhi, India",
  bio: [
    "I build LLM systems that survive contact with production.",
    "At APOLIS, I design shared agent platforms used across recruiting and hospitality—handling private data at scale.",
    "I care deeply about reliability, evaluation, and cost, because models are easy—systems are hard."
  ],
  focus: [
    {
      title: "Agent platforms",
      reason: "Because complex workflows beat single-shot prompts"
    },
    {
      title: "RAG systems",
      reason: "Because private data is the real moat"
    },
    {
      title: "Evaluation & cost",
      reason: "Because production failures are expensive"
    }
  ],
  highlights: [
    "Senior Machine Learning Engineer at APOLIS (Nov 2025–present)",
    "Built a shared agent platform powering recruiting and hospitality workflows",
    "Published research (ORCID)",
    "Open-source contributor: Optimus (Valory)"
  ],
  projects: [
    {
      name: "chat-bot-dailogflow-backend",
      href: "https://github.com/gauravlochab/chat-bot-dailogflow-backend",
      description: "Dialogflow chatbot backend integrations.",
      context: "Designed for reliable, multi-tenant deployment."
    },
    {
      name: "Contract_Management_Bot",
      href: "https://github.com/gauravlochab/Contract_Management_Bot",
      description: "Contract workflow assistant and automation.",
      context: "Multi-step agent orchestration with validation."
    },
    {
      name: "RAG-Private-GPT-Langchain",
      href: "https://github.com/gauravlochab/RAG-Private-GPT-Langchain",
      description: "Private RAG pipeline using LangChain.",
      context: "Designed for enterprise data isolation and scale."
    }
  ],
  pointOfView: [
    "LLM engineering is shifting from prompts to platforms.",
    "The hard problems now are orchestration, evaluation, cost, and integration.",
    "That’s where I spend my time."
  ],
  now: [
    "Resume ingestion at scale",
    "Agent-based budgeting and compliance workflows"
  ],
  writing: "I write about building LLM systems that actually ship.",
  links: [
    { label: "Email", href: "mailto:gauravlochab487@gmail.com" },
    { label: "GitHub", href: "https://github.com/gauravlochab" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gauravlochab487/" },
    { label: "Substack", href: "https://substack.com/@glochab" },
    { label: "X", href: "https://x.com/GauravLoch41827" },
    { label: "ORCID", href: "https://orcid.org/0000-0002-9105-3508" },
    { label: "Optimus", href: "https://github.com/valory-xyz/optimus" }
  ]
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-5 pb-28 pt-12 sm:px-6 md:gap-20 md:pb-32 md:pt-16">
        <header className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
          <span>{siteData.location}</span>
          <div className="flex items-center gap-4">
            <a
              className="transition-colors hover:text-[var(--accent)]"
              href="mailto:gauravlochab487@gmail.com"
            >
              Contact
            </a>
            <ThemeToggle />
          </div>
        </header>

        <section className="border-b border-default pb-10">
          <Reveal>
            <TextReveal
              text={siteData.name}
              as="h1"
              className="text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl md:text-6xl"
            />
            <TextReveal
              text={siteData.headline}
              as="p"
              className="mt-5 text-xl font-medium leading-snug text-[var(--text)] sm:text-2xl"
            />
            <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
              {siteData.subheadline}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-muted">
              <span>Available for collaboration</span>
            </div>
          </Reveal>
        </section>

        <section className="space-y-6">
          <Reveal>
            <TextReveal text="Bio" as="h2" className="text-xs uppercase tracking-[0.3em] text-muted" />
            <div className="mt-6 space-y-4 text-base text-[var(--text)] sm:text-lg">
              {siteData.bio.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="space-y-6">
          <Reveal>
            <TextReveal text="Focus" as="h2" className="text-xs uppercase tracking-[0.3em] text-muted" />
            <div className="mt-6 space-y-4">
              {siteData.focus.map((item) => (
                <div key={item.title} className="border-b border-default pb-4">
                  <div className="text-base font-semibold">{item.title}</div>
                  <div className="mt-2 text-sm text-muted">→ {item.reason}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="space-y-6">
          <Reveal>
            <TextReveal
              text="Highlights"
              as="h2"
              className="text-xs uppercase tracking-[0.3em] text-muted"
            />
            <div className="mt-6 space-y-3 text-base text-[var(--text)] sm:text-lg">
              {siteData.highlights.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="space-y-6">
          <Reveal>
            <div>
              <TextReveal
                text="Projects"
                as="h2"
                className="text-xs uppercase tracking-[0.3em] text-muted"
              />
              <p className="mt-3 text-sm text-muted">Selected open-source systems.</p>
            </div>
            <div className="mt-6 space-y-4">
              {siteData.projects.map((project) => (
                <a
                  key={project.name}
                  className="flex flex-col gap-2 border-b border-default pb-5 transition-colors hover:text-[var(--accent)]"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-base font-semibold">{project.name}</div>
                  <div className="text-sm text-muted">{project.description}</div>
                  <div className="text-sm text-muted">→ {project.context}</div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">
                    View repo →
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="space-y-6">
          <Reveal>
            <TextReveal
              text="Point of View"
              as="h2"
              className="text-xs uppercase tracking-[0.3em] text-muted"
            />
            <div className="mt-6 space-y-4 text-base text-[var(--text)] sm:text-lg">
              {siteData.pointOfView.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="space-y-6">
          <Reveal>
            <TextReveal
              text="Currently Working On"
              as="h2"
              className="text-xs uppercase tracking-[0.3em] text-muted"
            />
            <div className="mt-6 space-y-3 text-base text-[var(--text)] sm:text-lg">
              {siteData.now.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="space-y-6">
          <Reveal>
            <TextReveal
              text="Writing"
              as="h2"
              className="text-xs uppercase tracking-[0.3em] text-muted"
            />
            <p className="mt-6 text-base text-[var(--text)] sm:text-lg">{siteData.writing}</p>
            <a
              className="mt-3 inline-flex text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:text-[var(--accent)]"
              href="https://substack.com/@glochab"
              target="_blank"
              rel="noreferrer"
            >
              Read on Substack →
            </a>
          </Reveal>
        </section>

        <section className="space-y-6">
          <Reveal>
            <div>
              <TextReveal text="Links" as="h2" className="text-xs uppercase tracking-[0.3em] text-muted" />
              <p className="mt-3 text-sm text-muted">Reach out or follow along.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em] text-muted">
              {siteData.links.map((link) => (
                <a
                  key={link.label}
                  className="transition-colors hover:text-[var(--accent)]"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="space-y-6">
          <Reveal>
            <TextReveal
              text="Let’s build something useful."
              as="h2"
              className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl"
            />
            <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
              I’m always open to collaborations around scalable LLM systems.
            </p>
            <a
              className="mt-5 inline-flex rounded-full border border-default px-5 py-2 text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              href="mailto:gauravlochab487@gmail.com"
            >
              Say hello
            </a>
          </Reveal>
        </section>

        <footer className="border-t border-default pt-8 text-sm text-muted">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span>© {siteData.name}</span>
            <div className="flex flex-wrap gap-4">
              <a
                className="transition-colors hover:text-[var(--accent)]"
                href="mailto:gauravlochab487@gmail.com"
              >
                Email
              </a>
              <a
                className="transition-colors hover:text-[var(--accent)]"
                href="https://github.com/gauravlochab"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="transition-colors hover:text-[var(--accent)]"
                href="https://www.linkedin.com/in/gauravlochab487/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
