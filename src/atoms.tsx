import { atom } from "recoil";

export const minState = atom({
  key: "minute",
  default: 3,
});

export const secState = atom({
  key: "second",
  default: 60,
});

export const playState = atom({
  key: "play",
  default: false,
});

export const roundState = atom({
  key: "round",
  default: 0,
});

export const goalState = atom({
  key: "goal",
  default: 0,
});
