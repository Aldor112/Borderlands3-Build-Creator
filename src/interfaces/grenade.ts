interface GrenadeSource {
  source: string;
  type: string;
  location: string;
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
  sources: GrenadeSource[];
}

interface GrenadesData {
  grenades: {
    grenades: Grenade[];
  };
}
