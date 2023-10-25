import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { update } from "@/app/redux/slices/emoji-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { useState } from "react";

export function EmojiToggle() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  dispatch(update(isChecked));

  function handleChecked(checkedVal: boolean) {
    setIsChecked(checkedVal);
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="emoji"
        checked={isChecked}
        onCheckedChange={() => handleChecked(isChecked ? false : true)}
      />
      <Label htmlFor="emoji">Emoji</Label>
    </div>
  );
}
