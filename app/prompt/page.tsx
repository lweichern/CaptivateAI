import PromptInput from "@/components/Home/PromptInput";
import { PromptCollectionButton } from "@/components/Prompt/PromptCollectionsButton";
import { useClerk, SignedIn } from "@clerk/nextjs";
import React from "react";

function Prompt() {
  return (
    <div className="flex justify-center min-h-screen ">
      <SignedIn>
        <PromptInput />
        <PromptCollectionButton />
      </SignedIn>
    </div>
  );
}

export default Prompt;
