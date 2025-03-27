/* eslint-disable @typescript-eslint/no-unused-vars */

interface Skill {
  title: string;
  maxPoints: number;
  pointsAllocated: number;
  imageUrl: string;
  description: string;
}

interface ActionSkillOption {
  id?: number;
  title?: string;
  name?: string;
  description: string;
  imageUrl: string;
}

interface CharacterOptions {
  key: string;
  option: ActionSkillOption;
}

interface CharacterBuildData {
  skills: Skill[];
  options: CharacterOptions[];
}

interface Grenade {
  name: string;
  type: string;
  rarity: string;
  manufacturer: string;
  elements: string[];
  content: string;
  link: string;
  image: string;
  sources: { source: string; type: string; location: string }[];
}

interface ClassMod {
  rarity: string;
  name: string;
  class: string;
  content: string;
  sources: string;
  link: string;
  imageUrl: string;
}

interface Artifact {
  name: string;
  type: string;
  rarity: string;
  content: string;
  link: string;
  sources: { source: string; type: string; location: string }[];
}

interface BuildData {
  notes?: string;
  moze?: CharacterBuildData;
  fl4k?: CharacterBuildData;
  zane?: CharacterBuildData;
  amara?: CharacterBuildData;
  weapons?: Weapon[];
  shields?: Shield[];
  grenades?: { grenades: Grenade[] };
  classMods?: ClassMod[];
  artifacts?: Artifact[];
}
