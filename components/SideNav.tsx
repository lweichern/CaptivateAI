import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "./Hamburger";
import { navlinks } from "@/public/navlink";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import { menuSlide } from "@/lib/animation";

function SideNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Hamburger />
      </SheetTrigger>
      <SheetContent className="px-20 py-20">
        <SheetHeader>
          <SheetTitle className="text-sm">Navigation</SheetTitle>
          <Separator className="bg-primary" />
          <SheetDescription>
            <div className=" flex flex-col gap-3 mt-4">
              {navlinks.map((link, index) => (
                <div key={index}>
                  <motion.button
                    variants={menuSlide}
                    custom={index}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-3xl text-primary"
                  >
                    <a href={link.path}>{link.title}</a>
                  </motion.button>
                </div>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SideNav;
