"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row">
        <div className=" text-center lg:text-left flex flex-col justify-center gap-3 w-1/2">
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold">
            Activate your{" "}
            <span className=" underline decoration-primary">
              social presence
            </span>{" "}
            with
            <br />
            <span className="text-primary font-semibold"> Captivate AI</span>
          </h2>
          <span className="text-lg md:text-2xl lg:text-3xl">
            Use AI to generate captions and descriptions for your products.
          </span>
          <Button className=" w-fit mx-auto lg:mx-0 mt-3 text-md font-semibold">
            <Link href={"/prompt"}>Try For Free</Link>
          </Button>
        </div>
        <div className="flex-col hidden lg:flex w-1/2 items-end">
          <Image src="/twitter.jpg" alt="" width={500} height={200} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
