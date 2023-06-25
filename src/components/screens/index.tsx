"use client";
import React, { useState, useEffect } from "react";
import colorDifference from "color-difference";

export const Index = () => {
  const [color, setColor] = useState("");
  const [userColor, setUserColor] = useState("");
  const [difference, setDifference] = useState(null);
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
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      {!showResult && <h1 className="mb-4">問題 {questionCount} / 5</h1>}
      {!showResult ? (
        <>
          <input
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 mb-4"
            type="text"
            value={userColor}
            onChange={(e) => setUserColor(e.target.value.replace("#", ""))}
          />
          {showNext && questionCount < 5 && (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded mb-2"
              onClick={generateColor}
            >
              次へ
            </button>
          )}
          {showNext && questionCount === 5 && (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded mb-2"
              onClick={finishGame}
            >
              最終結果を見る
            </button>
          )}
          {!showNext && (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded mb-2"
              onClick={checkAnswer}
            >
              答え合わせ
            </button>
          )}
          {showNext && (
            <div className="flex flex-col items-center">
              <p className="mb-2">正解のカラーコード: {color}</p>
              <p className="mb-2">あなたの入力: #{userColor}</p>
              <p className="mb-2">
                ズレ: {Math.round(difference * 100) / 100}％
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="mb-4">結果発表</h2>
          <p className="mb-2">
            合計得点: {Math.round(totalDifference * 100) / 100}％
          </p>
          <p className="mb-2">
            平均得点: {Math.round((totalDifference / 5) * 100) / 100}％
          </p>
        </div>
      )}
    </div>
  );
};
