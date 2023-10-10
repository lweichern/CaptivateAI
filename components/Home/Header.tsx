"use client";

import React from "react";
import PromptInput from "./PromptInput";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      className=" h-screen flex  flex-col"
    >
      <h2 className="text-2xl mt-32 text-center">
        Prompt it with{" "}
        <span className="text-primary font-semibold">CaptivateAI</span>!
      </h2>
      <br />
      <PromptInput />
    </motion.section>
  );
}

export default Header;
