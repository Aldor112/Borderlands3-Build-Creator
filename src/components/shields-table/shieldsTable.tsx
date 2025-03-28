"use client";

import getShields from "@/actions/get-shields";
import { useEffect, useState } from "react";

export default function ShieldsTable({
  show,
  originalShields,
  onSendShield,
}: {
  show: boolean;
  originalShields?: ShieldsData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSendShield?: any;
}) {
  const [selectedShields, setSelectedShields] = useState<ShieldsData>({
    shields: [],
  });
  const [shields, setShieldsData] = useState<ShieldsData>(null);

  const searchShields = () => {
    if (originalShields) {
      setShieldsData(originalShields);
    } else {
      callApiShields();
    }
  };

  const callApiShields = () => {
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
    const filteredShields = shields.shields.filter((shield: Shield) =>
      shield.name.toLowerCase().includes(search.toLowerCase())
    );
    setShieldsData({ shields: filteredShields });
  };

  const onAddShield = (shield: Shield) => {
    const duplicate = selectedShields.shields.find(
      (item) => item.name === shield.name
    );

    if (duplicate) {
      return;
    }
    setSelectedShields({ shields: [...selectedShields.shields, shield] });
  };

  const sendShield = () => {
    onSendShield(selectedShields);
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search Shield..."
          onChange={onSearchChange}
        />
      </div>
      <div className="mt-7">
        {originalShields ? <button onClick={sendShield}>Save</button> : null}
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
            {shields?.shields ? (
              shields.shields.map((shield: Shield, index: number) => (
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
                  {show ? (
                    <td>
                      <button onClick={() => onAddShield(shield)}>Add</button>
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
