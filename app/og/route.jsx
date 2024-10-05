import { ImageResponse } from "next/og";
import { join } from "path";
import { readFileSync } from "fs";

export const runtime = "edge";

export async function GET(req) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  // Read the background image as Base64
  const bgImagePath = join(process.cwd(), "public", "og-bg.jpg");
  const bgImageData = readFileSync(bgImagePath, { encoding: "base64" });

  // Fetch the font
  const font = fetch(
    new URL("../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(data:image/jpeg;base64,${bgImageData})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 130,
            fontFamily: "Kaisei Tokumin",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Kaisei Tokumin",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
