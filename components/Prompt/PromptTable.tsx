import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const prompts = [
  {
    prompt: "Prompt 1",
    dateAdded: "12-10-2023",
    emoji: true,
    style: "Convincing",
  },
  {
    prompt: "Prompt 1",
    dateAdded: "12-10-2023",
    emoji: true,
    style: "Convincing",
  },
  {
    prompt: "Prompt 1",
    dateAdded: "12-10-2023",
    emoji: true,
    style: "Convincing",
  },
  {
    prompt: "Prompt 1",
    dateAdded: "12-10-2023",
    emoji: true,
    style: "Convincing",
  },
  {
    prompt: "Prompt 1",
    dateAdded: "12-10-2023",
    emoji: true,
    style: "Convincing",
  },
  {
    prompt: "Prompt 1",
    dateAdded: "12-10-2023",
    emoji: true,
    style: "Convincing",
  },
  {
    prompt: "Prompt 1",
    dateAdded: "12-10-2023",
    emoji: true,
    style: "Convincing",
  },
  {
    prompt: "Prompt 1",
    dateAdded: "12-10-2023",
    emoji: true,
    style: "Convincing",
  },
  {
    prompt: "Prompt 1",
    dateAdded: "12-10-2023",
    emoji: true,
    style: "Convincing",
  },
  {
    prompt: "Prompt 1",
    dateAdded: "12-10-2023",
    emoji: true,
    style: "Convincing",
  },
];

export function PromptTable() {
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
      <TableBody>
        {prompts.map((prompt, index) => (
          <TableRow key={index} className=" even:bg-accent">
            <TableCell className="font-medium">{prompt.style}</TableCell>
            <TableCell>{prompt.prompt}</TableCell>
            <TableCell>{prompt.emoji ? "YES" : "NO"}</TableCell>
            <TableCell>{prompt.dateAdded}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
