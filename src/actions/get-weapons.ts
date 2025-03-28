"use server";
export default async function getWeapons(): Promise<WeaponsResponse> {
  const response = await fetch(`${process.env.WEB_URL}/weapons`);
  const weapons = await response.json();
  return weapons;
}
