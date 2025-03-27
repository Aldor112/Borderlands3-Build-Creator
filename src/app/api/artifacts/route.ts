import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const artifacts = path.join(
      process.cwd(),
      "public/items",
      "artifacts.json"
    );

    const artifactsData = fs.readFileSync(artifacts, "utf8");

    const data = JSON.parse(artifactsData);

    return NextResponse.json({
      artifacts: data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
