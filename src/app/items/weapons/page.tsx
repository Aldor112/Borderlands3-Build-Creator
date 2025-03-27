"use client";

import getWeapons from "@/actions/get-weapons";
import { useEffect, useState } from "react";

export default function PageWeapons({
  show,
  originalWeapons,
  onSendWeapons,
}: {
  show: boolean;
  originalWeapons: WeaponsResponse;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSendWeapons?: any;
}) {
  const [selectedWeapons, setSelectedWeaponsData] = useState<WeaponsResponse>({
    weapons: [],
  });
  const [weapons, setWeaponsData] = useState<WeaponsResponse>(null);

  useEffect(() => {
    searchWeapons();
  }, []);

  const searchWeapons = () => {
    originalWeapons ? setWeaponsData(originalWeapons) : callApiWeapons();
  };

  const callApiWeapons = () => {
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
    const filteredWeapons = weapons.weapons.filter((weapon: Weapon) =>
      weapon.name.toLowerCase().includes(search.toLowerCase())
    );
    setWeaponsData({ weapons: filteredWeapons });
  };

  const onAddWeapon = (weapon: Weapon) => {
    const duplicate = selectedWeapons.weapons.find(
      (item) => item.name === weapon.name
    );

    if (duplicate) {
      return;
    }

    setSelectedWeaponsData({ weapons: [...selectedWeapons.weapons, weapon] });
  };

  const sendWeapons = () => {
    onSendWeapons(selectedWeapons);
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
        {originalWeapons ? <button onClick={sendWeapons}>Save</button> : null}
        <table className="table-auto overflow-auto borderlands-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Weapon type</th>
              <th>Manufacturer</th>
              <th>Elements</th>
              <th>Content</th>
              <th>Sources</th>
              <th></th>
              {show ? <th></th> : null}
            </tr>
          </thead>
          <tbody>
            {weapons?.weapons ? (
              weapons.weapons.map((weapon: Weapon, index: number) => (
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
                  {show ? (
                    <td>
                      <button onClick={() => onAddWeapon(weapon)}>Add</button>
                    </td>
                  ) : null}
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
