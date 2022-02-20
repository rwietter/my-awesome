import { IAwesomeStore } from "./types";
import create from "zustand";
import { persist, redux } from "zustand/middleware";
import { reducer } from "./reducer";

const state: IAwesomeStore = {
  contentItem: [],
  contentIndex: [],
};

const useAwesomeStore = create(
  persist(redux(reducer, state), { name: "awesome-store" })
);

export { useAwesomeStore };
