"use client";
import WeaponsTable from "@/components/weapons-table/weaponsTable";
import ShieldsTable from "@/components/shields-table/shieldsTable";
import GrenadesTable from "@/components/grenades-table/grenades-table";
import ClassModsTables from "@/components/class-mods-table/classModsTable";
import ArtifactsTable from "@/components/artifacts-table/artifactsTable";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillBox from "../skillbox/skillbox";

export default function viewBuildData({
  weapons,
  shields,
  grenades,
  class_mods,
  artifacts,
  skills,
  options,
  notes,
}: {
  weapons: WeaponsResponse;
  shields: ShieldsData;
  grenades: GrenadesData;
  class_mods: ClassModsData;
  artifacts: ArtifactsData;
  skills: Skill[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  notes: string;
}) {
  console.log("weapons", weapons);
  console.log("shields", shields);
  console.log("grenades", grenades);
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="w-full px-4">
        <Tabs className="">
          <TabsList>
            <TabsTrigger value="skilltrees">SkillTrees</TabsTrigger>
            <TabsTrigger value="weapons">Weapons</TabsTrigger>
            <TabsTrigger value="shields">Shields</TabsTrigger>
            <TabsTrigger value="grenades">Grenades</TabsTrigger>
            <TabsTrigger value="class-mods">Class Mods</TabsTrigger>
            <TabsTrigger value="artifacts">Artifacts</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>
          <TabsContent value="weapons">
            <WeaponsTable show={false} originalWeapons={weapons}></WeaponsTable>
          </TabsContent>
          <TabsContent value="shields">
            <ShieldsTable show={false} originalShields={shields}></ShieldsTable>
          </TabsContent>
          <TabsContent value="grenades">
            <GrenadesTable
              show={false}
              originalGrenades={grenades}
            ></GrenadesTable>
          </TabsContent>
          <TabsContent value="class-mods">
            <ClassModsTables
              show={false}
              originalClassMods={class_mods}
            ></ClassModsTables>
          </TabsContent>
          <TabsContent value="artifacts">
            <ArtifactsTable
              show={false}
              originalArtifacts={artifacts}
            ></ArtifactsTable>
          </TabsContent>
          <TabsContent value="skilltrees">
            <div className="">
              <div className="border-2 border-[#f4d03f] bg-[#1a1a1a] rounded-md overflow-hidden shadow-lg">
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  options.map((data: any, index: number) => (
                    <div
                      key={index}
                      className="group hover:bg-[#3e3e3e] transition-colors duration-200 border-b border-[#f4d03f] last:border-b-0"
                    >
                      <div className="flex items-center justify-between p-3 cursor-pointer">
                        <div className="flex-1">
                          <p
                            className="text-[#f4d03f] font-bold group-hover:text-white"
                            style={{
                              fontFamily:
                                '"Impact", "Haettenschweiler", "Arial Narrow Bold", sans-serif',
                            }}
                          >
                            {data?.option?.name || data?.option?.title}
                          </p>
                          {data?.option?.description && (
                            <p className="text-[#f4d03f] text-sm mt-1 opacity-80 group-hover:opacity-100">
                              {data.option.description}
                            </p>
                          )}
                        </div>

                        <div className="ml-4 w-16 h-16 flex-shrink-0 border-2 border-[#f4d03f] rounded bg-[#2c2c2c] overflow-hidden">
                          {data.option.imageUrl && (
                            <img
                              src={data.option.imageUrl}
                              alt={data?.option?.name || data?.option?.title}
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className=" mt-4">
                {skills.map((data: Skill, index: number) => (
                  <SkillBox
                    key={index}
                    title={data.title}
                    maxPoints={data.maxPoints}
                    imageUrl={data.imageUrl}
                    description={data.description}
                    onPointsChange={function (): void {}}
                    pointsAssigned={data.pointsAllocated}
                  ></SkillBox>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="notes">
            <div className="border-2 border-[#f4d03f] bg-[#1a1a1a] rounded-md p-4 shadow-lg">
              <h3
                className="text-[#f4d03f] text-xl font-bold mb-3 pb-2 border-b-2 border-[#f4d03f]"
                style={{
                  fontFamily:
                    '"Impact", "Haettenschweiler", "Arial Narrow Bold", sans-serif',
                }}
              >
                Notes
              </h3>

              <div className="text-[#f4d03f] whitespace-pre-line font-mono bg-[#2c2c2c] p-3 rounded border border-[#f4d03f]">
                {notes.split("\n").map((line: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start group hover:bg-[#3e3e3e] px-2 py-1 rounded"
                  >
                    <span className="text-[#f4d03f] mr-2 font-bold group-hover:text-white">
                      ■
                    </span>
                    <span className="group-hover:text-white">{line}</span>
                  </div>
                ))}
              </div>

              {/* <div className="mt-3 flex justify-end">
                <button className="px-3 py-1 bg-[#2c2c2c] text-[#f4d03f] border border-[#f4d03f] rounded hover:bg-[#f4d03f] hover:text-[#1a1a1a] transition-colors">
                  EDITAR
                </button>
              </div> */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
