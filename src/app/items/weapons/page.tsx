"use client";

import getWeapons from "@/actions/get-weapons";
import { useEffect, useState } from "react";

export default function PageWeapons({
  show,
  originalWeapons,
  onSendWeapons,
}: {
  show: boolean;
  originalWeapons: any;
  onSendWeapons?: any;
}) {
  const [selectedWeapons, setSelectedWeaponsData] = useState<any[]>([]);
  const [weapons, setWeaponsData] = useState<any>(null);

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
    const filteredWeapons = weapons.weapons.filter((weapon: any) =>
      weapon.name.toLowerCase().includes(search.toLowerCase())
    );
    setWeaponsData({ weapons: filteredWeapons });
  };

  const onAddWeapon = (weapon: any) => {
    const duplicate = selectedWeapons.find((item) => item.name === weapon.name);

    if (duplicate) {
      return;
    }

    setSelectedWeaponsData([...selectedWeapons, weapon]);
  };

  const sendWeapons = () => {
    onSendWeapons({ weapons: selectedWeapons });
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
        <button onClick={sendWeapons}>Save</button>
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
                  {show ? (
                    <td>
                      <button onClick={() => onAddWeapon(weapon)}> add</button>
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
function onSearchChange(event: Event | undefined) {
  throw new Error("Function not implemented.");
}
