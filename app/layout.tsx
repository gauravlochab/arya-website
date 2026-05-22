import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const DESCRIPTION =
  "AI Engineer specializing in production LLM systems, agent platforms, and RAG pipelines";

export const metadata: Metadata = {
  metadataBase: new URL("https://gaurav.gg"),
  title: "Gaurav Lochab — AI Engineer",
  description: DESCRIPTION,
  alternates: {
    canonical: "https://gaurav.gg",
  },
  openGraph: {
    title: "Gaurav Lochab — AI Engineer",
    description: DESCRIPTION,
    url: "https://gaurav.gg",
    type: "website",
    siteName: "Gaurav Lochab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Lochab — AI Engineer",
    description: DESCRIPTION,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gaurav Lochab",
  url: "https://gaurav.gg",
  jobTitle: "AI Engineer",
  description: DESCRIPTION,
  sameAs: [
    "https://github.com/gauravlochab",
    "https://www.linkedin.com/in/gauravlochab487/",
    "https://x.com/gauravlochab",
  ],
  knowsAbout: [
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "AI Agents",
    "LLM Fine-Tuning",
    "Machine Learning Infrastructure",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plexMono.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if('scrollRestoration' in history) history.scrollRestoration = 'manual'; window.scrollTo(0,0);`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <Preloader />
        <SmoothScroll />
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
