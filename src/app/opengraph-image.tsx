import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "pod.brussels"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #ffffff, #f0f9f4)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Heart Icon SVG */}
        <div
          style={{
            display: "flex",
            marginBottom: "40px",
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              fill="#22c55e"
            />
          </svg>
        </div>

        {/* Brand Name */}
        <div
          style={{
            display: "flex",
            fontSize: "96px",
            fontWeight: "bold",
            color: "#147d3f",
            letterSpacing: "-0.02em",
            marginBottom: "20px",
          }}
        >
          pod.brussels
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: "32px",
            color: "#4a5568",
            fontWeight: "500",
          }}
        >
          Free subdomains for community projects
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
