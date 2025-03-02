"use server";
export default async function getArtifacts() {
  const response = await fetch(`${process.env.WEB_URL}/artifacts`);
  const artifacts = await response.json();
  return artifacts;
}
