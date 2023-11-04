import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEmojiStore } from "@/lib/stateManagement";
import { useState } from "react";

export function EmojiToggle() {
  const [isChecked] = useState<boolean>(false);
  const emoji = useEmojiStore((state) => state.emoji);
  const changeEmoji = useEmojiStore((state) => state.changeEmoji);

  function handleChecked() {
    console.log("test");
    console.log("emojiL: ", emoji);
    changeEmoji();
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="emoji"
        checked={emoji}
        onCheckedChange={() => handleChecked()}
      />
      <Label htmlFor="emoji">Emoji</Label>
    </div>
  );
}
