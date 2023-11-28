import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateTimeFromISO } from "@/lib/utils";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";
import { DeletePrompt, PromptDetails } from "./PromptDetails";

export type PromptObject = {
  prompt: string;
  prompt_question: string;
  created_at: string;
  emoji: boolean;
  id: string;
  style?: string;
};

export function PromptTable() {
  const [prompts, setPrompts] = useState<PromptObject[]>();
  async function fetchPrompt() {
    const { data } = await supabase.from("Prompts").select();

    const filteredArr = filterPromptObject(data || []);
    setPrompts(filteredArr);
  }

  useEffect(() => {
    fetchPrompt();
  }, []);

  function filterPromptObject(arr: any[]): PromptObject[] {
    return arr.map((obj) => {
      const filteredObj: PromptObject = {
        prompt: "",
        prompt_question: "",
        created_at: "",
        emoji: false,
        id: "",
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
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      {prompts ? (
        prompts.map((prompt, index) => (
          <TableBody key={index}>
            <TableRow key={index} className=" even:bg-accent">
              <TableCell className="font-medium">
                {prompt.style || "-"}
              </TableCell>
              <TableCell>{prompt.prompt_question}</TableCell>
              <TableCell>{prompt.emoji ? "Yes" : "No"}</TableCell>
              <TableCell>{formatDateTimeFromISO(prompt.created_at)}</TableCell>
              <TableCell className="flex gap-2 justify-center items-center">
                <PromptDetails prompt={prompt} />
                <DeletePrompt promptId={prompt.id} fetchPrompt={fetchPrompt} />
              </TableCell>
            </TableRow>
          </TableBody>
        ))
      ) : (
        <tbody>
          <tr>
            <td>Loading...</td>
          </tr>
        </tbody>
      )}
    </Table>
  );
}
