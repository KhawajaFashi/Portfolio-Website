import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

// Image metadata sizes (standard for modern browser tabs)
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
  // Read local profile photo to ensure fast, reliable generation without external requests
  const imagePath = path.join(process.cwd(), "public", "DSC_9812.jpg");
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <img
          src={base64Image}
          alt="Khawaja Fashi"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #6366F1", // Sleek Indigo border
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
