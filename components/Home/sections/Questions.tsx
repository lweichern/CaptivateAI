"use client";

import React, { useEffect, useRef } from "react";
import { questions } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import CardContainer from "../CardContainer";
import RingOrbit from "@/components/RingOrbit";

function Questions() {
  return (
    <section className="mx-auto w-full px-8 lg:px-20 my-2 grid place-items-center lg:h-screen">
      <RingOrbit />
      <h2 className="text-4xl text-center font-semibold mb-3 lg:hidden">
        Why CaptivateAI?
      </h2>
      <div className="flex flex-col gap-14 md:gap-24  [&>*:nth-child(even)]:text-right [&>*:nth-child(even)]:-skew-y-3 [&>*:nth-child(odd)]:skew-y-3 lg:hidden">
        {questions.map((question, index) => (
          <CardContainer question={question.question} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Questions;
