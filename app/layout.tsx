import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaurav Lochab",
  description: "AI Engineer focused on LLM systems",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
