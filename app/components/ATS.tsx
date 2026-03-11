import React from "react";

interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number; // 0-100
  suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
  // background gradient
  let bgFrom = "from-red-100";
  if (score > 70) {
    bgFrom = "from-green-100";
  } else if (score > 49) {
    bgFrom = "from-yellow-100";
  }

  // icon based on score
  let iconSrc = "/icons/ats-bad.svg";
  if (score > 70) {
    iconSrc = "/icons/ats-good.svg";
  } else if (score > 49) {
    iconSrc = "/icons/ats-warning.svg";
  }

  return (
    <div
      className={`p-6 rounded-lg bg-linear-to-br ${bgFrom} to-white shadow-md`}
    >
      {/* Top section */}
      <div className="flex items-center mb-4">
        <img src={iconSrc} alt="ATS icon" className="w-10 h-10 mr-3" />
        <h2 className="text-xl font-bold">ATS Score - {score}/100</h2>
      </div>

      {/* Description section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">How your resume performs</h3>
        <p className="text-gray-600 mt-1">
          This analysis shows how compatible your resume is with applicant tracking
          systems. Follow the tips below to improve your score.
        </p>
      </div>

      {/* Suggestions list */}
      <ul className="mb-4 space-y-2">
        {suggestions.map((sugg, idx) => {
          const icon = sugg.type === "good" ? "/icons/check.svg" : "/icons/warning.svg";
          return (
            <li key={idx} className="flex items-start">
              <img src={icon} alt="suggestion icon" className="w-5 h-5 mt-1 mr-2" />
              <span className="text-gray-700">{sugg.tip}</span>
            </li>
          );
        })}
      </ul>

      <p className="text-gray-800 font-medium">
        Keep improving your resume to increase your ATS compatibility!
      </p>
    </div>
  );
};

export default ATS;

