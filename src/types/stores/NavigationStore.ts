import type { Stack } from "../Stack";

export interface NavigationStore {
  tab: string;
  stack: Stack[];
  navigate: (tab: string) => void;
  push: (stack: Stack) => void;
  pop: () => void;
}