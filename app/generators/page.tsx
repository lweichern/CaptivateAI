import React from "react";
import GeneratorCard from "@/components/Generators/GeneratorCard";

import { generators } from "@/lib/data";

function Generators() {
  return (
    <div className="flex justify-center min-h-screen ">
      <section className=" mx-auto w-full px-8 md:px-14 lg:px-24 my-5 overflow-hidden flex flex-col gap-4 mt-32">
        <h2 className="text-3xl text-center">Our Generators</h2>
        <div className="flex justify-center gap-10 flex-col md:flex-row ">
          {generators.map((generator) => (
            <GeneratorCard generator={generator} key={generator.title} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Generators;
