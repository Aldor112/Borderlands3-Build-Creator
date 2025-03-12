"use client";
import PageArtifacts from "@/app/items/artifacts/page";
import PageClassMods from "@/app/items/class-mods/page";
import PageGrenades from "@/app/items/grenades/page";
import PageShield from "@/app/items/shields/page";
import PageWeapons from "@/app/items/weapons/page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function BuildsCreate() {
  const [buildData, setBuildData] = useState<any[]>([]);

  const handleBuildData = (data: any) => {
    setBuildData([...buildData, data]);
    console.log("data que me llega", data);
  };

  const handleDownload = () => {
    const data = JSON.stringify(buildData);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "build.json";
    a.click();
    a.remove();
  };
  return (
    <div>
      <button onClick={handleDownload}>descargar JSON</button>
      <Tabs className="w-full">
        <TabsList>
          <TabsTrigger value="skilltrees">SkillTrees</TabsTrigger>
          <TabsTrigger value="weapons">Weapons</TabsTrigger>
          <TabsTrigger value="shields">Shields</TabsTrigger>
          <TabsTrigger value="grenades">Grenades</TabsTrigger>
          <TabsTrigger value="class-mods">Class Mods</TabsTrigger>
          <TabsTrigger value="artifacts">Artifacts</TabsTrigger>
        </TabsList>
        <TabsContent value="weapons">
          <PageWeapons
            show={true}
            onSendWeapons={handleBuildData}
          ></PageWeapons>
        </TabsContent>
        <TabsContent value="shields">
          <PageShield show={true} onSendShield={handleBuildData}></PageShield>
        </TabsContent>
        <TabsContent value="grenades">
          <PageGrenades
            show={true}
            onSendGrenades={handleBuildData}
          ></PageGrenades>
        </TabsContent>
        <TabsContent value="class-mods">
          <PageClassMods
            show={true}
            onSendClassMods={handleBuildData}
          ></PageClassMods>
        </TabsContent>
        <TabsContent value="artifacts">
          <PageArtifacts
            show={true}
            onSendArtifacts={handleBuildData}
          ></PageArtifacts>
        </TabsContent>
        <TabsContent value="skilltrees">
          <div>SkillTrees</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
