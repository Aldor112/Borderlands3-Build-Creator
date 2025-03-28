"use client";
import WeaponsTable from "@/components/weapons-table/weaponsTable";
import ShieldsTable from "@/components/shields-table/shieldsTable";
import GrenadesTable from "@/components/grenades-table/grenades-table";
import ClassModsTables from "@/components/class-mods-table/classModsTable";
import ArtifactsTable from "@/components/artifacts-table/artifactsTable";
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
  const [buildData, setBuildData] = useState<BuildData[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [weapons, setWeaponsData] = useState<WeaponsResponse>(null);
  const [shields, setShieldsData] = useState<ShieldsData>(null);
  const [grenades, setGrenades] = useState<GrenadesData>(null);
  const [class_mods, setClassMods] = useState<ClassModsData>(null);
  const [artifacts, setArtifactsData] = useState<ArtifactsData>(null);
  const [notes, setNotesData] = useState<string>("");
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

  const handleBuildData = (data: BuildData) => {
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

  const addNotes = () => {
    setBuildData([...buildData, { notes }]);
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
      <div className="flex flex-wrap  mb-4">
        <div className="w-full lg:w-1/3 px-4">
          <label className="block mb-2">Notas</label>
          <textarea
            className="w-full border rounded p-2"
            rows={5}
            onChange={(e) => {
              setNotesData(e.target.value);
            }}
          ></textarea>
          <button onClick={addNotes}>Save Notes</button>
        </div>
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
          <WeaponsTable
            show={true}
            onSendWeapons={handleBuildData}
            originalWeapons={weapons}
          ></WeaponsTable>
        </TabsContent>
        <TabsContent value="shields">
          <ShieldsTable
            show={true}
            onSendShield={handleBuildData}
            originalShields={shields}
          ></ShieldsTable>
        </TabsContent>
        <TabsContent value="grenades">
          <GrenadesTable
            show={true}
            onSendGrenades={handleBuildData}
            originalGrenades={grenades}
          ></GrenadesTable>
        </TabsContent>
        <TabsContent value="class-mods">
          <ClassModsTables
            show={true}
            onSendClassMods={handleBuildData}
            originalClassMods={class_mods}
          ></ClassModsTables>
        </TabsContent>
        <TabsContent value="artifacts">
          <ArtifactsTable
            show={true}
            onSendArtifacts={handleBuildData}
            originalArtifacts={artifacts}
          ></ArtifactsTable>
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
