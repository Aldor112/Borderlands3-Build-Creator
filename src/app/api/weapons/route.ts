import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const weapons = path.join(process.cwd(), "public/items", "weapons.json");

    const weaponsData = fs.readFileSync(weapons, "utf8");

    const data = JSON.parse(weaponsData);

    return NextResponse.json({
      weapons: data,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
