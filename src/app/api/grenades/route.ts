import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const grenades = path.join(process.cwd(), "public/items", "grenades.json");

    const grenadesData = fs.readFileSync(grenades, "utf8");

    const data = JSON.parse(grenadesData);

    return NextResponse.json({
      grenades: data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
