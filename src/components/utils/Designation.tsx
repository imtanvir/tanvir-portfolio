"use client";
import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "full-stack developer",
  "problem solver",
  "team leader",
  "rubik's cube solver",
];

const Designation = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        className="md:text-7xl font-Oswald font-bold"
        springConfig={presets.wobbly}
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
};

export default Designation;
