import { useState } from "react";

type ColorInputProps = {
  userColor: string;
  setUserColor: (color: string) => void;
};

export const ColorInput = ({ userColor, setUserColor }: ColorInputProps) => {
  const [r, g, b] = userColor
    ? [userColor.slice(0, 2), userColor.slice(2, 4), userColor.slice(4, 6)]
    : ["", "", ""];
  const [inputR, setInputR] = useState(r);
  const [inputG, setInputG] = useState(g);
  const [inputB, setInputB] = useState(b);

  const handleInputChange = (
    value: string,
    setInput: (value: string) => void,
    index: number
  ) => {
    if (value.length <= 2 && /^[0-9a-fA-F]*$/.test(value)) {
      const newValue = value.toUpperCase();
      setInput(newValue);
      if (index === 0) {
        setUserColor(newValue + inputG + inputB);
      } else if (index === 1) {
        setUserColor(inputR + newValue + inputB);
      } else {
        setUserColor(inputR + inputG + newValue);
      }
    }
  };

  return (
    <div className="flex gap-x-2">
      <div className="flex flex-col items-center">
        <label className="block mb-1">R</label>
        <input
          className="w-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 mb-4"
          type="text"
          value={inputR}
          onChange={(e) => handleInputChange(e.target.value, setInputR, 0)}
        />
      </div>
      <div className="flex flex-col items-center">
        <label className="block mb-1">G</label>
        <input
          className="w-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 mb-4"
          type="text"
          value={inputG}
          onChange={(e) => handleInputChange(e.target.value, setInputG, 1)}
        />
      </div>
      <div className="flex flex-col items-center">
        <label className="block mb-1">B</label>
        <input
          className="w-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 mb-4"
          type="text"
          value={inputB}
          onChange={(e) => handleInputChange(e.target.value, setInputB, 2)}
        />
      </div>
    </div>
  );
};
