"use client";
import getSkilltrees from "@/actions/get-skilltrees";
import { useEffect, useState } from "react";
import SkillBox from "../skillbox/skillbox";
import CustomSelect from "../action-skill-select/actionSkillSelect";
export default function MozeSkilltree() {
  const [trees, setTreesData] = useState<any | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<any[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const searchTrees = () => {
    getSkilltrees().then((data) => {
      setTreesData(data);
    });
  };

  useEffect(() => {
    searchTrees();
  }, []);

  const handleSkillChange = (skill: any) => {
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

  return trees?.moze ? (
    <div className="">
      <div className="flex flex-col gap-4 mb-12">
        <div className="flex gap-4">
          <CustomSelect
            options={trees.moze.actionSkills}
            onSelect={(option) => handleSelectChange("actionSkill1", option)}
            optionTitle="Select Action Skill"
          />
          <CustomSelect
            options={trees.moze.augments}
            onSelect={(option) => handleSelectChange("augment1", option)}
            optionTitle="Select Augment 1"
          />
        </div>
        <div className="flex gap-4">
          <CustomSelect
            options={trees.moze.actionSkills}
            onSelect={(option) => handleSelectChange("actionSkill2", option)}
            optionTitle="Select Action Skill"
          />
          <CustomSelect
            options={trees.moze.augments}
            onSelect={(option) => handleSelectChange("augment2", option)}
            optionTitle="Select Augment 2"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="green col-span-1">
          <h1 className="text-center mb-4">
            {trees.moze.abilities[0].skillTreeName}
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <SkillBox
              title={trees.moze.abilities[0].skills[0].title}
              maxPoints={trees.moze.abilities[0].skills[0].maxPoints}
              imageUrl={trees.moze.abilities[0].skills[0].imageUrl}
              description={trees.moze.abilities[0].skills[0].description}
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
              title={trees.moze.abilities[0].skills[1].title}
              maxPoints={trees.moze.abilities[0].skills[1].maxPoints}
              imageUrl={trees.moze.abilities[0].skills[1].imageUrl}
              description={trees.moze.abilities[0].skills[1].description}
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
              title={trees.moze.abilities[0].skills[2].title}
              maxPoints={trees.moze.abilities[0].skills[2].maxPoints}
              imageUrl={trees.moze.abilities[0].skills[2].imageUrl}
              description={trees.moze.abilities[0].skills[2].description}
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
              title={trees.moze.abilities[0].skills[3].title}
              maxPoints={trees.moze.abilities[0].skills[3].maxPoints}
              imageUrl={trees.moze.abilities[0].skills[3].imageUrl}
              description={trees.moze.abilities[0].skills[3].description}
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
              title={trees.moze.abilities[0].skills[4].title}
              maxPoints={trees.moze.abilities[0].skills[4].maxPoints}
              imageUrl={trees.moze.abilities[0].skills[4].imageUrl}
              description={trees.moze.abilities[0].skills[4].description}
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
              title={trees.moze.abilities[0].skills[5].title}
              maxPoints={trees.moze.abilities[0].skills[5].maxPoints}
              imageUrl={trees.moze.abilities[0].skills[5].imageUrl}
              description={trees.moze.abilities[0].skills[5].description}
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
              title={trees.moze.abilities[0].skills[6].title}
              maxPoints={trees.moze.abilities[0].skills[6].maxPoints}
              imageUrl={trees.moze.abilities[0].skills[6].imageUrl}
              description={trees.moze.abilities[0].skills[6].description}
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
              title={trees.moze.abilities[0].skills[7].title}
              maxPoints={trees.moze.abilities[0].skills[7].maxPoints}
              imageUrl={trees.moze.abilities[0].skills[7].imageUrl}
              description={trees.moze.abilities[0].skills[7].description}
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
                title={trees.moze.abilities[0].skills[8].title}
                maxPoints={trees.moze.abilities[0].skills[8].maxPoints}
                imageUrl={trees.moze.abilities[0].skills[8].imageUrl}
                description={trees.moze.abilities[0].skills[8].description}
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
                title={trees.moze.abilities[0].skills[9].title}
                maxPoints={trees.moze.abilities[0].skills[9].maxPoints}
                imageUrl={trees.moze.abilities[0].skills[9].imageUrl}
                description={trees.moze.abilities[0].skills[9].description}
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
            <div className="col-span-3 flex gap-20">
              <SkillBox
                title={trees.moze.abilities[0].skills[10].title}
                maxPoints={trees.moze.abilities[0].skills[10].maxPoints}
                imageUrl={trees.moze.abilities[0].skills[10].imageUrl}
                description={trees.moze.abilities[0].skills[10].description}
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
                title={trees.moze.abilities[0].skills[11].title}
                maxPoints={trees.moze.abilities[0].skills[11].maxPoints}
                imageUrl={trees.moze.abilities[0].skills[11].imageUrl}
                description={trees.moze.abilities[0].skills[11].description}
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
            <div className="col-span-3 grid place-content-center">
              <SkillBox
                title={trees.moze.abilities[0].skills[12].title}
                maxPoints={trees.moze.abilities[0].skills[12].maxPoints}
                imageUrl={trees.moze.abilities[0].skills[12].imageUrl}
                description={trees.moze.abilities[0].skills[12].description}
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
            {trees.moze.abilities[1].skillTreeName}
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <SkillBox
              title={trees.moze.abilities[1].skills[0].title}
              maxPoints={trees.moze.abilities[1].skills[0].maxPoints}
              imageUrl={trees.moze.abilities[1].skills[0].imageUrl}
              description={trees.moze.abilities[1].skills[0].description}
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
              title={trees.moze.abilities[1].skills[1].title}
              maxPoints={trees.moze.abilities[1].skills[1].maxPoints}
              imageUrl={trees.moze.abilities[1].skills[1].imageUrl}
              description={trees.moze.abilities[1].skills[1].description}
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
              title={trees.moze.abilities[1].skills[2].title}
              maxPoints={trees.moze.abilities[1].skills[2].maxPoints}
              imageUrl={trees.moze.abilities[1].skills[2].imageUrl}
              description={trees.moze.abilities[1].skills[2].description}
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
              title={trees.moze.abilities[1].skills[3].title}
              maxPoints={trees.moze.abilities[1].skills[3].maxPoints}
              imageUrl={trees.moze.abilities[1].skills[3].imageUrl}
              description={trees.moze.abilities[1].skills[3].description}
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
              title={trees.moze.abilities[1].skills[4].title}
              maxPoints={trees.moze.abilities[1].skills[4].maxPoints}
              imageUrl={trees.moze.abilities[1].skills[4].imageUrl}
              description={trees.moze.abilities[1].skills[4].description}
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
              title={trees.moze.abilities[1].skills[5].title}
              maxPoints={trees.moze.abilities[1].skills[5].maxPoints}
              imageUrl={trees.moze.abilities[1].skills[5].imageUrl}
              description={trees.moze.abilities[1].skills[5].description}
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
            <div className="col-span-3 flex  gap-20">
              <SkillBox
                title={trees.moze.abilities[1].skills[6].title}
                maxPoints={trees.moze.abilities[1].skills[6].maxPoints}
                imageUrl={trees.moze.abilities[1].skills[6].imageUrl}
                description={trees.moze.abilities[1].skills[6].description}
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
                title={trees.moze.abilities[1].skills[7].title}
                maxPoints={trees.moze.abilities[1].skills[7].maxPoints}
                imageUrl={trees.moze.abilities[1].skills[7].imageUrl}
                description={trees.moze.abilities[1].skills[7].description}
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
                title={trees.moze.abilities[1].skills[8].title}
                maxPoints={trees.moze.abilities[1].skills[8].maxPoints}
                imageUrl={trees.moze.abilities[1].skills[8].imageUrl}
                description={trees.moze.abilities[1].skills[8].description}
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
                title={trees.moze.abilities[1].skills[9].title}
                maxPoints={trees.moze.abilities[1].skills[9].maxPoints}
                imageUrl={trees.moze.abilities[1].skills[9].imageUrl}
                description={trees.moze.abilities[1].skills[9].description}
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
              title={trees.moze.abilities[1].skills[10].title}
              maxPoints={trees.moze.abilities[1].skills[10].maxPoints}
              imageUrl={trees.moze.abilities[1].skills[10].imageUrl}
              description={trees.moze.abilities[1].skills[10].description}
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
              title={trees.moze.abilities[1].skills[11].title}
              maxPoints={trees.moze.abilities[1].skills[11].maxPoints}
              imageUrl={trees.moze.abilities[1].skills[11].imageUrl}
              description={trees.moze.abilities[1].skills[11].description}
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
            <div className="grid col-span-3 place-content-center">
              <SkillBox
                title={trees.moze.abilities[1].skills[12].title}
                maxPoints={trees.moze.abilities[1].skills[12].maxPoints}
                imageUrl={trees.moze.abilities[1].skills[12].imageUrl}
                description={trees.moze.abilities[1].skills[12].description}
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
            {trees.moze.abilities[2].skillTreeName}
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <SkillBox
              title={trees.moze.abilities[2].skills[0].title}
              maxPoints={trees.moze.abilities[2].skills[0].maxPoints}
              imageUrl={trees.moze.abilities[2].skills[0].imageUrl}
              description={trees.moze.abilities[2].skills[0].description}
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
              title={trees.moze.abilities[2].skills[1].title}
              maxPoints={trees.moze.abilities[2].skills[1].maxPoints}
              imageUrl={trees.moze.abilities[2].skills[1].imageUrl}
              description={trees.moze.abilities[2].skills[1].description}
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
              title={trees.moze.abilities[2].skills[2].title}
              maxPoints={trees.moze.abilities[2].skills[2].maxPoints}
              imageUrl={trees.moze.abilities[2].skills[2].imageUrl}
              description={trees.moze.abilities[2].skills[2].description}
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
              title={trees.moze.abilities[2].skills[3].title}
              maxPoints={trees.moze.abilities[2].skills[3].maxPoints}
              imageUrl={trees.moze.abilities[2].skills[3].imageUrl}
              description={trees.moze.abilities[2].skills[3].description}
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
              title={trees.moze.abilities[2].skills[4].title}
              maxPoints={trees.moze.abilities[2].skills[4].maxPoints}
              imageUrl={trees.moze.abilities[2].skills[4].imageUrl}
              description={trees.moze.abilities[2].skills[4].description}
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
              title={trees.moze.abilities[2].skills[5].title}
              maxPoints={trees.moze.abilities[2].skills[5].maxPoints}
              imageUrl={trees.moze.abilities[2].skills[5].imageUrl}
              description={trees.moze.abilities[2].skills[5].description}
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
                title={trees.moze.abilities[2].skills[6].title}
                maxPoints={trees.moze.abilities[2].skills[6].maxPoints}
                imageUrl={trees.moze.abilities[2].skills[6].imageUrl}
                description={trees.moze.abilities[2].skills[6].description}
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
                title={trees.moze.abilities[2].skills[7].title}
                maxPoints={trees.moze.abilities[2].skills[7].maxPoints}
                imageUrl={trees.moze.abilities[2].skills[7].imageUrl}
                description={trees.moze.abilities[2].skills[7].description}
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
                title={trees.moze.abilities[2].skills[8].title}
                maxPoints={trees.moze.abilities[2].skills[8].maxPoints}
                imageUrl={trees.moze.abilities[2].skills[8].imageUrl}
                description={trees.moze.abilities[2].skills[8].description}
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
                title={trees.moze.abilities[2].skills[9].title}
                maxPoints={trees.moze.abilities[2].skills[9].maxPoints}
                imageUrl={trees.moze.abilities[2].skills[9].imageUrl}
                description={trees.moze.abilities[2].skills[9].description}
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
              title={trees.moze.abilities[2].skills[10].title}
              maxPoints={trees.moze.abilities[2].skills[10].maxPoints}
              imageUrl={trees.moze.abilities[2].skills[10].imageUrl}
              description={trees.moze.abilities[2].skills[10].description}
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
              title={trees.moze.abilities[2].skills[11].title}
              maxPoints={trees.moze.abilities[2].skills[11].maxPoints}
              imageUrl={trees.moze.abilities[2].skills[11].imageUrl}
              description={trees.moze.abilities[2].skills[11].description}
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
                title={trees.moze.abilities[2].skills[12].title}
                maxPoints={trees.moze.abilities[2].skills[12].maxPoints}
                imageUrl={trees.moze.abilities[2].skills[12].imageUrl}
                description={trees.moze.abilities[2].skills[12].description}
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
            {trees.moze.abilities[3].skillTreeName}
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <SkillBox
              title={trees.moze.abilities[3].skills[0].title}
              maxPoints={trees.moze.abilities[3].skills[0].maxPoints}
              imageUrl={trees.moze.abilities[3].skills[0].imageUrl}
              description={trees.moze.abilities[3].skills[0].description}
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
              title={trees.moze.abilities[3].skills[1].title}
              maxPoints={trees.moze.abilities[3].skills[1].maxPoints}
              imageUrl={trees.moze.abilities[3].skills[1].imageUrl}
              description={trees.moze.abilities[3].skills[1].description}
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
              title={trees.moze.abilities[3].skills[2].title}
              maxPoints={trees.moze.abilities[3].skills[2].maxPoints}
              imageUrl={trees.moze.abilities[3].skills[2].imageUrl}
              description={trees.moze.abilities[3].skills[2].description}
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
              title={trees.moze.abilities[3].skills[3].title}
              maxPoints={trees.moze.abilities[3].skills[3].maxPoints}
              imageUrl={trees.moze.abilities[3].skills[3].imageUrl}
              description={trees.moze.abilities[3].skills[3].description}
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
              title={trees.moze.abilities[3].skills[4].title}
              maxPoints={trees.moze.abilities[3].skills[4].maxPoints}
              imageUrl={trees.moze.abilities[3].skills[4].imageUrl}
              description={trees.moze.abilities[3].skills[4].description}
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
              title={trees.moze.abilities[3].skills[5].title}
              maxPoints={trees.moze.abilities[3].skills[5].maxPoints}
              imageUrl={trees.moze.abilities[3].skills[5].imageUrl}
              description={trees.moze.abilities[3].skills[5].description}
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
            <div className="grid col-span-3 place-content-center">
              <SkillBox
                title={trees.moze.abilities[3].skills[6].title}
                maxPoints={trees.moze.abilities[3].skills[6].maxPoints}
                imageUrl={trees.moze.abilities[3].skills[6].imageUrl}
                description={trees.moze.abilities[3].skills[6].description}
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
                title={trees.moze.abilities[3].skills[7].title}
                maxPoints={trees.moze.abilities[3].skills[7].maxPoints}
                imageUrl={trees.moze.abilities[3].skills[7].imageUrl}
                description={trees.moze.abilities[3].skills[7].description}
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
                title={trees.moze.abilities[3].skills[8].title}
                maxPoints={trees.moze.abilities[3].skills[8].maxPoints}
                imageUrl={trees.moze.abilities[3].skills[8].imageUrl}
                description={trees.moze.abilities[3].skills[8].description}
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
              title={trees.moze.abilities[3].skills[9].title}
              maxPoints={trees.moze.abilities[3].skills[9].maxPoints}
              imageUrl={trees.moze.abilities[3].skills[9].imageUrl}
              description={trees.moze.abilities[3].skills[9].description}
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
              title={trees.moze.abilities[3].skills[10].title}
              maxPoints={trees.moze.abilities[3].skills[10].maxPoints}
              imageUrl={trees.moze.abilities[3].skills[10].imageUrl}
              description={trees.moze.abilities[3].skills[10].description}
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
              title={trees.moze.abilities[3].skills[11].title}
              maxPoints={trees.moze.abilities[3].skills[11].maxPoints}
              imageUrl={trees.moze.abilities[3].skills[11].imageUrl}
              description={trees.moze.abilities[3].skills[11].description}
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
                title={trees.moze.abilities[3].skills[12].title}
                maxPoints={trees.moze.abilities[3].skills[12].maxPoints}
                imageUrl={trees.moze.abilities[3].skills[12].imageUrl}
                description={trees.moze.abilities[3].skills[12].description}
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
