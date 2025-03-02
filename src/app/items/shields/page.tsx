"use client";

import getShields from "@/actions/get-shields";
import { useEffect, useState } from "react";

export default function PageShield() {
  const [shields, setShieldsData] = useState<any>(null);
  const searchShields = () => {
    getShields().then((data) => {
      setShieldsData(data);
    });
  };
  useEffect(() => {
    searchShields();
  }, []);
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    if (search.length === 0) {
      searchShields();
      return;
    }
    const filteredShields = shields.shields.filter((weapon: any) =>
      weapon.name.toLowerCase().includes(search.toLowerCase())
    );
    setShieldsData({ shields: filteredShields });
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
            {shields?.shields ? (
              shields.shields.map((shield: any, index: number) => (
                <tr key={index}>
                  <td className="flex gap-2 ">
                    <img
                      src={shield.imageUrl}
                      alt={shield.name}
                      width={60}
                      height={60}
                    />{" "}
                    {shield.name}
                  </td>
                  <td>{shield.type}</td>
                  <td>{shield.manufacturer}</td>
                  <td>{shield.elements.join(", ")}</td>
                  <td>{shield.content}</td>
                  <td>{shield.sources.join(", ")}</td>
                  <td>
                    <a
                      href={`${process.env.NEXT_PUBLIC_WEB_URL}${shield.link}`}
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
