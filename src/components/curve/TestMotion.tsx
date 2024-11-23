"use client";

import { regexPath } from "@/src/utils/regexPath";
import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import { curve, text, translate } from "../../utils/anim";

const anim = (variants: Variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

type CurveProps = {
  children: React.ReactNode;
  path: string;
};

export default function Curve({ children, path }: CurveProps) {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const pathConvert = regexPath(path);

  useEffect(() => {
    const resize = () => {
      // if (typeof window !== "undefined") {
      //   setDimensions({
      //     width: window.innerWidth,
      //     height: window.innerHeight,
      //   });
      // }
    };

    // resize(); // Set dimensions on initial mount
    // window.addEventListener("resize", resize);

    // return () => {
    //   window.removeEventListener("resize", resize);
    // };
  }, []);

  return (
    <div className="page curve">
      <div
        className={`background ${dimensions.width === 0 ? "opacity-100" : "opacity-0"} z-[999]`}
      />
      <motion.p className="route" {...anim(text)}>
        {pathConvert}
      </motion.p>
      {dimensions.width > 0 && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )}
      {children}
    </div>
  );
}

type SVGProps = {
  height: number;
  width: number;
};

const SVG = ({ height, width }: SVGProps) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
