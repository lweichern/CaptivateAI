"use client";

import SlideUpAnimation from "@/components/SlideUpAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { faqs } from "@/lib/data";

const accordionHeaderClassname = "text-lg";
const accordionContentClassname = "text-md text-primary whitespace-pre-wrap";

type Faq = {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
};

function FAQ() {
  return (
    <motion.section className="px-8 lg:px-20 mx-auto">
      <SlideUpAnimation>
        <>
          <h2 className="text-4xl text-center font-semibold mb-3">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <FAQQuestions faq={faq} index={index} key={index} />
            ))}
          </Accordion>
        </>
      </SlideUpAnimation>
    </motion.section>
  );
}

function FAQQuestions({ faq, index }: Faq) {
  return (
    <AccordionItem value={`item-${index}`}>
      <AccordionTrigger className={accordionHeaderClassname}>
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className={accordionContentClassname}>
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default FAQ;
