import { atom } from "recoil";

export const assetState = atom({
  key: "assetState",
  default: "",
});

export const checklistState = atom({
  key: "checklistState",
  default: {
    scores: [] as number[],
    profile: null as string | null,
  },
});
