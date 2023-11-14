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
import { Library } from "lucide-react";
import { PromptTable } from "./PromptTable";

export function PromptCollectionButton() {
  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            asChild
            className=" fixed bottom-12 left-12 border-2 border-accent rounded-full"
          >
            <DialogTrigger asChild>
              <Button>
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
      </DialogContent>
    </Dialog>
  );
}
