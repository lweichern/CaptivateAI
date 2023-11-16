import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateTimeFromISO } from "@/lib/utils";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

type PromptObject = {
  prompt_question: string;
  created_at: string;
  emoji: boolean;
  style?: string;
};

type RawPromptObject = {};

export function PromptTable() {
  const [prompts, setPrompts] = useState<PromptObject[]>();

  useEffect(() => {
    async function fetchPrompt() {
      const { data } = await supabase.from("Prompts").select();

      const filteredArr = filterPromptObject(data || []);
      setPrompts(filteredArr);
    }

    fetchPrompt();
  }, []);

  function filterPromptObject(arr: any[]): PromptObject[] {
    return arr.map((obj) => {
      const filteredObj: PromptObject = {
        prompt_question: "",
        created_at: "",
        emoji: false,
        style: "",
      };
      for (const key of Object.keys(obj)) {
        if (!(key in filteredObj)) {
          delete obj[key];
        }
      }

      return obj;
    });
  }

  return (
    <Table className="overflow-scroll h-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Style</TableHead>
          <TableHead>Prompt</TableHead>
          <TableHead>Emoji</TableHead>
          <TableHead>Date Prompted</TableHead>
        </TableRow>
      </TableHeader>
      {prompts ? (
        prompts.map((prompt, index) => (
          <TableBody>
            <TableRow key={index} className=" even:bg-accent">
              <TableCell className="font-medium">{prompt.style}</TableCell>
              <TableCell>{prompt.prompt_question}</TableCell>
              <TableCell>{prompt.emoji ? "Yes" : "No"}</TableCell>
              <TableCell>{formatDateTimeFromISO(prompt.created_at)}</TableCell>
            </TableRow>
          </TableBody>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Table>
  );
}
