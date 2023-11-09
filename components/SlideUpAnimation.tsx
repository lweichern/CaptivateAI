import React from "react";
import { motion } from "framer-motion";

function SlideUpAnimation({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "tween" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default SlideUpAnimation;
