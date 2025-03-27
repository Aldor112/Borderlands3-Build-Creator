"use server";
export default async function getGrenades(): Promise<GrenadesData> {
  const response = await fetch(`${process.env.WEB_URL}/grenades`);
  const grenades = await response.json();
  return grenades;
}
