"use client";
import React, { useState, useEffect } from "react";
import colorDifference from "color-difference";
import { Header } from "@/components/Header";
import { ColorInput } from "@/components/ColorInput";
import { Button } from "@/components/Button";
import { ColorDiff } from "@/components/ColorDiff";
import { Result } from "@/components/Result";

export const Index = () => {
  const [color, setColor] = useState("");
  const [userColor, setUserColor] = useState("");
  const [difference, setDifference] = useState<number | null>(null);
  const [totalDifference, setTotalDifference] = useState(0);
  const [questionCount, setQuestionCount] = useState(1);
  const [showNext, setShowNext] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [colorHistory, setColorHistory] = useState<string[]>([]);
  const [userColorHistory, setUserColorHistory] = useState<string[]>([]);

  useEffect(() => {
    generateColor(true);
  }, []);

  function generateColor(initial?: boolean) {
    const newColor = Math.floor(Math.random() * (16 ** 6 - 1))
      .toString(16)
      .padStart(6, "0")
      .toUpperCase();
    setColor(`#${newColor}`);
    setUserColor("");
    setDifference(null);
    setShowNext(false);
    if (questionCount < 5 && !initial) {
      setQuestionCount((q) => q + 1);
    }
  }

  function checkAnswer() {
    const diff = colorDifference.compare(color, `#${userColor}`);
    setDifference(diff);
    setTotalDifference(totalDifference + diff);
    setColorHistory([...colorHistory, color]);
    setUserColorHistory([...userColorHistory, userColor]);
    setShowNext(true);
  }

  function finishGame() {
    setShowNext(false);
    setShowResult(true);
  }

  return (
    <div
      className="relative font-mono text-white h-screen flex flex-col justify-center items-center leading-7 tracking-wider"
      style={{ backgroundColor: showResult ? "#000" : color }}
    >
      <h1 className="absolute top-4 left-4 text-xl md:text-2xl font-bold border-2 p-2">
        <span className="text-shadow shadow-gray-600">Color Code Guesser</span>
      </h1>
      <p className={"absolute bottom-4 right-4 text-sm"}>
        <span>
          Created By{" "}
          <a
            href="https://twitter.com/Meijin_garden"
            rel="nofollow"
            target="_blank"
            className={"underline text-indigo-500"}
          >
            @Meijin_garden
          </a>
        </span>
      </p>
      {!showResult && <Header questionCount={questionCount} />}
      {!showResult && (
        <ColorInput color={userColor} setUserColor={setUserColor} />
      )}
      {!showResult && (
        <div className="mt-8">
          <Button
            showNext={showNext}
            questionCount={questionCount}
            checkAnswer={checkAnswer}
            generateColor={generateColor}
            finishGame={finishGame}
            isValidColor={!!userColor}
          />
        </div>
      )}
      {showNext && difference !== null && (
        <div className="mt-4">
          <ColorDiff
            color={color}
            userColor={userColor}
            difference={difference}
          />
        </div>
      )}
      {showResult && (
        <Result
          totalDifference={totalDifference}
          colorHistory={colorHistory}
          userColorHistory={userColorHistory}
        />
      )}
    </div>
  );
};
