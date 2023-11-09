"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";
import LoadingButton from "../LoadingButton";
import { CheckCheck, Copy } from "lucide-react";
import { Separator } from "../ui/separator";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { DropdownStyles } from "../DropdownStyles";
import { EmojiToggle } from "../EmojiToggle";
import { InputWordLimit } from "../InputWordLimit";
import {
  useEmojiStore,
  useStyleStore,
  useWordLimitStore,
} from "@/lib/stateManagement";

function PromptInput() {
  const [copyIcon, setCopyIcon] = useState(true);
  const style = useStyleStore((state) => state.style);
  const emoji = useEmojiStore((state) => state.emoji);
  const wordLimit = useWordLimitStore((state) => state.wordLimit);

  // Vercel AI SDK (ai package) useChat()
  // useChat -> handles messages for us, user input, handling user submits, etc.
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat({
      body: { style, emoji, wordLimit },
    });
  // Copy function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(messages[messages.length - 1]?.content);
    setCopyIcon(false);
    setTimeout(() => {
      setCopyIcon(true);
    }, 1000);
  };

  // fire handleSubmit when Enter Key is pressed
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <motion.div
      className=" mx-auto w-full px-8 md:px-14 lg:px-24 my-5 overflow-hidden"
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
      <form onSubmit={handleSubmit} className="grid gap-2 lg:max-w-3xl mx-auto">
        <Textarea
          placeholder="Describe your post..."
          onChange={handleInputChange}
          value={input}
          onKeyDown={handleKeyPress}
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
            className="bg-[#393939] text-white px-2 py-4 mt-2 rounded shadow-md shadow-primary"
          >
            <div className="flex justify-between">
              <h3 className="text-2xl font-semibold">CaptivateAI</h3>
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
                    <motion.p
                      key={messages[messages.length - 1]?.id + index}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      &nbsp;
                    </motion.p>
                  );
                } else {
                  return (
                    <motion.p
                      key={messages[messages.length - 1]?.id + index}
                      className="text-left"
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {currentTextBlock}
                    </motion.p>
                  );
                }
              })}
          </div>
        )}
    </motion.div>
  );
}

export default PromptInput;
