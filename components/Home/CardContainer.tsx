"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type propType = {
  question: string;
};

function CardContainer({ question }: propType) {
  const targetRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 1, 0.05]);

  return (
    <motion.h2
      ref={targetRef}
      style={{ opacity }}
      className="text-primary text-6xl skew-x-12"
    >
      {question}
    </motion.h2>
  );
}

export default CardContainer;
