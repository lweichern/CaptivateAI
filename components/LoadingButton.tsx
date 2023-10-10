import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function LoadingButton() {
  return (
    <Button disabled className=" text-white p-4 mt-2">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading Message
    </Button>
  );
}
