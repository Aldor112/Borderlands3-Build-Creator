"use server";
export default async function getSkilltrees(): Promise<SkillTreeData> {
  const response = await fetch(`${process.env.WEB_URL}/skilltrees`);
  const skilltrees = await response.json();
  return skilltrees;
}
