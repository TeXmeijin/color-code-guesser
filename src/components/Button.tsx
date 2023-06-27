type ButtonProps = {
  showNext: boolean;
  questionCount: number;
  checkAnswer: () => void;
  generateColor: () => void;
  finishGame: () => void;
  isValidColor: boolean;
};
export const Button = ({
  showNext,
  questionCount,
  checkAnswer,
  generateColor,
  finishGame,
  isValidColor,
}: ButtonProps) => {
  return (
    <>
      {showNext ? (
        <>
          {questionCount < 5 ? (
            <button
              className="bg-gray-500/30 hover:bg-gray-700/30 text-white border border-white font-bold py-2 px-4 rounded"
              onClick={() => generateColor()}
            >
              Next Question
            </button>
          ) : (
            <button
              className="bg-green-500 hover:bg-green-700 text-white border border-white text-xl font-bold py-2 px-4 rounded"
              onClick={() => finishGame()}
            >
              Show Results
            </button>
          )}
        </>
      ) : (
        <button
          className="bg-gray-500/30 hover:bg-gray-700/30 text-white border border-white font-bold py-2 px-4 rounded disabled:bg-gray-500 disabled:text-gray-300 disabled:font-normal"
          onClick={() => checkAnswer()}
          disabled={!isValidColor}
        >
          Check Answer
        </button>
      )}
    </>
  );
};
