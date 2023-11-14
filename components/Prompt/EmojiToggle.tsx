import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEmojiStore } from "@/lib/stateManagement";
import { useState } from "react";

export function EmojiToggle() {
  const [isChecked] = useState<boolean>(false);
  const emoji = useEmojiStore((state) => state.emoji);
  const changeEmoji = useEmojiStore((state) => state.changeEmoji);

  function handleChecked() {
    changeEmoji();
  }

  return (
    <div className="flex items-center gap-4 lg:gap-0 lg:flex-col lg:items-start">
      <Label htmlFor="emoji">Emoji</Label>
      <Switch
        id="emoji"
        checked={emoji}
        onCheckedChange={() => handleChecked()}
        className="lg:mt-4"
      />
    </div>
  );
}
