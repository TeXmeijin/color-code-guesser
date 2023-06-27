type ColorDiffProps = {
  color: string;
  userColor: string;
  difference: number;
};

export const ColorDiff = ({ color, userColor, difference }: ColorDiffProps) => (
  <div className="flex flex-col items-center">
    <p className="mb-2">正解のカラーコード: {color}</p>
    <p className="mb-2">あなたの入力: #{userColor}</p>
    <p className="mb-2">ズレ: {Math.round(difference * 100) / 100}％</p>
  </div>
);
