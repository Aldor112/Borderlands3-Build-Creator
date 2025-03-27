"use client";
import BorderlandsDropbox from "@/components/dropbox/dropbox";
import ViewBuildData from "@/components/view-build-data/viewBuildData";
import { useState } from "react";

export default function BuildsView() {
  const [buildData, setBuildData] = useState<BuildData>();
  const handleFileRead = (data: BuildData[]) => {
    const dataConverted = data.reduce(
      (acc: BuildData, item: BuildData) => ({ ...acc, ...item }),
      {}
    );
    setBuildData(dataConverted);
  };

  return buildData ? (
    <ViewBuildData
      weapons={buildData.weapons}
      shields={buildData.shields}
      grenades={buildData.grenades}
      class_mods={buildData.classMods}
      artifacts={buildData.artifacts}
      options={
        buildData?.zane?.options ||
        buildData?.moze?.options ||
        buildData?.fl4k?.options ||
        buildData?.amara?.options
      }
      skills={
        buildData?.zane?.skills ||
        buildData?.moze?.skills ||
        buildData?.fl4k?.skills ||
        buildData?.amara?.skills
      }
      notes={buildData?.notes}
    />
  ) : (
    <div className="max-w-2xl mx-auto p-4">
      <h1
        className="text-2xl font-bold text-[#f4d03f] mb-6"
        style={{ fontFamily: "Impact" }}
      >
        Upload Your Build JSON File
      </h1>
      <BorderlandsDropbox onFileRead={handleFileRead} />
    </div>
  );
}
