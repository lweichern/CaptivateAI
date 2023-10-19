import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWordLimit() {
  return (
    <div className=" w-full max-w-sm items-center gap-1.5 flex">
      <Input type="number" id="number" placeholder="Word Limit..." />
    </div>
  );
}
