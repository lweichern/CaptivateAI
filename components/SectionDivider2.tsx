"use client";

import React from "react";
import { motion } from "framer-motion";

function SectionDivider2() {
  return (
    <div className="mx-auto flex justify-center items-center gap-3">
      {[2, 3, 4, 3, 2].map((elem, index) => (
        <motion.div
          className={`h-${elem} w-${elem} bg-primary rounded-full`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: elem * 0.1 }}
          key={index}
        ></motion.div>
      ))}
    </div>
  );
}

export default SectionDivider2;
