/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

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
            background:
              "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          Braden{" "}
          <span style={{ color: "3B82F6", fontFamily: "serif" }}>Hirschi</span>
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
