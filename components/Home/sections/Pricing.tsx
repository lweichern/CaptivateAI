"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PriceCard from "@/components/Pricing/PriceCard";
import { useAppSelector } from "@/app/redux/store";

function Pricing() {
  const style = useAppSelector((state) => state.styleReducer);
  return (
    <main>
      Styles: {style}
      <section className="w-full max-w-6xl px-8 md:px-14 lg:px-24 my-2 mx-auto">
        <h2 className="text-3xl text-center my-7">Pricing</h2>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="flex justify-center gap-10 flex-col md:flex-row"
        >
          <PriceCard
            subscriptionType="Beginner"
            features={[
              "ChatGPT 3.5",
              "Limited to 10 prompts per account",
              "Limited styles",
            ]}
          />
          <PriceCard
            subscriptionType="Pro"
            features={["ChatGPT 3.5", "Unlimited prompts", "Unlimited styles"]}
            price={10}
          />
        </motion.div>
      </section>
    </main>
  );
}

export default Pricing;
