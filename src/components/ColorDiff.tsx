type ColorDiffProps = {
  color: string;
  userColor: string;
  difference: number;
};

export const ColorDiff = ({ color, userColor, difference }: ColorDiffProps) => {
  const correctColorCode = `${color.toUpperCase()}`;
  const userColorCode = `#${userColor.toUpperCase()}`;
  const diff = Math.round(difference * 100) / 100;
  return (
    <div className="grid grid-cols-2 gap-x-4 text-center p-4 bg-gray-400/30">
      <div className="text-right">Correct:</div>
      <div className="text-left">{correctColorCode}</div>
      <div className="text-right">Your Input:</div>
      <div className="text-left">{userColorCode}</div>
      <div className="text-right">Difference:</div>
      <div className="text-left">{diff}%</div>
    </div>
  );
};
