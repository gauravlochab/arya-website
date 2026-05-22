import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    company: "Apolis",
    role: "Senior AI / Machine Learning Engineer",
    period: "Oct 2025 – Present",
    location: "Remote",
    highlights: [
      "Architected an end-to-end ML retrieval and ranking platform in Python across 2.7M+ candidate resumes, using Elasticsearch BM25, dense embeddings, and distributed scoring pipelines.",
      "Built containerized embedding-driven semantic search APIs using vLLM inference and FastAPI, deployed on Docker with semantic scoring, synonym expansion, and guided JSON generation.",
      "Designed MLOps pipelines for resume and job description extraction at scale, including evaluation frameworks benchmarking field accuracy, reasoning consistency, and hallucination detection across model versions.",
      "Designed a two-stage retrieval and ranking system combining high-recall search with ML scoring across skill overlap, role similarity, and experience alignment, significantly improving relevance.",
      "Fine-tuned Qwen2.5 Instruct models using QLoRA (4-bit NF4 quantization) and implemented teacher–student distillation pipelines to improve extraction accuracy while reducing inference cost and latency.",
    ],
  },
  {
    company: "Valory",
    role: "Senior AI Developer",
    period: "Sep 2023 – Oct 2025",
    location: "Remote",
    highlights: [
      "Built distributed autonomous agent systems in Python for portfolio management, scaling to 5M+ requests and $10M+ managed assets with <200ms latency.",
      "Engineered LangGraph-based ML pipelines with state-machine orchestration and Apache Airflow for production scheduling, integrating GPT-4, Claude, and fine-tuned Llama models.",
      "Operated production AI infrastructure with CI/CD pipelines, containerized deployment, and observability across multi-protocol blockchain integrations.",
    ],
  },
  {
    company: "Pibit.ai",
    role: "Founding Team / Machine Learning",
    period: "Jun 2020 – Aug 2023",
    location: "Gurugram, India",
    highlights: [
      "Built Python-based ETL pipelines for large-scale document processing on AWS, improving throughput by 30% while reducing processing errors by 25%.",
      "Developed document intelligence pipelines using NLP and computer vision, improving structured data extraction accuracy by 35%, deployed via Docker, AWS Lambda, and SageMaker.",
      "Designed and deployed fraud detection systems combining supervised anomaly detection, unsupervised clustering, and rule-based pattern analysis, with containerized APIs on AWS.",
    ],
  },
];
