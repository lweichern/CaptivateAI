import React from "react";
import { Twitter, Instagram, Facebook } from "lucide-react";
import { navlinks } from "@/public/navlink";
import { Button } from "./ui/button";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=" text-center py-6 bg-black flex flex-col gap-2 text-white ">
      <div className="flex justify-center gap-2">
        <Twitter />
        <Instagram />
        <Facebook />
      </div>
      &copy; {year.toString()} All Right Reserved
    </footer>
  );
}

export default Footer;
