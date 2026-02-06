import CustomCursor from "./components/CustomCursor";
import PhysicsBubbles from "./components/PhysicsBubbles";
import Reveal from "./components/Reveal";
import TextReveal from "./components/TextReveal";
import ThemeToggle from "./components/ThemeToggle";

const siteData = {
  name: "Gaurav Lochab",
  logo: "GL.",
  nav: {
    cta: "Reach out",
  },
  headline:
    "I build autonomous agent systems and swarm intelligence for production teams.",
  status: "Available for collaboration",
  about:
    "AI engineer with a bias toward shipping. I turn agent architectures and swarm frameworks into reliable production systems.",
  services: [
    { title: "Autonomous Agents", description: "End-to-end agent systems that reason, plan, and act." },
    { title: "Swarm Intelligence", description: "Multi-agent swarms that coordinate and self-organize." },
    { title: "Agent Frameworks", description: "Custom tooling and orchestration layers for agent workflows." },
    { title: "On-Chain Agents", description: "Autonomous agents operating on decentralized protocols." },
    { title: "LLM Infrastructure", description: "Scalable inference, eval pipelines, and model ops." },
    { title: "Consulting & R&D", description: "Strategy and research for teams adopting agent-first architectures." },
  ],
  projects: [
    { name: "APOLIS", year: "2026", tags: "Agents, LLM, Infra", domain: "Enterprise" },
    { name: "Valory", year: "2024–2025", tags: "Swarms, On-Chain, Open Source", domain: "Autonomous" },
    { name: "Pibit", year: "2020–2024", tags: "AI, Infrastructure", domain: "Enterprise" },
  ],
  testimonials: [
    {
      quote: "Gaurav shipped our agent pipeline from prototype to production in record time.",
      author: "Engineering Lead",
      role: "APOLIS",
    },
    {
      quote: "His swarm architecture work saved us months of iteration. Pragmatic and great to work with.",
      author: "CTO",
      role: "Valory",
    },
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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-20 pt-10">
        {/* Header */}
        <Reveal>
          <header className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
            <span className="text-lg font-semibold tracking-normal text-[var(--text)]">
              {siteData.logo}
            </span>
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <a
                className="nav-link text-[var(--text)]"
                href="mailto:gauravlochab487@gmail.com"
              >
                {siteData.nav.cta}
              </a>
            </div>
          </header>
        </Reveal>

        {/* Hero */}
        <section>
          <Reveal>
            <div className="max-w-4xl text-2xl leading-relaxed text-[var(--text)] sm:text-3xl md:text-[2.6rem] md:leading-[1.25]">
              <TextReveal text={siteData.headline} as="h1" />
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              {siteData.status}
            </div>
          </Reveal>
        </section>

        {/* About */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">About</div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {siteData.about}
            </p>
          </Reveal>
        </section>

        {/* Physics Bubbles */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Trusted by</div>
            <PhysicsBubbles />
          </Reveal>
        </section>

        {/* Services */}
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

        {/* Portfolio */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Selected work</div>
            <div className="overflow-x-auto">
              <table className="portfolio-table">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Year</th>
                    <th>Tags</th>
                    <th>Domain</th>
                  </tr>
                </thead>
                <tbody>
                  {siteData.projects.map((project) => (
                    <tr key={project.name}>
                      <td className="font-medium text-[var(--text)]">{project.name}</td>
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

        {/* Testimonials */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Kind words</div>
            <div className="testimonials-grid">
              {siteData.testimonials.map((testimonial, i) => (
                <div key={i} className="testimonial-card">
                  <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                  <span className="testimonial-author">{testimonial.author}</span>
                  <span className="testimonial-role">, {testimonial.role}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section>
          <Reveal>
            <div className="cta-section">
              <h2 className="text-xl font-semibold text-[var(--text)] mb-2 sm:text-2xl">
                I&apos;m available for new projects
              </h2>
              <p className="text-sm text-muted mb-6">Let&apos;s build something together.</p>
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

        {/* Footer */}
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
              {siteData.name} &copy; 2024
            </div>
          </footer>
        </Reveal>
      </div>
    </main>
  );
}
