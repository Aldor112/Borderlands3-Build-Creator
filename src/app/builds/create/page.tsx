"use client";
import PageArtifacts from "@/app/items/artifacts/page";
import PageClassMods from "@/app/items/class-mods/page";
import PageGrenades from "@/app/items/grenades/page";
import PageShield from "@/app/items/shields/page";
import PageWeapons from "@/app/items/weapons/page";
import AmaraSkilltree from "@/components/amara-skilltree/amaraSkilltree";
import Fl4kSkilltree from "@/components/fl4k-skilltree/fl4kSkilltree";
import MozeSkilltree from "@/components/moze-skilltree/mozeSkilltree";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ZaneSkilltree from "@/components/zane-skilltree/zaneSkilltree";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function BuildsCreate() {
  const [buildData, setBuildData] = useState<any[]>([]);
  const [fileName, setFileName] = useState<string>("");

  const handleBuildData = (data: any) => {
    setBuildData([...buildData, data]);
  };

  const handleDownload = () => {
    const data = JSON.stringify(buildData);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName || "build"}.json`;
    a.click();
    a.remove();
  };
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter build name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        />
        <button onClick={handleDownload}>Descargar Build en JSON</button>
      </div>
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
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>AMARA</AccordionTrigger>
              <AccordionContent>
                <AmaraSkilltree onSendAmaraData={handleBuildData} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>ZANE</AccordionTrigger>
              <AccordionContent>
                <ZaneSkilltree onSendZaneData={handleBuildData} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>MOZE</AccordionTrigger>
              <AccordionContent>
                <MozeSkilltree onSendMozeData={handleBuildData} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>FL4K</AccordionTrigger>
              <AccordionContent>
                <Fl4kSkilltree onSendFl4kData={handleBuildData} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}
