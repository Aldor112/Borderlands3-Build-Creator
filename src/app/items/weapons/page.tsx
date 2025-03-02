"use client";

import getWeapons from "@/actions/get-weapons";
import { useEffect, useState } from "react";

export default function PageWeapons() {
  const [weapons, setWeaponsData] = useState<any>(null);
  useEffect(() => {
    searchWeapons();
  }, []);

  const searchWeapons = () => {
    getWeapons().then((data) => {
      setWeaponsData(data);
    });
  };
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    if (search.length === 0) {
      searchWeapons();
      return;
    }
    const filteredWeapons = weapons.weapons.filter((weapon: any) =>
      weapon.name.toLowerCase().includes(search.toLowerCase())
    );
    setWeaponsData({ weapons: filteredWeapons });
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search weapon..."
          onChange={onSearchChange}
        />
      </div>
      <div className="mt-7">
        <table className="table-auto overflow-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Weapon type</th>
              <th>Manufacturer</th>
              <th>Elements</th>
              <th>Content</th>
              <th>Sources</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {weapons?.weapons ? (
              weapons.weapons.map((weapon: any, index: number) => (
                <tr key={index}>
                  <td className="flex gap-2">
                    <img
                      src={weapon.imageUrl}
                      alt={weapon.name}
                      width={80}
                      height={80}
                    />
                    <span>{weapon.name}</span>
                  </td>
                  <td>{weapon.type}</td>
                  <td>{weapon.manufacturer}</td>
                  <td>{weapon.elements.join(",")}</td>
                  <td>{weapon.content}</td>
                  <td>{weapon.sources.join(",")}</td>
                  <td>
                    <a
                      href={`${process.env.NEXT_PUBLIC_WEB_URL}${weapon.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See More
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function onSearchChange(event: Event | undefined) {
  throw new Error("Function not implemented.");
}
