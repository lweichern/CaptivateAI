"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { navlinks } from "@/public/navlink";
import SideNav from "./SideNav";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import Image from "next/image";
import { ProfileDropdownMenu } from "./ProfileIcon";

function Navbar() {
  const { isSignedIn, user } = useUser();
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
        hidden: { y: "-100%" },
        visible: { y: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed ${
        hidden ? "shadow-none" : "shadow-md"
      } shadow-primary flex items-center justify-between py-4 px-8 lg:px-20 mx-auto w-full bg-background -translate-y-full z-10`}
    >
      <div className="text-2xl text-primary font-extrabold">CaptivateAI.</div>
      <div className="flex gap-1 items-center">
        <div className="md:hidden flex items-center">
          <AnimatePresence mode="wait">
            <SideNav />
          </AnimatePresence>
        </div>
        <div className="flex items-center">
          {navlinks.map((link) => (
            <Button
              variant="link"
              key={link.title}
              className="text-lg hidden md:block"
            >
              <a href={link.path}>{link.title}</a>
            </Button>
          ))}
        </div>
        {isSignedIn ? (
          <ProfileDropdownMenu />
        ) : (
          <Button>
            <a href="/sign-in">Sign In</a>
          </Button>
        )}

        <ToggleThemeButton />
      </div>
    </motion.nav>
  );
}

export default Navbar;
