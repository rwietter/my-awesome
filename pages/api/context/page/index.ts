import create from "zustand";
import { persist, redux } from "zustand/middleware";
import { reducer } from "./reducer";
import { IPage } from "./types";

const state: IPage = {
  href: "",
};


export const useTitleStore = create(
  persist(redux(reducer, state), { name: "title-store" })
);
