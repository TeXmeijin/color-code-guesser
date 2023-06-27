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
  const [questionCount, setQuestionCount] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    generateColor();
  }, []);

  function generateColor() {
    const newColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${newColor}`);
    setUserColor("");
    setDifference(null);
    setShowNext(false);
    if (questionCount < 5) {
      setQuestionCount(questionCount + 1);
    }
  }

  function checkAnswer() {
    const diff = colorDifference.compare(color, `#${userColor}`);
    setDifference(diff);
    setTotalDifference(totalDifference + diff);
    setShowNext(true);
  }

  function finishGame() {
    setShowResult(true);
  }

  return (
    <div
      className="relative font-mono h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-4 left-4 text-xl md:text-2xl font-bold border-2 p-2">
        <span className="text-shadow shadow-gray-800">Color Code Guesser</span>
      </div>
      {!showResult && <Header questionCount={questionCount} />}
      {!showResult && (
        <ColorInput userColor={userColor} setUserColor={setUserColor} />
      )}
      {!showResult && (
        <Button
          showNext={showNext}
          questionCount={questionCount}
          checkAnswer={checkAnswer}
          generateColor={generateColor}
          finishGame={finishGame}
        />
      )}
      {showNext && difference !== null && (
        <ColorDiff
          color={color}
          userColor={userColor}
          difference={difference}
        />
      )}
      {showResult && <Result totalDifference={totalDifference} />}
    </div>
  );
};
