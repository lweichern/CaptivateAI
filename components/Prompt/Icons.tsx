import React from "react";
import { ArrowLeftFromLine, CheckCheck, Copy, Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function CopyIcon({ copyIcon }: { copyIcon: boolean }) {
  const { toast } = useToast();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {copyIcon ? (
            <Copy
              className="w-5 cursor-pointer hover:bg-slate-600 transition-all rounded-sm "
              onClick={() => {
                toast({
                  title: "Prompt copied to clipboard ✅",
                });
              }}
            />
          ) : (
            <CheckCheck className="w-4" />
          )}
        </TooltipTrigger>
        <TooltipContent>Copy Prompt</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function SaveIcon({
  savePromptHandler,
}: {
  savePromptHandler: () => void;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Star
            onClick={savePromptHandler}
            className="w-5 cursor-pointer hover:bg-slate-600 transition-all rounded-sm "
          />
        </TooltipTrigger>
        <TooltipContent>Save Prompt</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
