import { ChevronLeft } from "lucide-react"
import type { StackScreenProps } from "../types/props/StackScreenProps"
import { useNavigationStore } from "../stores/useNavigationStore"
import { useState } from "react";

const StackScreen = ({ children }: StackScreenProps) => {
  const { pop } = useNavigationStore();
  const [isExiting, setIsExiting] = useState(false);
  const top = parseInt(new URLSearchParams(window.location.search).get("top")?.toString() || "0");
  const bottom = parseInt(new URLSearchParams(window.location.search).get("bottom")?.toString() || "0");

  const popScreen = () => {
    setIsExiting(true);
    setTimeout(() => {
      pop();
    }, 200);
  }

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 flex flex-col bg-white ${
        isExiting ? "animate-stack-out" : "animate-stack-in"
      }`}
      style={{ paddingTop: top, paddingBottom: bottom }}
    >
      <div className="w-full py-2">
        <div
          className="flex items-center text-blue-500 cursor-pointer"
          onClick={popScreen}
        >
          <ChevronLeft />
          <p>뒤로가기</p>
        </div>
      </div>
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  );
};

export default StackScreen;
