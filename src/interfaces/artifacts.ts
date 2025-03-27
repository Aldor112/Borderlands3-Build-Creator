/* eslint-disable @typescript-eslint/no-unused-vars */

interface ArtifactSource {
  source: string;
  type: string;
  location: string;
}

interface Artifact {
  name: string;
  type: string;
  rarity: string;
  content: string;
  link: string;
  sources: ArtifactSource[];
}

interface ArtifactsData {
  artifacts: Artifact[];
}
