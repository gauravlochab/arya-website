import CustomCursor from "./components/CustomCursor";
import EasterEgg from "./components/EasterEgg";
import PhysicsBubbles from "./components/PhysicsBubbles";
import Reveal from "./components/Reveal";
import TextReveal from "./components/TextReveal";
import ThemeToggle from "./components/ThemeToggle";
import ChatCTA from "./components/ChatCTA";
import ProjectsTable from "./components/ProjectsTable";
import ScrollRevealText from "./components/ScrollRevealText";
import GitHubContributions from "./components/GitHubContributions";
import ResumeOverlay from "./components/ResumeOverlay";
import { siteData } from "../content";

export default function Home() {
  return (
    <main className="relative min-h-screen text-[var(--text)]">
      <CustomCursor />
      <EasterEgg />

      {/* -- Fixed Header (theo.gg style) -- */}
      <header className="site-header">
        <span className="text-xl font-bold tracking-normal text-[var(--text)]">
          {siteData.logo}
        </span>
        <div className="flex items-center text-[13px] font-bold gap-3 sm:gap-0">
          <div className="flex items-center gap-3 sm:gap-5">
            <a href="https://github.com/gauravlochab" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/gauravlochab487/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
            </a>
            {/* Hide Resume button on mobile to reduce header clutter */}
            <span className="hidden sm:inline">
              <ResumeOverlay />
            </span>
          </div>
          {/* Hide separator on mobile */}
          <span className="hidden sm:block mx-4 h-4 w-px bg-[var(--border)]" />
          <div className="flex items-center gap-3 sm:gap-5">
            <ThemeToggle />
            <a
              className="px-5 py-2 font-semibold text-[var(--text)] transition-transform hover:scale-[1.03]"
              style={{ background: "var(--accent)", borderRadius: "var(--radius-pill)" }}
              href={`mailto:${siteData.email}`}
            >
              {siteData.nav.cta}
            </a>
          </div>
        </div>
      </header>

      {/* -- Hero Section: Full-width bubbles BEHIND text -- */}
      <section className="relative min-h-[90vh] pt-32 pb-0 px-8 md:px-16 overflow-hidden">
        {/* Bubbles fill the entire section */}
        <div className="absolute inset-0 z-0">
          <PhysicsBubbles />
        </div>
        {/* Text on top */}
        <div className="relative z-10 max-w-full md:max-w-[55%]">
          <Reveal>
            <div style={{ fontSize: "clamp(2.8rem, 7vw, 92px)", lineHeight: 1.04, fontWeight: 700, letterSpacing: "-0.025em" }}>
              <TextReveal text={siteData.headline} as="h1" />
            </div>
            <div className="mt-12 flex flex-col gap-4">
              <p className="text-sm text-muted">
                Trusted by AI-first companies worldwide &rarr;
              </p>
              <GitHubContributions />
            </div>
          </Reveal>
        </div>
      </section>

      {/* -- About (scroll-reveal grey -> white) -- */}
      <section className="py-32 px-8 flex flex-col items-center">
        <div className="max-w-2xl text-center text-[17px] sm:text-[21px]">
          <div className="section-eyebrow section-eyebrow--center">About</div>
          <ScrollRevealText text={siteData.about} />
        </div>
      </section>

      {/* -- Capabilities Grid (theo.gg services: 3 columns, title + paragraph only) -- */}
      <section className="py-32 px-8 md:px-16 w-full mx-auto max-w-7xl">
        <Reveal>
          <div className="section-eyebrow">What I do</div>
          <div className="capabilities-grid">
            {siteData.capabilities.map((cap, i) => (
              <div key={cap.title} className="capability-item">
                <span className="capability-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* -- Experience -- */}
      <section className="py-32 px-8 md:px-16 w-full mx-auto max-w-5xl">
        <Reveal>
          <div className="section-eyebrow">Experience</div>
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

      {/* -- Projects Table (theo.gg style -- per-row hover colors) -- */}
      <section id="projects" className="py-24 px-8 md:px-16 w-full overflow-x-auto max-w-7xl mx-auto">
        <Reveal>
          <div className="section-eyebrow">Selected work</div>
          <ProjectsTable />
        </Reveal>
      </section>

      {/* -- Testimonials -- */}
      <section className="py-32 px-8 md:px-16 max-w-5xl mx-auto w-full">
        <Reveal>
          <div className="section-eyebrow">Endorsements</div>
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

      {/* -- Interactive Chat CTA Section -- */}
      <section className="px-8 md:px-16 pb-32 w-full">
        <Reveal>
          <ChatCTA />
        </Reveal>
      </section>

      {/* -- Footer (minimal, theo.gg style) -- */}
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
