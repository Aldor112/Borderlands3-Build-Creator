import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const amaraSkills = path.join(
      process.cwd(),
      "public/skilltrees",
      "amara-skilltree.json"
    );
    const zaneSkills = path.join(
      process.cwd(),
      "public/skilltrees",
      "zane-skilltree.json"
    );
    const mozeSkills = path.join(
      process.cwd(),
      "public/skilltrees",
      "moze-skilltree.json"
    );
    const fl4kSkills = path.join(
      process.cwd(),
      "public/skilltrees",
      "fl4k-skilltree.json"
    );

    const amara = fs.readFileSync(amaraSkills, "utf8");
    const zane = fs.readFileSync(zaneSkills, "utf8");
    const moze = fs.readFileSync(mozeSkills, "utf8");
    const fl4k = fs.readFileSync(fl4kSkills, "utf8");

    const dataAmara = JSON.parse(amara);
    const dataZane = JSON.parse(zane);
    const dataMoze = JSON.parse(moze);
    const dataFl4k = JSON.parse(fl4k);

    return NextResponse.json({
      amara: dataAmara,
      zane: dataZane,
      moze: dataMoze,
      fl4k: dataFl4k,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
