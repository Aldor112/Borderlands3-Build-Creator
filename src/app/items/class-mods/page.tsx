"use client";
import getClassMods from "@/actions/get-class-mods";
import { useEffect, useState } from "react";

export default function PageClassMods({
  show,
  originalClassMods,
  onSendClassMods,
}: {
  show: boolean;
  originalClassMods: ClassModsData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSendClassMods?: any;
}) {
  const [selectedClassMods, setSelectedClassMods] = useState<ClassModsData>({
    classMods: [],
  });
  const [class_mods, setClassMods] = useState<ClassModsData>(null);
  useEffect(() => {
    searchClassMods();
  }, []);

  const searchClassMods = () => {
    originalClassMods ? setClassMods(originalClassMods) : callApiClassMods();
  };

  const callApiClassMods = () => {
    getClassMods().then((data) => {
      setClassMods(data);
    });
  };
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    if (search.length === 0) {
      searchClassMods();
      return;
    }

    const filteredClassMods = class_mods.classMods.filter(
      (class_mod: ClassMod) =>
        class_mod.name.toLowerCase().includes(search.toLowerCase())
    );
    setClassMods({ classMods: filteredClassMods });
  };

  const onAddClassMods = (class_mod: ClassMod) => {
    const duplicate = selectedClassMods.classMods.find(
      (item) => item.name === class_mod.name
    );

    if (duplicate) {
      return;
    }

    setSelectedClassMods({
      ...selectedClassMods,
      classMods: [...selectedClassMods.classMods, class_mod],
    });
  };

  const sendClassMods = () => {
    onSendClassMods(selectedClassMods);
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search class mods..."
          onChange={onSearchChange}
        />
      </div>
      <div className="mt-7">
        {originalClassMods ? (
          <button onClick={sendClassMods}>Save</button>
        ) : null}
        <table className="table-auto overflow-auto borderlands-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Content</th>
              <th>Sources</th>
              <th></th>
              {show ? <th></th> : null}
            </tr>
          </thead>
          <tbody>
            {class_mods?.classMods ? (
              class_mods?.classMods.map(
                (class_mod: ClassMod, index: number) => (
                  <tr key={index}>
                    <td className="flex gap-2">
                      <img
                        src={class_mod.imageUrl}
                        alt={class_mod.name}
                        width={30}
                        height={30}
                      />
                      {class_mod.name}
                    </td>
                    <td>{class_mod.class}</td>
                    <td>{class_mod.content}</td>
                    <td>{class_mod.sources}</td>
                    <td>
                      <a
                        href={`${process.env.NEXT_PUBLIC_WEB_URL}${class_mod.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See More
                      </a>
                    </td>
                    {show ? (
                      <td>
                        <button
                          className=""
                          onClick={() => onAddClassMods(class_mod)}
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
