"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type propType = {
  question: string;
};

function CardContainer({ question }: propType) {
  const [windowHeight, setWindowHeight] = useState(0);
  const targetRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 1, 0]);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <motion.div
      ref={targetRef}
      className="h-screen flex justify-center items-center "
    >
      <motion.h2
        style={{ opacity, top: Math.floor(windowHeight / 2 - 60) + "px" }}
        className={`text-primary text-6xl sticky`}
      >
        {question}
      </motion.h2>
    </motion.div>
  );
}

export default CardContainer;
