"use client";
import getGrenades from "@/actions/get-grenades";
import SourceComponent from "@/components/source/source";
import { useEffect, useState } from "react";
export default function GrenadesTable({
  show,
  originalGrenades,
  onSendGrenades,
}: {
  show: boolean;
  originalGrenades?: GrenadesData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSendGrenades?: any;
}) {
  const [selectedGrenades, setSelectedGrenades] = useState<GrenadesData>({
    grenades: { grenades: [] },
  });
  const [grenades, setGrenades] = useState<GrenadesData>(null);
  useEffect(() => {
    searchGrenades();
  }, []);

  const searchGrenades = () => {
    if (originalGrenades) {
      setGrenades(originalGrenades);
    } else {
      callApiGrenades();
    }
  };

  const callApiGrenades = () => {
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

    const filteredGrenades = grenades.grenades.grenades.filter(
      (grenade: Grenade) =>
        grenade.name.toLowerCase().includes(search.toLowerCase())
    );
    setGrenades({ grenades: { grenades: filteredGrenades } });
  };

  const onAddGrenades = (grenade: Grenade) => {
    const duplicate = selectedGrenades.grenades.grenades.find(
      (item) => item.name === grenade.name
    );

    if (duplicate) {
      return;
    }

    setSelectedGrenades({
      grenades: {
        grenades: [...selectedGrenades.grenades.grenades, grenade],
      },
    });
  };

  const sendGrenades = () => {
    onSendGrenades(selectedGrenades);
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
        {originalGrenades ? <button onClick={sendGrenades}>Save</button> : null}
        <table className="table-auto overflow-auto borderlands-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Content</th>
              <th>Manufacturers</th>
              <th>Elements</th>
              <th>Sources</th>
              <th></th>
              {show ? <th></th> : null}
            </tr>
          </thead>
          <tbody>
            {grenades?.grenades ? (
              grenades.grenades.grenades.map(
                (grenade: Grenade, index: number) => (
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
                    {show ? (
                      <td>
                        <button
                          className=""
                          onClick={() => onAddGrenades(grenade)}
                        >
                          Add
                        </button>
                      </td>
                    ) : null}
                  </tr>
                )
              )
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
