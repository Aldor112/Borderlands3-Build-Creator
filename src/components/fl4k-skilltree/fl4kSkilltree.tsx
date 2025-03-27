"use client";

import getSkilltrees from "@/actions/get-skilltrees";
import { useEffect, useState } from "react";
import SkillBox from "../skillbox/skillbox";
import CustomSelect from "../action-skill-select/actionSkillSelect";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Fl4kSkilltree({
  onSendFl4kData,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSendFl4kData: any;
}) {
  const [trees, setTreesData] = useState<SkillTreeData | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const searchTrees = () => {
    getSkilltrees().then((data) => {
      setTreesData(data);
    });
  };

  const handleSkillChange = (skill: Skill) => {
    setSelectedSkills((prevSkills) => {
      const existingSkill = prevSkills.find((s) => s.title === skill.title);

      if (existingSkill) {
        // Si la habilidad ya existe, actualizamos los puntos asignados
        return prevSkills.map((s) =>
          s.title === skill.title
            ? { ...s, pointsAllocated: skill.pointsAllocated }
            : s
        );
      } else {
        // Si la habilidad no existe, la agregamos al arreglo
        return [...prevSkills, skill];
      }
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (key: string, option: any) => {
    setSelectedOptions((prevOptions) => {
      const existingOptionIndex = prevOptions.findIndex((o) => o.key === key);

      if (existingOptionIndex !== -1) {
        // Si la opción ya existe, actualizamos su valor
        const updatedOptions = [...prevOptions];
        updatedOptions[existingOptionIndex] = { key, option };
        return updatedOptions;
      } else {
        // Si la opción no existe, la agregamos al arreglo
        return [...prevOptions, { key, option }];
      }
    });
  };

  const handleSendData = () => {
    const data = {
      fl4k: { skills: selectedSkills, options: selectedOptions },
    };

    onSendFl4kData(data);
  };

  useEffect(() => {
    searchTrees();
  }, []);
  return trees?.fl4k ? (
    <div className="">
      <button onClick={handleSendData} className="mb-8 mt-8 ">
        Save skilltree
      </button>
      <div className="flex flex-col gap-4 mb-12">
        <div className="flex gap-4">
          <CustomSelect
            options={trees.fl4k.actionSkills}
            onSelect={(option) => handleSelectChange("actionSkill1", option)}
            optionTitle="Select Action Skill"
          />
          <CustomSelect
            options={trees.fl4k.augments}
            onSelect={(option) => handleSelectChange("augment1", option)}
            optionTitle="Select Augment 1"
          />
          <CustomSelect
            options={trees.fl4k.augments}
            onSelect={(option) => handleSelectChange("augment2", option)}
            optionTitle="Select Augment 2"
          />
          <CustomSelect
            options={trees.fl4k.pets}
            onSelect={(option) => handleSelectChange("pet", option)}
            optionTitle="Select Pet"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-12">
        <div className="green col-span-1">
          <h1 className="text-center mb-4">
            {trees.fl4k.abilities[0].skillTreeName}
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <SkillBox
              title={trees.fl4k.abilities[0].skills[0].title}
              maxPoints={trees.fl4k.abilities[0].skills[0].maxPoints}
              imageUrl={trees.fl4k.abilities[0].skills[0].imageUrl}
              description={trees.fl4k.abilities[0].skills[0].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[0].skills[1].title}
              maxPoints={trees.fl4k.abilities[0].skills[1].maxPoints}
              imageUrl={trees.fl4k.abilities[0].skills[1].imageUrl}
              description={trees.fl4k.abilities[0].skills[1].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[0].skills[2].title}
              maxPoints={trees.fl4k.abilities[0].skills[2].maxPoints}
              imageUrl={trees.fl4k.abilities[0].skills[2].imageUrl}
              description={trees.fl4k.abilities[0].skills[2].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />

            <SkillBox
              title={trees.fl4k.abilities[0].skills[3].title}
              maxPoints={trees.fl4k.abilities[0].skills[3].maxPoints}
              imageUrl={trees.fl4k.abilities[0].skills[3].imageUrl}
              description={trees.fl4k.abilities[0].skills[3].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[0].skills[4].title}
              maxPoints={trees.fl4k.abilities[0].skills[4].maxPoints}
              imageUrl={trees.fl4k.abilities[0].skills[4].imageUrl}
              description={trees.fl4k.abilities[0].skills[4].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[0].skills[5].title}
              maxPoints={trees.fl4k.abilities[0].skills[5].maxPoints}
              imageUrl={trees.fl4k.abilities[0].skills[5].imageUrl}
              description={trees.fl4k.abilities[0].skills[5].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />

            <SkillBox
              title={trees.fl4k.abilities[0].skills[6].title}
              maxPoints={trees.fl4k.abilities[0].skills[6].maxPoints}
              imageUrl={trees.fl4k.abilities[0].skills[6].imageUrl}
              description={trees.fl4k.abilities[0].skills[6].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[0].skills[7].title}
              maxPoints={trees.fl4k.abilities[0].skills[7].maxPoints}
              imageUrl={trees.fl4k.abilities[0].skills[7].imageUrl}
              description={trees.fl4k.abilities[0].skills[7].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />

            <div className="col-span-3 flex justify-between">
              <SkillBox
                title={trees.fl4k.abilities[0].skills[8].title}
                maxPoints={trees.fl4k.abilities[0].skills[8].maxPoints}
                imageUrl={trees.fl4k.abilities[0].skills[8].imageUrl}
                description={trees.fl4k.abilities[0].skills[8].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />

              <SkillBox
                title={trees.fl4k.abilities[0].skills[9].title}
                maxPoints={trees.fl4k.abilities[0].skills[9].maxPoints}
                imageUrl={trees.fl4k.abilities[0].skills[9].imageUrl}
                description={trees.fl4k.abilities[0].skills[9].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
            </div>
            <div className="col-span-3 grid place-items-center">
              <SkillBox
                title={trees.fl4k.abilities[0].skills[10].title}
                maxPoints={trees.fl4k.abilities[0].skills[10].maxPoints}
                imageUrl={trees.fl4k.abilities[0].skills[10].imageUrl}
                description={trees.fl4k.abilities[0].skills[10].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
            </div>

            <div className="col-span-3 grid place-items-center">
              <SkillBox
                title={trees.fl4k.abilities[0].skills[11].title}
                maxPoints={trees.fl4k.abilities[0].skills[11].maxPoints}
                imageUrl={trees.fl4k.abilities[0].skills[11].imageUrl}
                description={trees.fl4k.abilities[0].skills[11].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="blue col-span-1">
          <h1 className="text-center mb-4">
            {trees.fl4k.abilities[1].skillTreeName}
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <SkillBox
              title={trees.fl4k.abilities[1].skills[0].title}
              maxPoints={trees.fl4k.abilities[1].skills[0].maxPoints}
              imageUrl={trees.fl4k.abilities[1].skills[0].imageUrl}
              description={trees.fl4k.abilities[1].skills[0].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[1].skills[1].title}
              maxPoints={trees.fl4k.abilities[1].skills[1].maxPoints}
              imageUrl={trees.fl4k.abilities[1].skills[1].imageUrl}
              description={trees.fl4k.abilities[1].skills[1].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[1].skills[2].title}
              maxPoints={trees.fl4k.abilities[1].skills[2].maxPoints}
              imageUrl={trees.fl4k.abilities[1].skills[2].imageUrl}
              description={trees.fl4k.abilities[1].skills[2].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[1].skills[3].title}
              maxPoints={trees.fl4k.abilities[1].skills[3].maxPoints}
              imageUrl={trees.fl4k.abilities[1].skills[3].imageUrl}
              description={trees.fl4k.abilities[1].skills[3].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[1].skills[4].title}
              maxPoints={trees.fl4k.abilities[1].skills[4].maxPoints}
              imageUrl={trees.fl4k.abilities[1].skills[4].imageUrl}
              description={trees.fl4k.abilities[1].skills[4].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[1].skills[5].title}
              maxPoints={trees.fl4k.abilities[1].skills[5].maxPoints}
              imageUrl={trees.fl4k.abilities[1].skills[5].imageUrl}
              description={trees.fl4k.abilities[1].skills[5].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />

            <SkillBox
              title={trees.fl4k.abilities[1].skills[6].title}
              maxPoints={trees.fl4k.abilities[1].skills[6].maxPoints}
              imageUrl={trees.fl4k.abilities[1].skills[6].imageUrl}
              description={trees.fl4k.abilities[1].skills[6].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[1].skills[7].title}
              maxPoints={trees.fl4k.abilities[1].skills[7].maxPoints}
              imageUrl={trees.fl4k.abilities[1].skills[7].imageUrl}
              description={trees.fl4k.abilities[1].skills[7].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />

            <div className="col-span-3 flex gap-20">
              <SkillBox
                title={trees.fl4k.abilities[1].skills[8].title}
                maxPoints={trees.fl4k.abilities[1].skills[8].maxPoints}
                imageUrl={trees.fl4k.abilities[1].skills[8].imageUrl}
                description={trees.fl4k.abilities[1].skills[8].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
              <SkillBox
                title={trees.fl4k.abilities[1].skills[9].title}
                maxPoints={trees.fl4k.abilities[1].skills[9].maxPoints}
                imageUrl={trees.fl4k.abilities[1].skills[9].imageUrl}
                description={trees.fl4k.abilities[1].skills[9].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
            </div>

            <div className="col-span-3 flex justify-between">
              <SkillBox
                title={trees.fl4k.abilities[1].skills[10].title}
                maxPoints={trees.fl4k.abilities[1].skills[10].maxPoints}
                imageUrl={trees.fl4k.abilities[1].skills[10].imageUrl}
                description={trees.fl4k.abilities[1].skills[10].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
              <SkillBox
                title={trees.fl4k.abilities[1].skills[11].title}
                maxPoints={trees.fl4k.abilities[1].skills[11].maxPoints}
                imageUrl={trees.fl4k.abilities[1].skills[11].imageUrl}
                description={trees.fl4k.abilities[1].skills[11].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
            </div>
            <div className="col-span-3 grid place-items-center">
              <SkillBox
                title={trees.fl4k.abilities[1].skills[12].title}
                maxPoints={trees.fl4k.abilities[1].skills[12].maxPoints}
                imageUrl={trees.fl4k.abilities[1].skills[12].imageUrl}
                description={trees.fl4k.abilities[1].skills[12].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="orange col-span-1">
          <h1 className="text-center mb-4">
            {trees.fl4k.abilities[2].skillTreeName}
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <SkillBox
              title={trees.fl4k.abilities[2].skills[0].title}
              maxPoints={trees.fl4k.abilities[2].skills[0].maxPoints}
              imageUrl={trees.fl4k.abilities[2].skills[0].imageUrl}
              description={trees.fl4k.abilities[2].skills[0].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[2].skills[1].title}
              maxPoints={trees.fl4k.abilities[2].skills[1].maxPoints}
              imageUrl={trees.fl4k.abilities[2].skills[1].imageUrl}
              description={trees.fl4k.abilities[2].skills[1].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[2].skills[2].title}
              maxPoints={trees.fl4k.abilities[2].skills[2].maxPoints}
              imageUrl={trees.fl4k.abilities[2].skills[2].imageUrl}
              description={trees.fl4k.abilities[2].skills[2].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[2].skills[3].title}
              maxPoints={trees.fl4k.abilities[2].skills[3].maxPoints}
              imageUrl={trees.fl4k.abilities[2].skills[3].imageUrl}
              description={trees.fl4k.abilities[2].skills[3].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[2].skills[4].title}
              maxPoints={trees.fl4k.abilities[2].skills[4].maxPoints}
              imageUrl={trees.fl4k.abilities[2].skills[4].imageUrl}
              description={trees.fl4k.abilities[2].skills[4].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[2].skills[5].title}
              maxPoints={trees.fl4k.abilities[2].skills[5].maxPoints}
              imageUrl={trees.fl4k.abilities[2].skills[5].imageUrl}
              description={trees.fl4k.abilities[2].skills[5].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <div className="col-span-3 grid place-items-center">
              <SkillBox
                title={trees.fl4k.abilities[2].skills[6].title}
                maxPoints={trees.fl4k.abilities[2].skills[6].maxPoints}
                imageUrl={trees.fl4k.abilities[2].skills[6].imageUrl}
                description={trees.fl4k.abilities[2].skills[6].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
            </div>
            <div className="col-span-3 flex justify-between">
              <SkillBox
                title={trees.fl4k.abilities[2].skills[7].title}
                maxPoints={trees.fl4k.abilities[2].skills[7].maxPoints}
                imageUrl={trees.fl4k.abilities[2].skills[7].imageUrl}
                description={trees.fl4k.abilities[2].skills[7].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
              <SkillBox
                title={trees.fl4k.abilities[2].skills[8].title}
                maxPoints={trees.fl4k.abilities[2].skills[8].maxPoints}
                imageUrl={trees.fl4k.abilities[2].skills[8].imageUrl}
                description={trees.fl4k.abilities[2].skills[8].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
            </div>
            <div className=""></div>
            <SkillBox
              title={trees.fl4k.abilities[2].skills[9].title}
              maxPoints={trees.fl4k.abilities[2].skills[9].maxPoints}
              imageUrl={trees.fl4k.abilities[2].skills[9].imageUrl}
              description={trees.fl4k.abilities[2].skills[9].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[2].skills[10].title}
              maxPoints={trees.fl4k.abilities[2].skills[10].maxPoints}
              imageUrl={trees.fl4k.abilities[2].skills[10].imageUrl}
              description={trees.fl4k.abilities[2].skills[10].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <div className="col-span-3 grid place-content-center">
              <SkillBox
                title={trees.fl4k.abilities[2].skills[11].title}
                maxPoints={trees.fl4k.abilities[2].skills[11].maxPoints}
                imageUrl={trees.fl4k.abilities[2].skills[11].imageUrl}
                description={trees.fl4k.abilities[2].skills[11].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="purple col-span-1">
          <h1 className="text-center mb-4">
            {trees.fl4k.abilities[3].skillTreeName}
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <SkillBox
              title={trees.fl4k.abilities[3].skills[0].title}
              maxPoints={trees.fl4k.abilities[3].skills[0].maxPoints}
              imageUrl={trees.fl4k.abilities[3].skills[0].imageUrl}
              description={trees.fl4k.abilities[3].skills[0].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[3].skills[1].title}
              maxPoints={trees.fl4k.abilities[3].skills[1].maxPoints}
              imageUrl={trees.fl4k.abilities[3].skills[1].imageUrl}
              description={trees.fl4k.abilities[3].skills[1].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[3].skills[2].title}
              maxPoints={trees.fl4k.abilities[3].skills[2].maxPoints}
              imageUrl={trees.fl4k.abilities[3].skills[2].imageUrl}
              description={trees.fl4k.abilities[3].skills[2].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[3].skills[3].title}
              maxPoints={trees.fl4k.abilities[3].skills[3].maxPoints}
              imageUrl={trees.fl4k.abilities[3].skills[3].imageUrl}
              description={trees.fl4k.abilities[3].skills[3].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[3].skills[4].title}
              maxPoints={trees.fl4k.abilities[3].skills[4].maxPoints}
              imageUrl={trees.fl4k.abilities[3].skills[4].imageUrl}
              description={trees.fl4k.abilities[3].skills[4].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[3].skills[5].title}
              maxPoints={trees.fl4k.abilities[3].skills[5].maxPoints}
              imageUrl={trees.fl4k.abilities[3].skills[5].imageUrl}
              description={trees.fl4k.abilities[3].skills[5].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <div className="col-span-3 flex justify-normal gap-20">
              <SkillBox
                title={trees.fl4k.abilities[3].skills[6].title}
                maxPoints={trees.fl4k.abilities[3].skills[6].maxPoints}
                imageUrl={trees.fl4k.abilities[3].skills[6].imageUrl}
                description={trees.fl4k.abilities[3].skills[6].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
              <SkillBox
                title={trees.fl4k.abilities[3].skills[7].title}
                maxPoints={trees.fl4k.abilities[3].skills[7].maxPoints}
                imageUrl={trees.fl4k.abilities[3].skills[7].imageUrl}
                description={trees.fl4k.abilities[3].skills[7].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
            </div>
            <SkillBox
              title={trees.fl4k.abilities[3].skills[8].title}
              maxPoints={trees.fl4k.abilities[3].skills[8].maxPoints}
              imageUrl={trees.fl4k.abilities[3].skills[8].imageUrl}
              description={trees.fl4k.abilities[3].skills[8].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[3].skills[9].title}
              maxPoints={trees.fl4k.abilities[3].skills[9].maxPoints}
              imageUrl={trees.fl4k.abilities[3].skills[9].imageUrl}
              description={trees.fl4k.abilities[3].skills[9].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <SkillBox
              title={trees.fl4k.abilities[3].skills[10].title}
              maxPoints={trees.fl4k.abilities[3].skills[10].maxPoints}
              imageUrl={trees.fl4k.abilities[3].skills[10].imageUrl}
              description={trees.fl4k.abilities[3].skills[10].description}
              onPointsChange={(updatedSkill) =>
                handleSkillChange({
                  title: updatedSkill.title,
                  maxPoints: updatedSkill.maxPoints,
                  pointsAllocated: updatedSkill.points,
                  imageUrl: updatedSkill.imageUrl,
                  description: updatedSkill.description,
                })
              }
            />
            <div className="col-span-3 flex justify-between">
              <SkillBox
                title={trees.fl4k.abilities[3].skills[11].title}
                maxPoints={trees.fl4k.abilities[3].skills[11].maxPoints}
                imageUrl={trees.fl4k.abilities[3].skills[11].imageUrl}
                description={trees.fl4k.abilities[3].skills[11].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
              <SkillBox
                title={trees.fl4k.abilities[3].skills[12].title}
                maxPoints={trees.fl4k.abilities[3].skills[12].maxPoints}
                imageUrl={trees.fl4k.abilities[3].skills[12].imageUrl}
                description={trees.fl4k.abilities[3].skills[12].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
            </div>
            <div className="col-span-3 grid place-items-center">
              <SkillBox
                title={trees.fl4k.abilities[3].skills[13].title}
                maxPoints={trees.fl4k.abilities[3].skills[13].maxPoints}
                imageUrl={trees.fl4k.abilities[3].skills[13].imageUrl}
                description={trees.fl4k.abilities[3].skills[13].description}
                onPointsChange={(updatedSkill) =>
                  handleSkillChange({
                    title: updatedSkill.title,
                    maxPoints: updatedSkill.maxPoints,
                    pointsAllocated: updatedSkill.points,
                    imageUrl: updatedSkill.imageUrl,
                    description: updatedSkill.description,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
