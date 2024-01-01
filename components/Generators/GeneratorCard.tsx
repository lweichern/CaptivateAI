import Image from "next/image";
import Link from "next/link";
import React from "react";

export type generatorType = {
  generator: {
    title: string;
    description: string;
    imageUrl: string;
    targetUrl: string;
  };
};

function GeneratorCard({ generator }: generatorType) {
  return (
    <Link href={generator.targetUrl}>
      <div className=" border-primary border-2 rounded group h-fit relative overflow-hidden max-w-lg mx-auto">
        <Image
          src={generator.imageUrl}
          width={450}
          height={200}
          alt="Property Image"
          className="w-full group-hover:scale-105 duration-300 ease-in-out"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-b from-primary/0 via-primary to-primary p-3">
          <h3 className="text-2xl group-hover:text-[1.6rem] my-2 group-hover:-translate-y-2 duration-300">
            {generator.title}
          </h3>
          <p className="group-hover:-translate-y-2 duration-300">
            {generator.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default GeneratorCard;
