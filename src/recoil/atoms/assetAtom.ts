import { atom } from "recoil";
import {InvestmentProfile} from "../../data/recommendations.ts";

export const assetState = atom({
  key: "assetState",
  default: "",
});

export const checklistState = atom({
  key: "checklistState",
  default: {
    scores: [] as number[],
    profile: null as InvestmentProfile | null,
  },
});

export const newsLoadingState = atom({
  key: 'newsLoadingState',
  default: true
});