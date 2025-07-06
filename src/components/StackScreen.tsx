import { ChevronLeft } from "lucide-react";
import type { StackScreenProps } from "../types/props/StackScreenProps";
import { useNavigationStore } from "../stores/useNavigationStore";
import { useState, useRef } from "react";

const StackScreen = ({ children }: StackScreenProps) => {
  const { pop } = useNavigationStore();
  const [isExiting, setIsExiting] = useState(false);
  const top = parseInt(
    new URLSearchParams(window.location.search).get("top")?.toString() || "0"
  );
  const bottom = parseInt(
    new URLSearchParams(window.location.search).get("bottom")?.toString() || "0"
  );

  const startXRef = useRef<number | null>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const hasPoppedRef = useRef(false);
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 375;

  const popScreen = () => {
    if (hasPoppedRef.current) return;
    hasPoppedRef.current = true;
    setIsExiting(true);
    setTimeout(() => {
      pop();
    }, 200);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const startX = e.touches[0].clientX;

    if (startX > 20) {
      startXRef.current = null;
      return;
    }

    startXRef.current = startX;

    if (screenRef.current) {
      screenRef.current.style.transition = "none";
    }
  };

  const handleTouching = (e: React.TouchEvent) => {
    if (startXRef.current === null) return;
    const delta = e.touches[0].clientX - startXRef.current;
    if (delta > 0 && screenRef.current) {
      screenRef.current.style.setProperty(
        "transform",
        `translateX(${(delta / screenWidth) * 100}%)`,
        "important"
      );
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startXRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const distance = endX - startXRef.current;
    if (distance > 100) {
      popScreen();
    } else {
      if (screenRef.current) {
        screenRef.current.style.setProperty(
          "transform",
          `translateX(0)`,
          "important"
        );
      }
    }
    startXRef.current = null;
  };

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
