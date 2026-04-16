"use client";

import { useCallback, useRef } from "react";

interface Project {
  name: string;
  company: string;
  year: string;
  domain: string;
  tags: string[];
  hoverColor: string;
  colorScheme: "dark" | "light"; // text color on hover: dark = white text, light = dark text
}

// Color changes every 2 rows — 4 distinct color zones
const PAIR_COLORS: { color: string; scheme: "dark" | "light" }[] = [
  { color: "#5d39b9", scheme: "dark" },   // purple — rows 1-2
  { color: "#009adf", scheme: "dark" },   // blue — rows 3-4
  { color: "#E8785B", scheme: "light" },  // coral — rows 5-6
  { color: "#206f31", scheme: "dark" },   // green — rows 7-8
];

const PROJECTS: Project[] = [
  {
    name: "Hybrid Resume Search Platform",
    company: "Apolis",
    year: "2026",
    domain: "Enterprise",
    tags: ["#llm", "#search", "#fine-tuning", "#elasticsearch"],
    hoverColor: PAIR_COLORS[0].color,
    colorScheme: PAIR_COLORS[0].scheme,
  },
  {
    name: "Long Document LLM Extraction",
    company: "Apolis",
    year: "2025",
    domain: "Enterprise",
    tags: ["#fine-tuning", "#nlp", "#llm", "#qlora"],
    hoverColor: PAIR_COLORS[0].color,
    colorScheme: PAIR_COLORS[0].scheme,
  },
  {
    name: "Autonomous DeFi Agent System",
    company: "Valory",
    year: "2024-2025",
    domain: "Autonomous",
    tags: ["#agents", "#langgraph", "#on-chain", "#defi"],
    hoverColor: PAIR_COLORS[1].color,
    colorScheme: PAIR_COLORS[1].scheme,
  },
  {
    name: "RAG Intelligence Platform",
    company: "Smarter",
    year: "2022-2024",
    domain: "Enterprise",
    tags: ["#rag", "#llm", "#qdrant", "#reranking"],
    hoverColor: PAIR_COLORS[1].color,
    colorScheme: PAIR_COLORS[1].scheme,
  },
  {
    name: "Invoice AI Agents",
    company: "Apolis",
    year: "2025",
    domain: "Healthcare",
    tags: ["#agents", "#llm", "#validation", "#auditing"],
    hoverColor: PAIR_COLORS[2].color,
    colorScheme: PAIR_COLORS[2].scheme,
  },
  {
    name: "Fashion Sales Forecasting",
    company: "Smarter",
    year: "2023",
    domain: "Retail",
    tags: ["#clip", "#gpt-3", "#embeddings", "#forecasting"],
    hoverColor: PAIR_COLORS[2].color,
    colorScheme: PAIR_COLORS[2].scheme,
  },
  {
    name: "Document AI Extraction",
    company: "Pibit.ai",
    year: "2020-2022",
    domain: "Fintech",
    tags: ["#nlp", "#cv", "#aws", "#sagemaker"],
    hoverColor: PAIR_COLORS[3].color,
    colorScheme: PAIR_COLORS[3].scheme,
  },
  {
    name: "Tax Fraud Detection",
    company: "Pibit.ai",
    year: "2021",
    domain: "Fintech",
    tags: ["#anomaly-detection", "#clustering", "#ml"],
    hoverColor: PAIR_COLORS[3].color,
    colorScheme: PAIR_COLORS[3].scheme,
  },
];

export default function ProjectsTable() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const savedSchemeRef = useRef<string | null>(null);

  const handleMouseEnter = useCallback((project: Project) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1024) return;

    const page = document.querySelector(".page") as HTMLElement;
    if (!page) return;

    // Save the current color scheme
    savedSchemeRef.current = page.getAttribute("data-hover-scheme");

    // Set the hover background on the page wrapper
    page.style.background = project.hoverColor;
    page.setAttribute("data-hover-scheme", project.colorScheme);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 1024) return;

    const page = document.querySelector(".page") as HTMLElement;
    if (!page) return;

    // Remove inline background — reverts to CSS default
    page.style.background = "";
    page.removeAttribute("data-hover-scheme");
  }, []);

  return (
    <div ref={wrapperRef} className="portfolio-table-wrap">
      <table className="portfolio-table">
        <thead>
          <tr>
            <th className="portfolio-th-num">#</th>
            <th className="portfolio-th-client">Client</th>
            <th className="portfolio-th-year">Year</th>
            <th className="portfolio-th-tags">Tags</th>
            <th className="portfolio-th-domain">Domain</th>
            <th className="portfolio-th-arrow"></th>
          </tr>
        </thead>
        <tbody>
          {PROJECTS.map((project, idx) => (
            <tr
              key={project.name}
              className="portfolio-row"
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave}
            >
              <td className="portfolio-cell-num">
                {String(idx + 1).padStart(2, "0")}
              </td>
              <td className="portfolio-cell-client">
                <span className="portfolio-project-name">{project.name}</span>
                <span className="portfolio-company-name">{project.company}</span>
              </td>
              <td className="portfolio-cell-year">{project.year}</td>
              <td className="portfolio-cell-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="portfolio-tag">{tag}</span>
                ))}
              </td>
              <td className="portfolio-cell-domain">{project.domain}</td>
              <td className="portfolio-cell-arrow">
                <span className="portfolio-arrow">&rarr;</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
