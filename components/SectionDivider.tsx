"use client";

import React from "react";
import { motion } from "framer-motion";

function SectionDivider() {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 70 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: true }}
    //   transition={{ duration: 0.5 }}
    //   className=" bg-gradient-to-b from-background via-primary to-background my-10 h-32 w-1 rounded-full dark:bg-opacity-20 mx-auto"
    // ></motion.div>
    <motion.div
      className="bg-primary w-0 h-[1px] my-10 mx-auto opacity-60"
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.7 }}
    ></motion.div>
  );
}

export default SectionDivider;
