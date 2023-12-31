"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";
import LoadingButton from "../LoadingButton";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { motion } from "framer-motion";
import { DropdownStyles } from "../Prompt/DropdownStyles";
import { EmojiToggle } from "../Prompt/EmojiToggle";
import { InputWordLimit } from "../Prompt/InputWordLimit";
import {
  useEmojiStore,
  useStyleStore,
  useWordLimitStore,
} from "@/lib/stateManagement";
import Map from "../Prompt/Map";
import { CopyIcon, SaveIcon } from "../Prompt/Icons";
import supabase from "@/utils/supabase";
import { useToast } from "../ui/use-toast";
import { useUser } from "@clerk/nextjs";

function PromptInput() {
  const { user } = useUser();
  const { toast } = useToast();
  const [copyIcon, setCopyIcon] = useState(true);
  const style = useStyleStore((state) => state.style);
  const emoji = useEmojiStore((state) => state.emoji);
  const wordLimit = useWordLimitStore((state) => state.wordLimit);

  // Framer Motion variants for SVG
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };

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
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  };

  const savePromptHandler = async () => {
    const promptQuestionPayload = messages[messages.length - 2]?.content;
    const promptAnswerPayload = messages[messages.length - 1]?.content;

    const { data } = await supabase
      .from("Prompts")
      .insert({
        created_by: user?.primaryEmailAddress?.emailAddress,
        prompt_question: promptQuestionPayload,
        prompt: promptAnswerPayload,
        emoji: emoji,
        style: style,
      })
      .select();

    const promptQuestion = data![0].prompt_question;
    toast({
      title: `Prompt title: ${promptQuestion}`,
      description: "The above prompt has been saved to collection ✅",
    });
  };

  return (
    <motion.div
      className=" mx-auto w-full px-8 md:px-14 lg:px-24 my-5 overflow-hidden lg:flex  gap-4 mt-32"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.7 }}
    >
      <div className="lg:w-[40%]">
        <h2 className="text-2xl text-center">
          Prompt it with{" "}
          <span className="text-primary font-semibold">CaptivateAI</span>!
        </h2>
        <br />
        <form
          onSubmit={handleSubmit}
          className="grid gap-2 lg:max-w-3xl mx-auto overflow-scroll"
        >
          <Textarea
            placeholder="Landed property in New York City, 1600 sqft, 2 bathrooms, 3 bedrooms..."
            onChange={handleInputChange}
            value={input}
            onKeyDown={handleKeyPress}
            rows={10}
          />
          <div className="flex gap-4 lg:flex-col">
            <DropdownStyles />
            <EmojiToggle />
            <InputWordLimit />
            {/* <Map /> */}
          </div>
          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button className=" bg-primary p-4 mt-2 hover:brightness-95 rounded-lg text-white">
              Prompt
            </Button>
          )}
        </form>
      </div>
      <Separator className="hidden lg:block" orientation="vertical" />
      {messages.length == 0 ? (
        <>
          <p className="w-full flex-col items-center justify-center hidden lg:flex">
            Start Prompting...
            <motion.svg
              id="edL6f4u2F5q1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 210 130"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              className=" w-[400px]"
            >
              <motion.path
                d="M180.11075,71.29672c0,18.83187,2.20648,43.99438-17.30503,55.3761-14.13425,8.24498-45.7408,4.98421-35.99446-19.38163c6.92301-17.30752,50.25972,16.02654,46.37748,37.37887-5.27149,28.99321-63.99404,31.14905-85.83295,31.14905"
                transform="translate(-68.763661-62.36502)"
                fill="none"
                stroke="#0b9d7e"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M98.43101,165.43609c-1.54324,1.54324-11.82051,7.77452-11.07522,10.38302.54825,1.91888,11.14042,6.10566,13.15182,7.61421"
                transform="translate(-68.76366-62.36502)"
                fill="none"
                stroke="#0b9d7e"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>
          </p>
        </>
      ) : (
        messages.length !== 0 &&
        messages[messages.length - 1]?.role === "assistant" && (
          <div
            key={messages[messages.length - 1]?.id}
            className="bg-[#393939] text-white px-2 py-4 mt-2 rounded shadow-md shadow-primary lg:w-[60%]"
          >
            <div className="flex justify-between gap-3">
              <h3 className="text-lg font-semibold">
                {messages[messages.length - 2]?.content}
              </h3>
              <div className="py-1 px-2  h-fit cursor-pointer flex gap-2">
                <div onClick={copyToClipboard}>
                  <CopyIcon copyIcon={copyIcon} />
                </div>
                <SaveIcon savePromptHandler={savePromptHandler} />
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
        )
      )}
    </motion.div>
  );
}

export default PromptInput;
