import React from "react";

type ResultProps = {
  totalDifference: number;
  colorHistory: string[];
  userColorHistory: string[];
};
export const Result = ({
  totalDifference,
  colorHistory,
  userColorHistory,
}: ResultProps) => {
  const averageDifference = Math.round((totalDifference / 5) * 100) / 100;
  return (
    <div className="bg-black text-white rounded p-8 mt-8">
      <h2 className="text-3xl font-bold text-center mb-4">Final Results</h2>
      <p className="text-2xl text-center mb-8">
        Average diff: {averageDifference}%
      </p>
      <div className={"flex flex-col md:flex-row"}>
        {colorHistory.map((color, i) => (
          <div
            key={i}
            className="flex md:flex-col items-center justify-center space-x-4 mt-2"
          >
            <div
              className="w-20 h-20 rounded-full border-2 border-white"
              style={{ backgroundColor: color }}
            />
            <div className={"grid grid-cols-2"}>
              <div className="text-right mr-1">Correct:</div>
              <div className="text-left">{color}</div>
              <div className="text-right mr-1">Yours:</div>
              <div className="text-left">
                #{userColorHistory[i].toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
