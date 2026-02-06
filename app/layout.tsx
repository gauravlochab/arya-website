import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Gaurav Lochab — AI Engineer",
  description:
    "AI Engineer specializing in production LLM systems, agent platforms, and RAG pipelines",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Gaurav Lochab — AI Engineer",
    description:
      "AI Engineer specializing in production LLM systems, agent platforms, and RAG pipelines"
  }
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
      </body>
    </html>
  );
}
