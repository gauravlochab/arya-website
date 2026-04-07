"use client";

import ThemeToggle from "../components/ThemeToggle";
import Reveal from "../components/Reveal";
import CustomCursor from "../components/CustomCursor";

const archSteps = [
  "Ingestion",
  "LLM Extraction",
  "BM25 Indexing",
  "Dense Embeddings",
  "Hybrid Retrieval",
  "ML Ranking",
  "FastAPI API",
];

export default function CaseStudies() {
  return (
    <main className="relative min-h-screen text-[var(--text)]">
      <CustomCursor />
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-5 pb-20 pt-8 sm:gap-20 sm:px-10 sm:pb-28 sm:pt-12">

        {/* ── Header ── */}
        <Reveal>
          <header className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
            <a href="/" className="text-lg font-semibold tracking-normal text-[var(--text)] nav-link">
              GL.
            </a>
            <div className="flex items-center gap-3 sm:gap-6">
              <ThemeToggle />
              <a href="/" className="nav-link text-muted">
                ← Back
              </a>
            </div>
          </header>
        </Reveal>

        {/* ── Hero ── */}
        <section>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted mb-3">Writing</div>
            <h1 className="text-2xl font-semibold text-[var(--text)] sm:text-3xl md:text-4xl leading-tight mb-4">
              Case Studies
            </h1>
            <p className="text-sm text-muted leading-relaxed max-w-xl">
              Engineering writeups from production AI systems.
            </p>
          </Reveal>
        </section>

        {/* ── Case Study 01 ── */}
        <section className="flex flex-col gap-12">
          <Reveal>
            <div className="flex flex-col gap-2 mb-8">
              <div className="text-xs uppercase tracking-[0.3em] text-muted">Case Study 01</div>
              <h2 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
                Building a Hybrid Resume Search Engine
              </h2>
              <p className="text-xs text-muted uppercase tracking-widest mt-1">
                Apolis · 2025–2026 · Enterprise Search · LLM Fine-Tuning
              </p>
            </div>
          </Reveal>

          <hr className="case-study-divider" />

          {/* Problem */}
          <Reveal>
            <div className="case-study-section">
              <div className="case-study-label">01 — Problem</div>
              <div className="case-study-content">
                <p>
                  Recruiters needed to search <strong>2.7M+ resumes</strong> to find the right candidates for job openings. Boolean keyword search — the standard approach — missed semantic matches. A query for "machine learning engineer" would skip candidates who wrote "ML researcher" or "deep learning specialist." At scale, this meant real candidates were invisible to the platform.
                </p>
                <p className="mt-3">
                  Scale added a second constraint: <strong>sub-second response times</strong> with high precision across millions of documents. The system needed to be fast enough for interactive search while being semantically rich enough to surface genuinely relevant candidates.
                </p>
              </div>
            </div>
          </Reveal>

          <hr className="case-study-divider" />

          {/* System Architecture */}
          <Reveal>
            <div className="case-study-section">
              <div className="case-study-label">02 — System Architecture</div>
              <div className="case-study-content">
                <p>
                  The system is a <strong>dual-index hybrid retrieval pipeline</strong> with an ML ranking layer on top. Each resume flows through extraction, gets indexed in two forms, and retrieval merges both signals before final ranking.
                </p>
              </div>
              <div className="arch-diagram-card mt-4">
                <div className="arch-diagram-title">Pipeline Architecture</div>
                <div className="arch-diagram-flow">
                  {archSteps.map((step, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <span className="arch-diagram-step">{step}</span>
                      {i < archSteps.length - 1 && (
                        <span className="arch-diagram-arrow">→</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <div className="case-study-content mt-4">
                <p>
                  <strong>Ingestion layer:</strong> Resumes arrive in multiple formats (PDF, DOCX, plain text). A preprocessing pipeline normalises formatting, strips noise, and segments documents into structured regions (skills, experience, education).
                </p>
                <p className="mt-3">
                  <strong>LLM extraction:</strong> A fine-tuned Qwen2.5-3B model extracts structured JSON from each resume — job titles, skills, years of experience, location, seniority level. This structured data feeds both the BM25 index (as keyword-rich fields) and the embedding model.
                </p>
                <p className="mt-3">
                  <strong>Dual indexing:</strong> Each resume is indexed in Elasticsearch as both a BM25 document (full-text and structured fields) and as a dense embedding vector. Hybrid retrieval queries both indexes in parallel and merges results using Reciprocal Rank Fusion (RRF).
                </p>
                <p className="mt-3">
                  <strong>ML ranking:</strong> A lightweight ranking model re-scores merged candidates using additional signals — skills overlap, experience match, location proximity, seniority alignment. Final results are returned ranked by composite score.
                </p>
              </div>
            </div>
          </Reveal>

          <hr className="case-study-divider" />

          {/* Engineering Challenges */}
          <Reveal>
            <div className="case-study-section">
              <div className="case-study-label">03 — Engineering Challenges</div>
              <div className="case-study-content">
                <p>
                  <strong>(a) Scale — indexing 2.7M documents.</strong> Processing millions of resumes synchronously is impractical. The solution was a batched async pipeline using Celery workers and Redis as the task queue. Documents are processed in parallel across worker nodes, with checkpointing to handle failures gracefully. The embedding generation step is the most expensive — batching with vLLM and using GPU concurrency cut per-document latency significantly.
                </p>
                <p className="mt-4">
                  <strong>(b) Extraction accuracy.</strong> Off-the-shelf LLMs (GPT-4, Claude) performed reasonably on clean resumes but degraded on noisy or non-standard formats. The solution was fine-tuning Qwen2.5-3B with QLoRA (4-bit NF4 quantization) using a teacher-student approach: GPT-4 generated high-quality structured extractions as training targets, and Qwen was fine-tuned to replicate this behavior at a fraction of the inference cost. The fine-tuned model consistently outperformed zero-shot GPT-3.5 on extraction precision.
                </p>
                <p className="mt-4">
                  <strong>(c) Ranking signal design.</strong> Retrieval returns candidates who are semantically similar to the query. Ranking determines which of those candidates actually fits the job. The ranking model blends: BM25 relevance score (keyword precision), embedding similarity (semantic match), structured field overlap (skills, role title, years of experience), and location signals. Weights were calibrated against a holdout set of recruiter-labeled candidate-job pairs.
                </p>
              </div>
            </div>
          </Reveal>

          <hr className="case-study-divider" />

          {/* My Contributions */}
          <Reveal>
            <div className="case-study-section">
              <div className="case-study-label">04 — My Contributions</div>
              <div className="case-study-content">
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    "End-to-end pipeline architecture — from ingestion through API layer",
                    "Fine-tuning pipeline: dataset curation, QLoRA training, evaluation harness",
                    "Elasticsearch schema design: field mappings, analyzers, index settings for scale",
                    "Hybrid retrieval implementation: BM25 + dense embedding fusion via RRF",
                    "Ranking model: feature engineering, training, calibration",
                    "FastAPI service layer: async endpoints, caching, rate limiting",
                  ].map((item, i) => (
                    <li key={i} style={{ fontSize: "0.82rem", lineHeight: "1.75", color: "var(--muted)", paddingLeft: "1rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontSize: "0.65rem", top: "0.2em" }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <hr className="case-study-divider" />

          {/* Results */}
          <Reveal>
            <div className="case-study-section">
              <div className="case-study-label">05 — Results</div>
              <div className="project-impact" style={{ maxWidth: "680px" }}>
                <strong style={{ color: "#4ade80" }}>2.7M+ resumes</strong> indexed and searchable in production. Measurably improved candidate-job matching accuracy compared to keyword-only baseline. Sub-second retrieval latency across the full corpus. Fine-tuned extraction model running at &lt;50ms per document on GPU.
              </div>
            </div>
          </Reveal>

          <hr className="case-study-divider" />

          {/* Lessons Learned */}
          <Reveal>
            <div className="case-study-section">
              <div className="case-study-label">06 — Lessons Learned</div>
              <div className="case-study-content">
                <p>
                  <strong>Hybrid always beats pure dense or pure sparse.</strong> Dense embeddings excel at semantic matching but struggle with exact keyword requirements (specific technologies, certifications, locations). BM25 handles precision well but misses paraphrases. Combining both and letting the ranking layer reconcile them consistently outperforms either alone.
                </p>
                <p className="mt-3">
                  <strong>Fine-tuned small models beat large zero-shot models for structured extraction.</strong> A 3B parameter model fine-tuned on domain-specific data produces more reliable structured outputs than a 70B model prompted zero-shot. Extraction tasks have clear right answers — fine-tuning exploits this. The added benefit is cost: a fine-tuned small model is orders of magnitude cheaper per inference.
                </p>
                <p className="mt-3">
                  <strong>Ranking signal design matters more than retrieval at scale.</strong> Once you have a retrieval system that surfaces a good candidate set, the quality difference comes from ranking. Investing in careful feature engineering and calibration against labeled data yields larger gains than further retrieval optimisation beyond a threshold of recall.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Footer ── */}
        <Reveal>
          <footer className="site-footer">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a href="/" className="text-lg font-semibold tracking-normal text-[var(--text)] nav-link">
                GL.
              </a>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-muted">
                <a href="mailto:gauravlochab487@gmail.com" className="nav-link">Email</a>
                <a href="https://github.com/gauravlochab" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
                <a href="https://www.linkedin.com/in/gauravlochab487/" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
                <a href="https://x.com/gauravlochab" target="_blank" rel="noopener noreferrer" className="nav-link">Twitter</a>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted">
              Gaurav Lochab · Delhi, India &copy; 2025
            </div>
          </footer>
        </Reveal>

      </div>
    </main>
  );
}
