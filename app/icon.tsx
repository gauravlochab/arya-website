import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#05060f",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#f3f4f6",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "monospace",
            letterSpacing: -1,
          }}
        >
          GL
        </span>
      </div>
    ),
    { ...size }
  );
}
