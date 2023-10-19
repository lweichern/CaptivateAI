import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function EmojiToggle() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="emoji" />
      <Label htmlFor="emoji">Emoji</Label>
    </div>
  );
}
