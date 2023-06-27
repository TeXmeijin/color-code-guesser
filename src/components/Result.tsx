import React from "react";
import { TwitterShareButton } from "./ui/TwitterShareButton";

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

  const evaluateEmoji = (() => {
    if (averageDifference > 80) {
      return "😱";
    }
    if (averageDifference > 65) {
      return "😰";
    }
    if (averageDifference > 50) {
      return "😮‍💨";
    }
    if (averageDifference > 35) {
      return "🤔";
    }
    if (averageDifference > 20) {
      return "🙂";
    }
    if (averageDifference > 10) {
      return "😁";
    }
    return "🥰";
  })();

  const resultsText = `My color code correct rate is ${averageDifference}％.`;

  return (
    <div className="bg-black text-white rounded p-8 mt-8">
      <h2 className="text-3xl font-bold text-center mb-6 md:mb-4">
        Final Results
      </h2>
      <div className={"flex items-center md:block"}>
        <p className="text-center md:mb-4">
          <span>Average diff:</span>
          <span className={"text-2xl"}>{averageDifference}%</span>
        </p>
        <p className={"text-center md:mb-6"}>
          <span className="text-4xl md:text-[60px]">{evaluateEmoji}</span>
        </p>
      </div>
      <div className={"flex flex-col md:flex-row"}>
        {colorHistory.map((color, i) => (
          <div
            key={i}
            className="flex md:flex-col items-center justify-center space-x-4 mt-2"
          >
            <div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white"
              style={{ backgroundColor: color }}
            />
            <div className={"grid grid-cols-2 text-sm md:text-base"}>
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
      <div className="mt-4 md:mt-12 flex justify-center">
        <TwitterShareButton
          title={resultsText}
          url={"https://color-code-guesser.vercel.app/"}
        ></TwitterShareButton>
      </div>
    </div>
  );
};
