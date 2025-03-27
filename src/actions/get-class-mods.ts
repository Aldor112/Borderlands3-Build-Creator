"use server";
export default async function getClassMods(): Promise<ClassModsData> {
  const response = await fetch(`${process.env.WEB_URL}/class-mods`);
  const classMods = await response.json();
  return classMods;
}
