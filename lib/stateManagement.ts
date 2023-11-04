import { create } from "zustand";

type StyleState = {
  style: string;
  changeStyle: (styleParam: string) => void;
};
type EmojiState = {
  emoji: boolean;
  changeEmoji: () => void;
};
type WordLimitState = {
  wordLimit: string;
  changeWordLimit: (wordLimitParam: string) => void;
};

export const useStyleStore = create<StyleState>()((set) => ({
  style: "",
  changeStyle: (styleParam) => set(() => ({ style: styleParam })),
}));

export const useEmojiStore = create<EmojiState>()((set) => ({
  emoji: false,
  changeEmoji: () => set((state) => ({ emoji: !state.emoji })),
}));

export const useWordLimitStore = create<WordLimitState>()((set) => ({
  wordLimit: "",
  changeWordLimit: (wordLimitParam) =>
    set(() => ({ wordLimit: wordLimitParam })),
}));
