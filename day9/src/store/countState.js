import { atom } from "recoil";

export const countState = atom({
  key: "countState", // key는 유니크하게
  default: 0,
});

export const countLogState = atom({
  key: "countLogState",
  default: [],
});
