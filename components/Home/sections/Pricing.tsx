"use client";

import React from "react";
import { motion } from "framer-motion";
import PriceCard from "@/components/Pricing/PriceCard";

function Pricing() {
  return (
    <main>
      <section className="w-full max-w-6xl px-8 md:px-14 lg:px-24 my-2 mx-auto">
        <h2 className="text-3xl text-center my-7">Pricing</h2>

        <div className="flex justify-center gap-10 flex-col md:flex-row">
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
        </div>
      </section>
    </main>
  );
}

export default Pricing;
