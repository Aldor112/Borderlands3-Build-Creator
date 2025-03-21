"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { use, useEffect, useState } from "react";

export default function SkillBox({
  title,
  maxPoints,
  imageUrl,
  description,
  pointsAssigned,
}: {
  title: string;
  maxPoints: number;
  imageUrl: string;
  description: string;
  pointsAssigned?: number;
}) {
  const [points, setPoints] = useState(0);
  useEffect(() => {
    setPoints(pointsAssigned ?? 0);
  }, []);
  const handleAddPoint = () => {
    if (points < maxPoints) {
      setPoints(points + 1);
    }
  };
  const handleRemovePoint = () => {
    if (points > 0) {
      setPoints(points - 1);
    }
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center gap-2 flex-col">
          <img src={imageUrl} alt={title} className="w-12 h-12" />

          <div className="flex gap-2">
            <button onClick={handleAddPoint}>+</button>
            <p>{points}</p>
            <button onClick={handleRemovePoint}>-</button>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p>{description}</p>
      </HoverCardContent>
    </HoverCard>
  );
}
