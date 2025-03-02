"use client";

import getGrenades from "@/actions/get-grenades";
import SourceComponent from "@/components/source/source";
import { useEffect, useState } from "react";

export default function PageGrenades() {
  const [grenades, setGrenades] = useState<any>(null);
  useEffect(() => {
    searchGrenades();
  }, []);

  const searchGrenades = () => {
    getGrenades().then((data) => {
      setGrenades(data);
    });
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    if (search.length === 0) {
      searchGrenades();
      return;
    }

    const filteredGrenades = grenades.grenades.grenades.filter((grenade: any) =>
      grenade.name.toLowerCase().includes(search.toLowerCase())
    );
    setGrenades({ grenades: { grenades: filteredGrenades } });
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search grenades..."
          onChange={onSearchChange}
        />
      </div>
      <div className="mt-7">
        <table className="table-auto overflow-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Content</th>
              <th>Manufacturers</th>
              <th>Elements</th>
              <th>Sources</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {grenades?.grenades ? (
              grenades.grenades.grenades.map((grenade: any, index: number) => (
                <tr key={index}>
                  <td className="flex gap-2">
                    <img
                      src={grenade.image}
                      alt={grenade.name}
                      width={30}
                      height={30}
                    />
                    {grenade.name}
                  </td>
                  <td>{grenade.content}</td>
                  <td>{grenade.manufacturer}</td>
                  <td>{grenade.elements.join(",")}</td>
                  <td>{SourceComponent(grenade.sources)}</td>
                  <td>
                    <a
                      href={`${process.env.NEXT_PUBLIC_WEB_URL}${grenade.link}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      See more
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
