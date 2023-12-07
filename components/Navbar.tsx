"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { navlinks } from "@/public/navlink";
import SideNav from "./SideNav";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { UserButton, useUser } from "@clerk/nextjs";

function Navbar() {
  const { isSignedIn } = useUser();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 150 && latest > scrollY.getPrevious()) {
      return setHidden(true);
    }
    setHidden(false);
  });

  return (
    <motion.nav
      variants={{
        hidden: { y: "-150%", x: "-50%" },
        visible: { y: 0, x: "-50%" },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`glass fixed ${
        hidden ? "shadow-none" : "shadow-md"
      } shadow-primary flex items-center justify-between py-2 px-8 lg:px-20 w-[97%] z-10  rounded-full bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 mt-6 -translate-x-1/2 left-1/2`}
    >
      <a href="/">
        <div className="text-lg text-white font-extrabold">CaptivateAI.</div>
      </a>
      <div className="flex gap-1 items-center">
        <div className="md:hidden flex items-center">
          <SideNav />
        </div>
        <div className="flex items-center">
          {navlinks.map((link) => (
            <Button
              variant="link"
              key={link.title}
              className="text-md hidden md:block text-white hover:bg-slate-400 hover:no-underline"
            >
              <a href={link.path}>{link.title}</a>
            </Button>
          ))}
        </div>
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Button>
            <a href="/sign-in">Sign In</a>
          </Button>
        )}

        {/* <ToggleThemeButton /> */}
      </div>
    </motion.nav>
  );
}

export default Navbar;
