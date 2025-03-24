"use client";

import getArtifacts from "@/actions/get-artifacts";
import SourceComponent from "@/components/source/source";
import { useEffect, useState } from "react";

export default function PageArtifacts({
  show,
  onSendArtifacts,
}: {
  show: boolean;
  onSendArtifacts?: any;
}) {
  const [selectedArtifact, setSelectedArtifact] = useState<any[]>([]);
  const [artifacts, setArtifactsData] = useState<any>(null);
  useEffect(() => {
    searchArtifacts();
  }, []);

  const searchArtifacts = () => {
    getArtifacts().then((data) => {
      setArtifactsData(data);
    });
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    if (search.length === 0) {
      searchArtifacts();
      return;
    }
    const filteredArtifacts = artifacts.artifacts.filter((artifact: any) =>
      artifact.name.toLowerCase().includes(search.toLowerCase())
    );
    setArtifactsData({ artifacts: filteredArtifacts });
  };

  const onAddArtifact = (artifact: any) => {
    const duplicate = selectedArtifact.find(
      (item) => item.name === artifact.name
    );

    if (duplicate) {
      return;
    }
    setSelectedArtifact([...selectedArtifact, artifact]);
  };

  const sendArtifact = () => {
    onSendArtifacts({ artifacts: selectedArtifact });
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search artifact..."
          onChange={onSearchChange}
        />
      </div>
      <div className="mt-7 ">
        <button onClick={sendArtifact}>Save</button>
        <table className="table-auto overflow-auto borderlands-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Artifact type</th>
              <th>Content</th>
              <th>Sources</th>
              <th></th>
              {show ? <th></th> : null}
            </tr>
          </thead>
          <tbody>
            {artifacts?.artifacts ? (
              artifacts.artifacts.map((artifact: any, index: number) => (
                <tr key={index}>
                  <td className="">{artifact.name}</td>
                  <td>{artifact.type}</td>
                  <td>{artifact.content}</td>
                  <td>{SourceComponent(artifact.sources)}</td>
                  <td>
                    <a
                      href={`${process.env.NEXT_PUBLIC_WEB_URL}${artifact.link}`}
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
                        onClick={() => onAddArtifact(artifact)}
                      >
                        add
                      </button>
                    </td>
                  ) : null}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center">
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
