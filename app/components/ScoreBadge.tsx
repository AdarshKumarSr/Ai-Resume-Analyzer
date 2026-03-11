import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let bgClass = "bg-badge-red";
  let textClass = "text-red-600";
  let label = "Needs Work";

  if (score > 70) {
    bgClass = "bg-badge-green";
    textClass = "text-green-600";
    label = "Strong";
  } else if (score > 49) {
    bgClass = "bg-badge-yellow";
    textClass = "text-yellow-600";
    label = "Good Start";
  }

  return (
    <div className={`rounded-full px-2 py-1 ${bgClass}`}>  
      <p className={`${textClass} text-sm font-semibold`}>{label}</p>
    </div>
  );
};

export default ScoreBadge;
