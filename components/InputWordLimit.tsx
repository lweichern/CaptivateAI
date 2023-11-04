import { Input } from "@/components/ui/input";
import { useWordLimitStore } from "@/lib/stateManagement";
import { ChangeEvent } from "react";

export function InputWordLimit() {
  const changeWordLimit = useWordLimitStore((state) => state.changeWordLimit);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    changeWordLimit(event.target.value);
  };

  return (
    <div className=" w-full max-w-sm items-center gap-1.5 flex">
      <Input
        type="number"
        id="number"
        placeholder="Word Limit..."
        onChange={(event) => handleInput(event)}
      />
    </div>
  );
}
