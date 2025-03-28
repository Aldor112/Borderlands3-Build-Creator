"use client";

import getArtifacts from "@/actions/get-artifacts";
import { useEffect, useState } from "react";
import SourceComponent from "../source/source";

export default function ArtifactsTable({
  show,
  originalArtifacts,
  onSendArtifacts,
}: {
  show: boolean;
  originalArtifacts?: ArtifactsData;
  onSendArtifacts?: (data: ArtifactsData) => void;
}) {
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactsData>({
    artifacts: [],
  });
  const [artifacts, setArtifactsData] = useState<ArtifactsData>(null);
  useEffect(() => {
    searchArtifacts();
  }, []);

  const searchArtifacts = () => {
    if (originalArtifacts) {
      setArtifactsData(originalArtifacts);
    } else {
      callApiArtifacts();
    }
  };

  const callApiArtifacts = () => {
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
    const filteredArtifacts = artifacts.artifacts.filter((artifact: Artifact) =>
      artifact.name.toLowerCase().includes(search.toLowerCase())
    );
    setArtifactsData({ artifacts: filteredArtifacts });
  };

  const onAddArtifact = (artifact: Artifact) => {
    const duplicate = selectedArtifact.artifacts.find(
      (item) => item.name === artifact.name
    );

    if (duplicate) {
      return;
    }
    setSelectedArtifact({
      artifacts: [...selectedArtifact.artifacts, artifact],
    });
  };

  const sendArtifact = () => {
    onSendArtifacts(selectedArtifact);
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
        {originalArtifacts ? (
          <button onClick={sendArtifact}>Save</button>
        ) : null}
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
              artifacts.artifacts.map((artifact: Artifact, index: number) => (
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
                        Add
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
