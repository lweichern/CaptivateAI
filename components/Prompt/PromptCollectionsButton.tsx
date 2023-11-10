"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Library } from "lucide-react";
import { PromptTable } from "./PromptTable";
import { Separator } from "../ui/separator";
import SectionDivider from "../SectionDivider";
import { useState } from "react";

export function PromptCollectionButton() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            asChild
            className=" fixed bottom-12 left-12 border-2 border-accent rounded-full"
          >
            <DialogTrigger asChild>
              <Button onClick={() => setOpen(true)}>
                <Library />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>View Prompt Collection</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DialogContent className="max-w-[425px] max-h-[600px] rounded-sm md:max-w-3xl flex flex-col ">
        <DialogHeader>
          <DialogTitle className="text-2xl text-left">
            Prompt Collections
          </DialogTitle>
          <DialogDescription>A list of your recent Prompts</DialogDescription>
        </DialogHeader>
        <PromptTable />
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
