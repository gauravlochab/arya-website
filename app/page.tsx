import Reveal from "./components/Reveal";
import TextReveal from "./components/TextReveal";
import ThemeToggle from "./components/ThemeToggle";

const siteData = {
  name: "Gaurav Lochab",
  headline: "AI Engineer focused on LLM systems.",
  subheadline: "Building scalable LLM systems for recruiting and hospitality.",
  location: "New Delhi, India",
  bio: [
    "Senior Machine Learning Engineer at APOLIS (since Nov 2025).",
    "I build LLM systems for smart recruiting and hotel management across Welcome Group, Hotel Jain, and APOLIS hiring, using a shared agent platform.",
    "I care about robust, scalable LLM infra and real-world deployment."
  ],
  focus: [
    "Agent platforms that unify hiring and hospitality workflows",
    "RAG systems for private knowledge bases and enterprise data",
    "Evaluation, reliability, and cost-aware LLM infrastructure"
  ],
  highlights: [
    "Senior Machine Learning Engineer at APOLIS (Nov 2025–present)",
    "Built shared agent platform powering recruiting + hospitality workflows",
    "Published research (ORCID)",
    "Open-source contributor: Optimus (Valory)"
  ],
  projects: [
    {
      name: "chat-bot-dailogflow-backend",
      href: "https://github.com/gauravlochab/chat-bot-dailogflow-backend",
      description: "Dialogflow chatbot backend integrations."
    },
    {
      name: "Contract_Management_Bot",
      href: "https://github.com/gauravlochab/Contract_Management_Bot",
      description: "Contract workflow assistant and automation."
    },
    {
      name: "RAG-Private-GPT-Langchain",
      href: "https://github.com/gauravlochab/RAG-Private-GPT-Langchain",
      description: "Private RAG pipeline using LangChain."
    }
  ],
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
    <main className="container">
      <div className="ambient" aria-hidden="true" />

      <header className="hero">
        <Reveal>
          <div className="hero-top">
            <div>
              <p className="eyebrow">{siteData.location}</p>
              <TextReveal text={siteData.name} as="h1" className="headline-main" />
              <TextReveal text={siteData.headline} as="p" className="headline" />
              <p className="subheadline">{siteData.subheadline}</p>
            </div>
            <div className="cta-group">
              <a className="cta" href="mailto:gauravlochab487@gmail.com">
                Contact
              </a>
              <span className="cta-note">Available for collaboration</span>
              <ThemeToggle />
            </div>
          </div>
        </Reveal>
      </header>

      <section className="section">
        <Reveal>
          <TextReveal text="Bio" as="h2" />
          <div className="stack">
            {siteData.bio.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <TextReveal text="Focus" as="h2" />
          <ul className="list minimal">
            {siteData.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <TextReveal text="Highlights" as="h2" />
          <ul className="list">
            {siteData.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="section-header">
            <TextReveal text="Projects" as="h2" />
            <p className="muted">Selected open-source work.</p>
          </div>
          <div className="project-list">
            {siteData.projects.map((project) => (
              <a
                key={project.name}
                className="project-row"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <div className="project-title">{project.name}</div>
                  <div className="project-desc">{project.description}</div>
                </div>
                <span className="project-cta">View repo →</span>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="section-header">
            <TextReveal text="Links" as="h2" />
            <p className="muted">Reach out or follow along.</p>
          </div>
          <div className="links">
            {siteData.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <Reveal>
          <div className="footer-card">
            <div>
              <TextReveal text="Let’s build something useful." as="h3" />
              <p className="muted">
                I’m always open to collaborations around scalable LLM systems.
              </p>
            </div>
            <a className="cta" href="mailto:gauravlochab487@gmail.com">
              Say hello
            </a>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}
