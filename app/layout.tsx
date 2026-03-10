import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gaurav.gg"),
  title: "Gaurav Lochab — AI Engineer",
  description:
    "AI Engineer specializing in production LLM systems, agent platforms, and RAG pipelines",
  openGraph: {
    title: "Gaurav Lochab — AI Engineer",
    description:
      "AI Engineer specializing in production LLM systems, agent platforms, and RAG pipelines",
    url: "https://gaurav.gg",
    type: "website",
    siteName: "Gaurav Lochab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Lochab — AI Engineer",
    description:
      "AI Engineer specializing in production LLM systems, agent platforms, and RAG pipelines",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plexMono.variable}>
      <body>
        <div className="page">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
