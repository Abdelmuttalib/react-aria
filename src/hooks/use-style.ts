import { Index } from "@/registry";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type Style = keyof typeof Index;

export type StyleAtom = {
  style: Style;
};

const styleAtom = atomWithStorage<StyleAtom>("style", {
  style: "default",
});

export function useStyle() {
  return useAtom(styleAtom);
}
