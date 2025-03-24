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
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import getWeapons from "@/actions/get-weapons";
import getShields from "@/actions/get-shields";
import getGrenades from "@/actions/get-grenades";
import getClassMods from "@/actions/get-class-mods";
import getArtifacts from "@/actions/get-artifacts";
export default function BuildsCreate() {
  const [buildData, setBuildData] = useState<any[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [weapons, setWeaponsData] = useState<any>(null);
  const [shields, setShieldsData] = useState<any>(null);
  const [grenades, setGrenades] = useState<any>(null);
  const [class_mods, setClassMods] = useState<any>(null);
  const [artifacts, setArtifactsData] = useState<any>(null);

  const searchArtifacts = () => {
    getArtifacts().then((data) => {
      setArtifactsData(data);
    });
  };

  const searchShields = () => {
    getShields().then((data) => {
      setShieldsData(data);
    });
  };

  const searchGrenades = () => {
    getGrenades().then((data) => {
      setGrenades(data);
    });
  };

  const searchClassMods = () => {
    getClassMods().then((data) => {
      setClassMods(data);
    });
  };

  const handleBuildData = (data: any) => {
    setBuildData([...buildData, data]);
  };

  useEffect(() => {
    searchWeapons();
    searchShields();
    searchGrenades();
    searchClassMods();
    searchArtifacts();
  }, []);

  const searchWeapons = () => {
    getWeapons().then((data) => {
      setWeaponsData(data);
    });
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
            originalWeapons={weapons}
          ></PageWeapons>
        </TabsContent>
        <TabsContent value="shields">
          <PageShield
            show={true}
            onSendShield={handleBuildData}
            originalShields={shields}
          ></PageShield>
        </TabsContent>
        <TabsContent value="grenades">
          <PageGrenades
            show={true}
            onSendGrenades={handleBuildData}
            originalGrenades={grenades}
          ></PageGrenades>
        </TabsContent>
        <TabsContent value="class-mods">
          <PageClassMods
            show={true}
            onSendClassMods={handleBuildData}
            originalClassMods={class_mods}
          ></PageClassMods>
        </TabsContent>
        <TabsContent value="artifacts">
          <PageArtifacts
            show={true}
            onSendArtifacts={handleBuildData}
            originalArtifacts={artifacts}
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
