import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sediment - The Budgeting Card";
export const contentType = "image/png";

export default async function OG() {
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
          backgroundColor: "#18181b",
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            color: "white",
            letterSpacing: "-0.02em",
          }}
        >
          Braden{" "}
          <span style={{ color: "#3B82F6", fontFamily: "serif" }}>Hirschi</span>
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
