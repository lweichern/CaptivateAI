import React, { useState } from "react";
import { Copy, EyeIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PromptObject } from "./PromptTable";
import { CopyIcon } from "./Icons";

function PromptDetails({ prompt }: { prompt: PromptObject }) {
  const [copyIcon, setCopyIcon] = useState(true);

  // Copy function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopyIcon(false);
    setTimeout(() => {
      setCopyIcon(true);
    }, 1000);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" cursor-pointer hover:bg-accent flex justify-center items-center w-fit p-1 duration-100 border-[1px] border-foreground rounded-sm ">
          <EyeIcon className=" w-5" />
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-[425px] max-h-[600px] rounded-sm md:max-w-3xl flex flex-col overflow-y-scroll ">
        <DialogHeader>
          <DialogTitle className="text-2xl text-left">
            Prompt Details
          </DialogTitle>
          <DialogDescription>
            <span className="text-lg">Prompt:</span> <br />
            {prompt.prompt_question}
          </DialogDescription>
          <DialogDescription className=" whitespace-pre break-words">
            <span className="text-lg flex justify-between">
              Answer:{" "}
              <div onClick={copyToClipboard}>
                <CopyIcon copyIcon={copyIcon} />
              </div>
            </span>{" "}
            <br />
            <p>{prompt.prompt}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default PromptDetails;
