type ResultProps = {
  totalDifference: number;
};

export const Result = ({ totalDifference }: ResultProps) => (
  <div className="flex flex-col items-center">
    <h2 className="mb-4">結果発表</h2>
    <p className="mb-2">
      合計得点: {Math.round(totalDifference * 100) / 100}％
    </p>
    <p className="mb-2">
      平均得点: {Math.round((totalDifference / 5) * 100) / 100}％
    </p>
  </div>
);
