"use server";
export default async function getShields(): Promise<ShieldsData> {
  const response = await fetch(`${process.env.WEB_URL}/shields`);
  const shields = await response.json();
  return shields;
}
