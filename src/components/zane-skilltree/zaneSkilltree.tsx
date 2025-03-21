"use client";

import getSkilltrees from "@/actions/get-skilltrees";
import { useEffect, useState } from "react";
import SkillBox from "../skillbox/skillbox";

export default function ZaneSkilltree() {
  const [trees, setTreesData] = useState<any | null>(null);

  const searchTrees = () => {
    getSkilltrees().then((data) => {
      setTreesData(data);
    });
  };

  useEffect(() => {
    searchTrees();
  }, []);

  return trees?.zane ? (
    <div className="grid grid-cols-4 gap-4">
      <div className="green col-span-1">
        <h1 className="text-center mb-4">
          {trees.zane.abilities[0].skillTreeName}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <SkillBox
            title={trees.zane.abilities[0].skills[0].title}
            maxPoints={trees.zane.abilities[0].skills[0].maxPoints}
            imageUrl={trees.zane.abilities[0].skills[0].imageUrl}
            description={trees.zane.abilities[0].skills[0].description}
          />
          <SkillBox
            title={trees.zane.abilities[0].skills[1].title}
            maxPoints={trees.zane.abilities[0].skills[1].maxPoints}
            imageUrl={trees.zane.abilities[0].skills[1].imageUrl}
            description={trees.zane.abilities[0].skills[1].description}
          />
          <SkillBox
            title={trees.zane.abilities[0].skills[2].title}
            maxPoints={trees.zane.abilities[0].skills[2].maxPoints}
            imageUrl={trees.zane.abilities[0].skills[2].imageUrl}
            description={trees.zane.abilities[0].skills[2].description}
          />
          <SkillBox
            title={trees.zane.abilities[0].skills[3].title}
            maxPoints={trees.zane.abilities[0].skills[3].maxPoints}
            imageUrl={trees.zane.abilities[0].skills[3].imageUrl}
            description={trees.zane.abilities[0].skills[3].description}
          />
          <SkillBox
            title={trees.zane.abilities[0].skills[4].title}
            maxPoints={trees.zane.abilities[0].skills[4].maxPoints}
            imageUrl={trees.zane.abilities[0].skills[4].imageUrl}
            description={trees.zane.abilities[0].skills[4].description}
          />
          <SkillBox
            title={trees.zane.abilities[0].skills[5].title}
            maxPoints={trees.zane.abilities[0].skills[5].maxPoints}
            imageUrl={trees.zane.abilities[0].skills[5].imageUrl}
            description={trees.zane.abilities[0].skills[5].description}
          />
          <div className="col-span-3 place-content-center grid">
            <SkillBox
              title={trees.zane.abilities[0].skills[6].title}
              maxPoints={trees.zane.abilities[0].skills[6].maxPoints}
              imageUrl={trees.zane.abilities[0].skills[6].imageUrl}
              description={trees.zane.abilities[0].skills[6].description}
            />
          </div>

          <SkillBox
            title={trees.zane.abilities[0].skills[7].title}
            maxPoints={trees.zane.abilities[0].skills[7].maxPoints}
            imageUrl={trees.zane.abilities[0].skills[7].imageUrl}
            description={trees.zane.abilities[0].skills[7].description}
          />
          <SkillBox
            title={trees.zane.abilities[0].skills[8].title}
            maxPoints={trees.zane.abilities[0].skills[8].maxPoints}
            imageUrl={trees.zane.abilities[0].skills[8].imageUrl}
            description={trees.zane.abilities[0].skills[8].description}
          />
          <SkillBox
            title={trees.zane.abilities[0].skills[9].title}
            maxPoints={trees.zane.abilities[0].skills[9].maxPoints}
            imageUrl={trees.zane.abilities[0].skills[9].imageUrl}
            description={trees.zane.abilities[0].skills[9].description}
          />
          <SkillBox
            title={trees.zane.abilities[0].skills[10].title}
            maxPoints={trees.zane.abilities[0].skills[10].maxPoints}
            imageUrl={trees.zane.abilities[0].skills[10].imageUrl}
            description={trees.zane.abilities[0].skills[10].description}
          />
          <SkillBox
            title={trees.zane.abilities[0].skills[11].title}
            maxPoints={trees.zane.abilities[0].skills[11].maxPoints}
            imageUrl={trees.zane.abilities[0].skills[11].imageUrl}
            description={trees.zane.abilities[0].skills[11].description}
          />
          <SkillBox
            title={trees.zane.abilities[0].skills[12].title}
            maxPoints={trees.zane.abilities[0].skills[12].maxPoints}
            imageUrl={trees.zane.abilities[0].skills[12].imageUrl}
            description={trees.zane.abilities[0].skills[12].description}
          />
          <div className="col-span-3 grid place-content-center">
            <SkillBox
              title={trees.zane.abilities[0].skills[13].title}
              maxPoints={trees.zane.abilities[0].skills[13].maxPoints}
              imageUrl={trees.zane.abilities[0].skills[13].imageUrl}
              description={trees.zane.abilities[0].skills[13].description}
            />
          </div>
        </div>
      </div>
      <div className="blue col-span-1">
        <h1 className="text-center mb-4">
          {trees.zane.abilities[1].skillTreeName}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <SkillBox
            title={trees.zane.abilities[1].skills[0].title}
            maxPoints={trees.zane.abilities[1].skills[0].maxPoints}
            imageUrl={trees.zane.abilities[1].skills[0].imageUrl}
            description={trees.zane.abilities[1].skills[0].description}
          />
          <SkillBox
            title={trees.zane.abilities[1].skills[1].title}
            maxPoints={trees.zane.abilities[1].skills[1].maxPoints}
            imageUrl={trees.zane.abilities[1].skills[1].imageUrl}
            description={trees.zane.abilities[1].skills[1].description}
          />
          <SkillBox
            title={trees.zane.abilities[1].skills[2].title}
            maxPoints={trees.zane.abilities[1].skills[2].maxPoints}
            imageUrl={trees.zane.abilities[1].skills[2].imageUrl}
            description={trees.zane.abilities[1].skills[2].description}
          />
          <SkillBox
            title={trees.zane.abilities[1].skills[3].title}
            maxPoints={trees.zane.abilities[1].skills[3].maxPoints}
            imageUrl={trees.zane.abilities[1].skills[3].imageUrl}
            description={trees.zane.abilities[1].skills[3].description}
          />
          <SkillBox
            title={trees.zane.abilities[1].skills[4].title}
            maxPoints={trees.zane.abilities[1].skills[4].maxPoints}
            imageUrl={trees.zane.abilities[1].skills[4].imageUrl}
            description={trees.zane.abilities[1].skills[4].description}
          />
          <SkillBox
            title={trees.zane.abilities[1].skills[5].title}
            maxPoints={trees.zane.abilities[1].skills[5].maxPoints}
            imageUrl={trees.zane.abilities[1].skills[5].imageUrl}
            description={trees.zane.abilities[1].skills[5].description}
          />
          <div className="col-span-3 grid place-content-center">
            <SkillBox
              title={trees.zane.abilities[1].skills[6].title}
              maxPoints={trees.zane.abilities[1].skills[6].maxPoints}
              imageUrl={trees.zane.abilities[1].skills[6].imageUrl}
              description={trees.zane.abilities[1].skills[6].description}
            />
          </div>
          <div className="col-span-3 flex justify-between ">
            <SkillBox
              title={trees.zane.abilities[1].skills[7].title}
              maxPoints={trees.zane.abilities[1].skills[7].maxPoints}
              imageUrl={trees.zane.abilities[1].skills[7].imageUrl}
              description={trees.zane.abilities[1].skills[7].description}
            />
            <SkillBox
              title={trees.zane.abilities[1].skills[8].title}
              maxPoints={trees.zane.abilities[1].skills[8].maxPoints}
              imageUrl={trees.zane.abilities[1].skills[8].imageUrl}
              description={trees.zane.abilities[1].skills[8].description}
            />
          </div>

          <div className="col-span-3 grid place-content-center">
            <SkillBox
              title={trees.zane.abilities[1].skills[9].title}
              maxPoints={trees.zane.abilities[1].skills[9].maxPoints}
              imageUrl={trees.zane.abilities[1].skills[9].imageUrl}
              description={trees.zane.abilities[1].skills[9].description}
            />
          </div>
          <div className="col-span-3 grid place-content-center">
            <SkillBox
              title={trees.zane.abilities[1].skills[10].title}
              maxPoints={trees.zane.abilities[1].skills[10].maxPoints}
              imageUrl={trees.zane.abilities[1].skills[10].imageUrl}
              description={trees.zane.abilities[1].skills[10].description}
            />
          </div>
        </div>
      </div>
      <div className="orange col-span-1">
        <h1 className="text-center mb-4">
          {trees.zane.abilities[2].skillTreeName}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <SkillBox
            title={trees.zane.abilities[2].skills[0].title}
            maxPoints={trees.zane.abilities[2].skills[0].maxPoints}
            imageUrl={trees.zane.abilities[2].skills[0].imageUrl}
            description={trees.zane.abilities[2].skills[0].description}
          />
          <SkillBox
            title={trees.zane.abilities[2].skills[1].title}
            maxPoints={trees.zane.abilities[2].skills[1].maxPoints}
            imageUrl={trees.zane.abilities[2].skills[1].imageUrl}
            description={trees.zane.abilities[2].skills[1].description}
          />
          <SkillBox
            title={trees.zane.abilities[2].skills[2].title}
            maxPoints={trees.zane.abilities[2].skills[2].maxPoints}
            imageUrl={trees.zane.abilities[2].skills[2].imageUrl}
            description={trees.zane.abilities[2].skills[2].description}
          />
          <SkillBox
            title={trees.zane.abilities[2].skills[3].title}
            maxPoints={trees.zane.abilities[2].skills[3].maxPoints}
            imageUrl={trees.zane.abilities[2].skills[3].imageUrl}
            description={trees.zane.abilities[2].skills[3].description}
          />
          <SkillBox
            title={trees.zane.abilities[2].skills[4].title}
            maxPoints={trees.zane.abilities[2].skills[4].maxPoints}
            imageUrl={trees.zane.abilities[2].skills[4].imageUrl}
            description={trees.zane.abilities[2].skills[4].description}
          />
          <SkillBox
            title={trees.zane.abilities[2].skills[5].title}
            maxPoints={trees.zane.abilities[2].skills[5].maxPoints}
            imageUrl={trees.zane.abilities[2].skills[5].imageUrl}
            description={trees.zane.abilities[2].skills[5].description}
          />
          <div className="col-span-3 grid place-content-center">
            <SkillBox
              title={trees.zane.abilities[2].skills[6].title}
              maxPoints={trees.zane.abilities[2].skills[6].maxPoints}
              imageUrl={trees.zane.abilities[2].skills[6].imageUrl}
              description={trees.zane.abilities[2].skills[6].description}
            />
          </div>

          <SkillBox
            title={trees.zane.abilities[2].skills[7].title}
            maxPoints={trees.zane.abilities[2].skills[7].maxPoints}
            imageUrl={trees.zane.abilities[2].skills[7].imageUrl}
            description={trees.zane.abilities[2].skills[7].description}
          />
          <SkillBox
            title={trees.zane.abilities[2].skills[8].title}
            maxPoints={trees.zane.abilities[2].skills[8].maxPoints}
            imageUrl={trees.zane.abilities[2].skills[8].imageUrl}
            description={trees.zane.abilities[2].skills[8].description}
          />
          <SkillBox
            title={trees.zane.abilities[2].skills[9].title}
            maxPoints={trees.zane.abilities[2].skills[9].maxPoints}
            imageUrl={trees.zane.abilities[2].skills[9].imageUrl}
            description={trees.zane.abilities[2].skills[9].description}
          />
          <SkillBox
            title={trees.zane.abilities[2].skills[10].title}
            maxPoints={trees.zane.abilities[2].skills[10].maxPoints}
            imageUrl={trees.zane.abilities[2].skills[10].imageUrl}
            description={trees.zane.abilities[2].skills[10].description}
          />
          <SkillBox
            title={trees.zane.abilities[2].skills[11].title}
            maxPoints={trees.zane.abilities[2].skills[11].maxPoints}
            imageUrl={trees.zane.abilities[2].skills[11].imageUrl}
            description={trees.zane.abilities[2].skills[11].description}
          />
          <SkillBox
            title={trees.zane.abilities[2].skills[12].title}
            maxPoints={trees.zane.abilities[2].skills[12].maxPoints}
            imageUrl={trees.zane.abilities[2].skills[12].imageUrl}
            description={trees.zane.abilities[2].skills[12].description}
          />
          <div className="col-span-3 grid place-content-center">
            <SkillBox
              title={trees.zane.abilities[2].skills[13].title}
              maxPoints={trees.zane.abilities[2].skills[13].maxPoints}
              imageUrl={trees.zane.abilities[2].skills[13].imageUrl}
              description={trees.zane.abilities[2].skills[13].description}
            />
          </div>
        </div>
      </div>
      <div className="purple col-span-1">
        <h1 className="text-center mb-4">
          {trees.zane.abilities[3].skillTreeName}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <SkillBox
            title={trees.zane.abilities[3].skills[0].title}
            maxPoints={trees.zane.abilities[3].skills[0].maxPoints}
            imageUrl={trees.zane.abilities[3].skills[0].imageUrl}
            description={trees.zane.abilities[3].skills[0].description}
          />
          <SkillBox
            title={trees.zane.abilities[3].skills[1].title}
            maxPoints={trees.zane.abilities[3].skills[1].maxPoints}
            imageUrl={trees.zane.abilities[3].skills[1].imageUrl}
            description={trees.zane.abilities[3].skills[1].description}
          />
          <SkillBox
            title={trees.zane.abilities[3].skills[2].title}
            maxPoints={trees.zane.abilities[3].skills[2].maxPoints}
            imageUrl={trees.zane.abilities[3].skills[2].imageUrl}
            description={trees.zane.abilities[3].skills[2].description}
          />
          <SkillBox
            title={trees.zane.abilities[3].skills[3].title}
            maxPoints={trees.zane.abilities[3].skills[3].maxPoints}
            imageUrl={trees.zane.abilities[3].skills[3].imageUrl}
            description={trees.zane.abilities[3].skills[3].description}
          />
          <SkillBox
            title={trees.zane.abilities[3].skills[4].title}
            maxPoints={trees.zane.abilities[3].skills[4].maxPoints}
            imageUrl={trees.zane.abilities[3].skills[4].imageUrl}
            description={trees.zane.abilities[3].skills[4].description}
          />
          <SkillBox
            title={trees.zane.abilities[3].skills[5].title}
            maxPoints={trees.zane.abilities[3].skills[5].maxPoints}
            imageUrl={trees.zane.abilities[3].skills[5].imageUrl}
            description={trees.zane.abilities[3].skills[5].description}
          />
          <div className="col-span-3 grid place-content-center">
            <SkillBox
              title={trees.zane.abilities[3].skills[6].title}
              maxPoints={trees.zane.abilities[3].skills[6].maxPoints}
              imageUrl={trees.zane.abilities[3].skills[6].imageUrl}
              description={trees.zane.abilities[3].skills[6].description}
            />
          </div>
          <div className="col-span-3 flex justify-between">
            <SkillBox
              title={trees.zane.abilities[3].skills[7].title}
              maxPoints={trees.zane.abilities[3].skills[7].maxPoints}
              imageUrl={trees.zane.abilities[3].skills[7].imageUrl}
              description={trees.zane.abilities[3].skills[7].description}
            />
            <SkillBox
              title={trees.zane.abilities[3].skills[8].title}
              maxPoints={trees.zane.abilities[3].skills[8].maxPoints}
              imageUrl={trees.zane.abilities[3].skills[8].imageUrl}
              description={trees.zane.abilities[3].skills[8].description}
            />
          </div>
          <div className="col-span-3 flex justify-between">
            <SkillBox
              title={trees.zane.abilities[3].skills[9].title}
              maxPoints={trees.zane.abilities[3].skills[9].maxPoints}
              imageUrl={trees.zane.abilities[3].skills[9].imageUrl}
              description={trees.zane.abilities[3].skills[9].description}
            />
            <SkillBox
              title={trees.zane.abilities[3].skills[10].title}
              maxPoints={trees.zane.abilities[3].skills[10].maxPoints}
              imageUrl={trees.zane.abilities[3].skills[10].imageUrl}
              description={trees.zane.abilities[3].skills[10].description}
            />
          </div>

          <div className="col-span-3 grid place-content-center">
            <SkillBox
              title={trees.zane.abilities[3].skills[11].title}
              maxPoints={trees.zane.abilities[3].skills[11].maxPoints}
              imageUrl={trees.zane.abilities[3].skills[11].imageUrl}
              description={trees.zane.abilities[3].skills[11].description}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
