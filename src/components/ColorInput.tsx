import React, { useState, useEffect, useRef } from "react";

type ColorInputProps = {
  setUserColor: (color: string) => void;
};

export const ColorInput = ({ setUserColor }: ColorInputProps) => {
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");

  const redRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const [r, g, b] = ["", "", ""];
    setRed(r);
    setGreen(g);
    setBlue(b);
    redRef.current?.focus();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value.length <= 2 && /^[0-9a-fA-F]*$/.test(value)) {
      if (name === "red") {
        setUserColor(`${value.toUpperCase()}${green}${blue}`);
        setRed(value.toUpperCase());
      } else if (name === "green") {
        setUserColor(`${red}${value.toUpperCase()}${blue}`);
        setGreen(value.toUpperCase());
      } else if (name === "blue") {
        setUserColor(`${red}${green}${value.toUpperCase()}`);
        setBlue(value.toUpperCase());
      }
    }
  };

  return (
    <div className="flex justify-between gap-x-4">
      <div className="text-center">
        <label htmlFor="red" className="block">
          R
        </label>
        <input
          ref={redRef}
          maxLength={2}
          pattern={"[A-Fa-f0-9]{2}"}
          id="red"
          name="red"
          onChange={onChange}
          autoComplete="off"
          placeholder={"E5"}
          className="w-16 border border-gray-300 text-gray-900 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 invalid:border-red-500 invalid:border-4 invalid:focus:border-none invalid:focus:outline-none"
        />
      </div>
      <div className="text-center">
        <label htmlFor="green" className="block">
          G
        </label>
        <input
          maxLength={2}
          pattern={"[A-Fa-f0-9]{2}"}
          id="green"
          name="green"
          onChange={onChange}
          autoComplete="off"
          placeholder={"4F"}
          className="w-16 border border-gray-300 text-gray-900 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 invalid:border-red-500 invalid:border-2"
        />
      </div>
      <div className="text-center">
        <label htmlFor="blue" className="block">
          B
        </label>
        <input
          maxLength={2}
          pattern={"[A-Fa-f0-9]{2}"}
          id="blue"
          name="blue"
          onChange={onChange}
          autoComplete="off"
          placeholder={"A1"}
          className="w-16 border border-gray-300 text-gray-900 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 invalid:border-red-500 invalid:border-4"
        />
      </div>
    </div>
  );
};
