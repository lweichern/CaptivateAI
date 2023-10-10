"use client";

import SlideUpAnimation from "@/components/SlideUpAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const accordionHeaderClassname = "text-lg";
const accordionContentClassname = "text-md";

function FAQ() {
  return (
    <motion.section className="px-8 lg:px-20 mx-auto">
      <SlideUpAnimation>
        <>
          <h2 className="text-4xl text-center font-semibold mb-3">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className={accordionHeaderClassname}>
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className={accordionContentClassname}>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className={accordionHeaderClassname}>
                Is it styled?
              </AccordionTrigger>
              <AccordionContent className={accordionContentClassname}>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className={accordionHeaderClassname}>
                Is it animated?
              </AccordionTrigger>
              <AccordionContent className={accordionContentClassname}>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      </SlideUpAnimation>
    </motion.section>
  );
}

export default FAQ;
