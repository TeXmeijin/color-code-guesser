import React, { useState, useEffect, useRef } from "react";

type ColorInputProps = {
  color: string;
  setUserColor: (color: string) => void;
};

export const ColorInput = ({ color, setUserColor }: ColorInputProps) => {
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");

  const redRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const [r, g, b] = color
      ? [color.slice(0, 2), color.slice(2, 4), color.slice(4, 6)]
      : ["", "", ""];
    setRed(r);
    setGreen(g);
    setBlue(b);

    if (!color) {
      redRef.current?.focus();
    }
  }, [color]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value.length <= 2 && /^[0-9a-fA-F]*$/.test(value)) {
      if (name === "red") {
        setRed(value.toUpperCase());
      } else if (name === "green") {
        setGreen(value.toUpperCase());
      } else if (name === "blue") {
        setBlue(value.toUpperCase());
      }
    }
  };

  useEffect(() => {
    if (red.length === 2 && green.length === 2 && blue.length === 2) {
      setUserColor(`${red}${green}${blue}`);
    }
  }, [red, green, blue, setUserColor]);

  return (
    <div className="flex justify-between gap-x-4">
      <div className="text-center">
        <label htmlFor="red" className="block">
          R
        </label>
        <input
          ref={redRef}
          id="red"
          name="red"
          value={red}
          onChange={onChange}
          autoComplete="off"
          placeholder={"E5"}
          className="w-16 border border-gray-300 text-gray-900 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400"
        />
      </div>
      <div className="text-center">
        <label htmlFor="green" className="block">
          G
        </label>
        <input
          id="green"
          name="green"
          value={green}
          onChange={onChange}
          autoComplete="off"
          placeholder={"4F"}
          className="w-16 border border-gray-300 text-gray-900 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400"
        />
      </div>
      <div className="text-center">
        <label htmlFor="blue" className="block">
          B
        </label>
        <input
          id="blue"
          name="blue"
          value={blue}
          onChange={onChange}
          autoComplete="off"
          placeholder={"A1"}
          className="w-16 border border-gray-300 text-gray-900 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400"
        />
      </div>
    </div>
  );
};
