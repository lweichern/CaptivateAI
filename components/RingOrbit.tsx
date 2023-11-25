import React from "react";
import { questions } from "@/lib/data";
import { motion } from "framer-motion";

function RingOrbit() {
  const offset = "300px";
  const anchorSize = "250px";
  const size = "250";
  const circlePositionStyle = (num: number) => {
    return {
      width: `${size}px`,
      // top: `${-0.5 * parseInt(size) + 20}px`,
      // left: `${-0.5 * parseInt(size) + 20}px`,
      aspectRatio: "1",
      transform: `translate(calc(cos(${
        (360 / questions.length) * num
      }deg) * ${offset}), calc(sin(${
        (360 / questions.length) * num
      }deg) * ${offset}))`,
      // transform: `translate(0px, 0)`
    };
  };

  return (
    <div
      className=" rounded-full relative bg-accent text-3xl lg:flex justify-center items-center hidden p-3 text-center font-semibold"
      style={{ height: anchorSize, width: anchorSize }}
    >
      Why CaptivateAI?
      {questions.map((elem, index) => (
        <motion.div
          style={circlePositionStyle(index)}
          className="bg-primary rounded-full absolute flex justify-center items-center text-center text-2xl shadow-md shadow-accent p-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
          viewport={{ once: true }}
          key={index}
        >
          {elem.question}
        </motion.div>
      ))}
    </div>
  );
}

export default RingOrbit;
