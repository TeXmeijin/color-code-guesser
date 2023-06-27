type ButtonProps = {
  showNext: boolean;
  questionCount: number;
  checkAnswer: () => void;
  generateColor: () => void;
  finishGame: () => void;
};

export const Button = ({
  showNext,
  questionCount,
  checkAnswer,
  generateColor,
  finishGame,
}: ButtonProps) =>
  showNext ? (
    questionCount < 5 ? (
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mb-2"
        onClick={generateColor}
      >
        次へ
      </button>
    ) : (
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mb-2"
        onClick={finishGame}
      >
        最終結果を見る
      </button>
    )
  ) : (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded mb-2"
      onClick={checkAnswer}
    >
      答え合わせ
    </button>
  );
