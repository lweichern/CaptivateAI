import PromptInput from "@/components/Home/PromptInput";
import { PromptCollectionButton } from "@/components/Prompt/PromptCollectionsButton";
import React from "react";

function Prompt() {
  return (
    <div className="flex justify-center min-h-screen ">
      <PromptInput />
      <PromptCollectionButton />
    </div>
  );
}

export default Prompt;
