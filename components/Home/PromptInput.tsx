"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChat, Message } from "ai/react";
import LoadingButton from "../LoadingButton";
import { CheckCheck, Copy, SendHorizonal } from "lucide-react";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { motion } from "framer-motion";
import { DropdownStyles } from "../DropdownStyles";
import { EmojiToggle } from "../EmojiToggle";
import PromptSkeleton from "./PromptSkeleton";
import { InputWordLimit } from "../InputWordLimit";
import { useAppSelector } from "@/app/redux/store";

function PromptInput() {
  const [copyIcon, setCopyIcon] = useState(true);
  const style = useAppSelector((state) => state.styleReducer);
  // Vercel AI SDK (ai package) useChat()
  // useChat -> handles messages for us, user input, handling user submits, etc.
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat({
      body: { style },
    });
  // Copy function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(messages[messages.length - 1]?.content);
    setCopyIcon(false);
    setTimeout(() => {
      setCopyIcon(true);
    }, 1000);
  };

  return (
    <motion.div
      className=" mx-auto w-full max-w-3xl px-8 md:px-14 lg:px-24"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.7 }}
    >
      <h2 className="text-2xl mt-32 text-center">
        Prompt it with{" "}
        <span className="text-primary font-semibold">CaptivateAI</span>!
      </h2>
      <br />
      <form onSubmit={handleSubmit} className="grid  gap-2 ">
        <Textarea
          placeholder="Describe your post..."
          onChange={handleInputChange}
          value={input}
        />
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button className=" bg-primary p-4 mt-2 hover:brightness-95 rounded-lg text-white">
            Prompt
          </Button>
        )}

        <div className="flex space-x-3">
          <DropdownStyles />
          <EmojiToggle />
          <InputWordLimit />
        </div>
      </form>

      {messages.length !== 0 &&
        messages[messages.length - 1]?.role === "assistant" && (
          <div
            key={messages[messages.length - 1]?.id}
            className="bg-[#1C1C1C] text-white p-2 mt-2 rounded shadow-sm shadow-primary max-h-[400px] overflow-y-scroll"
          >
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">CaptivateAI</h3>
              <div className="py-1 px-2 hover:bg-slate-600 transition-all rounded-sm">
                {copyIcon ? (
                  <Copy
                    className="w-4 cursor-pointer "
                    onClick={copyToClipboard}
                  />
                ) : (
                  <CheckCheck className="w-4" />
                )}
              </div>
            </div>
            <Separator className="bg-white my-2" />
            {/* Formatting the message */}
            {messages[messages.length - 1]?.content
              .split("\n")
              .map((currentTextBlock: string, index: number) => {
                if (currentTextBlock === "") {
                  return (
                    <p key={messages[messages.length - 1]?.id + index}>
                      &nbsp;
                    </p>
                  );
                } else {
                  return (
                    <p
                      key={messages[messages.length - 1]?.id + index}
                      className="text-left"
                    >
                      {currentTextBlock}
                    </p>
                  );
                }
              })}
          </div>
        )}
    </motion.div>
  );
}

export default PromptInput;
