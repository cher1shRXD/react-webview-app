import { ChevronLeft } from "lucide-react";
import type { StackScreenProps } from "../types/props/StackScreenProps";
import { useStack } from "../hooks/useStack";

const StackScreen = ({ children }: StackScreenProps) => {
  const { isExiting, top, bottom, handleTouchStart, handleTouchEnd, handleTouching, popScreen, screenRef } = useStack();

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 flex flex-col bg-white touch-none transition-transform shadow-2xl ${
        isExiting ? "animate-stack-out" : "animate-stack-in"
      }`}
      style={{ paddingTop: top, paddingBottom: bottom }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouching}
      ref={screenRef}>
      <div className="w-full py-2">
        <div
          className="flex items-center text-blue-500 cursor-pointer"
          onClick={popScreen}>
          <ChevronLeft />
          <p>뒤로가기</p>
        </div>
      </div>
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
};

export default StackScreen;
