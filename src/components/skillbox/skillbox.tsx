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
  onPointsChange, // Callback prop
}: {
  title: string;
  maxPoints: number;
  imageUrl: string;
  description: string;
  pointsAssigned?: number;
  onPointsChange: (skill: {
    title: string;
    maxPoints: number;
    imageUrl: string;
    description: string;
    points: number;
  }) => void; // Updated callback type
}) {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPoints(pointsAssigned ?? 0);
  }, []);

  const handleAddPoint = () => {
    if (points < maxPoints) {
      const newPoints = points + 1;
      setPoints(newPoints);
      onPointsChange({
        title,
        maxPoints,
        imageUrl,
        description,
        points: newPoints,
      }); // Notify parent with full skill object
    }
  };

  const handleRemovePoint = () => {
    if (points > 0) {
      const newPoints = points - 1;
      setPoints(newPoints);
      onPointsChange({
        title,
        maxPoints,
        imageUrl,
        description,
        points: newPoints,
      }); // Notify parent with full skill object
    }
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center gap-2 flex-col">
          <img
            src={imageUrl}
            alt={title}
            className="w-16 h-16 rounded-md border border-gray-300 shadow-sm"
          />
          <div className="flex gap-4 items-center">
            {pointsAssigned ? null : (
              <button
                onClick={handleRemovePoint}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                -
              </button>
            )}
            <p className="text-lg font-medium text-white">{points}</p>
            {pointsAssigned ? null : (
              <button
                onClick={handleAddPoint}
                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                +
              </button>
            )}
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4 bg-white border border-gray-200 rounded shadow-lg">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </HoverCardContent>
    </HoverCard>
  );
}
