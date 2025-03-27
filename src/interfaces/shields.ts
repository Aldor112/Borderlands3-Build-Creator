interface Shield {
  name: string;
  rarity: string;
  type: string;
  manufacturer: string;
  elements: string[];
  content: string;
  sources: string[];
  locations: string[];
  link: string;
  imageUrl: string;
}

interface ShieldsData {
  shields: Shield[];
}
