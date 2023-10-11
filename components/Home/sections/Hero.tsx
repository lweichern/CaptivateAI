"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <section className="h-screen flex justify-center items-center ">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="text-4xl text-center lg:text-left">
          <div className="mb-6">
            Activate your{" "}
            <span className=" underline decoration-primary">
              social presence
            </span>{" "}
            with
            <br />
            <span className="text-primary font-semibold"> Captivate AI</span>
          </div>
          <Button>
            <ScrollLink to="promptSection" smooth={true}>
              Try It Out
            </ScrollLink>
          </Button>
        </div>
        <div className=" flex-col hidden lg:flex">
          <div className="flex">
            <Image src="/twitter.jpg" width="64" height="50" alt="" />
            <Image src="/instagram.jpg" width="64" height="50" alt="" />
          </div>
          <div className="w-full relative">
            <Image src="/x.jpg" fill alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
