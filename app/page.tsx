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
      <header className="hero">
        <div className="hero-top">
          <div>
            <p className="eyebrow">{siteData.location}</p>
            <h1>{siteData.name}</h1>
            <p className="headline">{siteData.headline}</p>
            <p className="subheadline">{siteData.subheadline}</p>
          </div>
          <a className="cta" href="mailto:gauravlochab487@gmail.com">
            Contact
          </a>
        </div>
      </header>

      <section className="section">
        <h2>Bio</h2>
        <div className="stack">
          {siteData.bio.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Highlights</h2>
        <ul className="list">
          {siteData.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="cards">
          {siteData.projects.map((project) => (
            <a
              key={project.name}
              className="card"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-title">{project.name}</div>
              <div className="card-desc">{project.description}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Links</h2>
        <div className="links">
          {siteData.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
