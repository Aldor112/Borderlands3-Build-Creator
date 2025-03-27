import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const shields = path.join(process.cwd(), "public/items", "shields.json");

    const shieldsData = fs.readFileSync(shields, "utf8");

    const data = JSON.parse(shieldsData);

    return NextResponse.json({
      shields: data,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
