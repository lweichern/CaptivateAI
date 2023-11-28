import React, { useState } from "react";
import { Copy, EyeIcon, Trash2 } from "lucide-react";
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
import { Separator } from "../ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import supabase from "@/utils/supabase";

export function PromptDetails({ prompt }: { prompt: PromptObject }) {
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
          <Separator className=" bg-primary" />

          <DialogDescription>
            <span className="text-lg">Prompt:</span> <br />
            {prompt.prompt_question} fkssbfouafe foasif Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dolore totam in iste delectus
            tenetur ab adipisci nihil cum tempore excepturi vero possimus quae
            consequuntur at, libero magnam, iure aspernatur asperiores. - fweoif
            -sdfd fsd
          </DialogDescription>
          <DialogDescription>
            <h3 className="text-lg flex justify-between">
              Answer:{" "}
              <div onClick={copyToClipboard}>
                <CopyIcon copyIcon={copyIcon} />
              </div>
            </h3>{" "}
            <br />
            <p className=" whitespace-pre-wrap">{prompt.prompt}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export function DeletePrompt({
  promptId,
  fetchPrompt,
}: {
  promptId: string;
  fetchPrompt: () => void;
}) {
  async function deletePrompt() {
    await supabase.from("Prompts").delete().eq("id", promptId);

    fetchPrompt();
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Trash2 className="text-red-600 cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            prompt and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className=" bg-red-500 hover:bg-red-700"
            onClick={deletePrompt}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
