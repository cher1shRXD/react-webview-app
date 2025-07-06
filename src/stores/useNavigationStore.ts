import { create } from "zustand";
import type { NavigationStore } from "../types/stores/NavigationStore";

export const useNavigationStore = create<NavigationStore>((set, get) => ({
  tab: "home",
  stack: [],
  navigate: (tab) => set({ tab }),
  push: (newStack) => {
    const newStackArr = [...get().stack, newStack];
    set({ stack: newStackArr });
  },
  pop: () => {
    const newStackArr = [...get().stack];
    newStackArr.pop();
    set({ stack: newStackArr });
  }
}));