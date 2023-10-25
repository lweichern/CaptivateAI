import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";
import { update } from "@/app/redux/slices/wordLimit-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";

export function InputWordLimit() {
  const [wordLimit, setWordLimit] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  dispatch(update(wordLimit));

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setWordLimit(event.target.value);
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
