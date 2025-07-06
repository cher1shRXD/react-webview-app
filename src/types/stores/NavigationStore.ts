export interface NavigationStore {
  tab: string;
  stack: string[];
  navigate: (tab: string) => void;
  push: (stack: string) => void;
  pop: () => void;
}