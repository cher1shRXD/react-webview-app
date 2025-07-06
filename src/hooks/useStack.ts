import { useRef, useState } from "react";
import { useNavigationStore } from "../stores/useNavigationStore";

export const useStack = () => {
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

  return {
    isExiting,
    top,
    bottom,
    handleTouchEnd,
    handleTouchStart,
    handleTouching,
    popScreen,
    screenRef
  }
};
