/* eslint-disable @typescript-eslint/no-unused-vars */

interface Weapon {
  name: string;
  type: WeaponType;
  manufacturer: Manufacturer;
  elements: WeaponElement[];
  content: string;
  sources: string[];
  locations: string[];
  rarity: Rarity;
  link: string;
  imageUrl: string;
}

type WeaponType =
  | "SMG"
  | "Pistol"
  | "Sniper"
  | "Launcher"
  | "Assault Rifle"
  | "Shotgun";

type Manufacturer =
  | "DAHL"
  | "Maliwan"
  | "COV"
  | "Torgue"
  | "Jakobs"
  | "Tediore"
  | "Hyperion"
  | "Atlas"
  | "Vladof"
  | "Eridian";

type WeaponElement =
  | "non-elemental"
  | "fire"
  | "shock"
  | "corrosive"
  | "cryo"
  | "radiation";

type Rarity =
  | "f-legendary"
  | "d-epic"
  | "c-rare"
  | "Uncommon"
  | "Legendary"
  | "Epic"
  | "Rare";

interface WeaponsResponse {
  weapons: Weapon[];
}
