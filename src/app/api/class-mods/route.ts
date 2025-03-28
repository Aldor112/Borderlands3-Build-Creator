import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const classMods = path.join(
      process.cwd(),
      "public/items",
      "class-mods.json"
    );

    const classModsData = fs.readFileSync(classMods, "utf8");

    const data = JSON.parse(classModsData);

    return NextResponse.json({
      classMods: data,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
