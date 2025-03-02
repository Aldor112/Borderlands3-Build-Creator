"use server";
export default async function getGrenades() {
  const response = await fetch(`${process.env.WEB_URL}/grenades`);
  const grenades = await response.json();
  return grenades;
}
