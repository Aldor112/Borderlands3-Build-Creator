interface SkillTree {
  skillTreeName: string;
  skills: Skill[];
}

interface Skill {
  title: string;
  maxPoints: number;
  imageUrl: string;
  description: string;
}

interface ActionSkill {
  id?: number;
  title?: string;
  name?: string;
  description: string;
  imageUrl: string;
}

interface Augment {
  actionSkillId?: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface Element {
  title: string;
  description: string;
  imageUrl: string;
}

interface Pet {
  title: string;
  description: string;
  imageUrl: string;
}

interface CharacterAbilities {
  abilities: SkillTree[];
  actionSkills: ActionSkill[];
  augments: Augment[];
  elements?: Element[];
  pets?: Pet[];
}

interface SkillTreeData {
  amara: CharacterAbilities;
  zane: CharacterAbilities;
  moze: CharacterAbilities;
  fl4k: CharacterAbilities;
}
