import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Gaurav Lochab — AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontData = await fetch(
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap"
  ).then((res) => res.text());

  // Extract the font file URL from the CSS
  const fontUrlMatch = fontData.match(
    /src: url\((https:\/\/fonts\.gstatic\.com\/s\/ibmplexmono\/[^)]+wght@400[^)]*)\)/
  );

  const fontUrl = fontUrlMatch
    ? fontUrlMatch[1]
    : "https://fonts.gstatic.com/s/ibmplexmono/v19/-F6qfjptAgt5VM-kVkqdyU8n1iIq131nj-o.woff2";

  const fontBuffer = await fetch(fontUrl).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: '"IBM Plex Mono", monospace',
          background: "#05060f",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(56, 80, 120, 0.15) 0%, transparent 70%)",
          }}
        />

        {/* GL. logo top-left */}
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "80px",
            fontSize: "24px",
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "-0.5px",
          }}
        >
          GL.
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Gaurav Lochab
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "#9aa3b2",
              letterSpacing: "0px",
              lineHeight: 1.4,
            }}
          >
            AI Engineer — Agents, Swarms & LLM Infrastructure
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "IBM Plex Mono",
          data: fontBuffer,
          style: "normal",
          weight: 400,
        },
        {
          name: "IBM Plex Mono",
          data: fontBuffer,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
