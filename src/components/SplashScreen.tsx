"use client";

import { useEffect, useState, useRef } from "react";
import "../styles/SplashScreen.css";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [split, setSplit] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenSplash");

    if (!hasSeen) {
      // Pertama kali buka tab
      setShouldShow(true);
      sessionStorage.setItem("hasSeenSplash", "true");

      const timeout = setTimeout(() => {
        setSplit(true); // mulai buka pintu
      }, 1900);

      return () => clearTimeout(timeout);
    } else {
      // Sudah pernah lihat splash, langsung lanjut
      onFinish();
    }
  }, []);

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (split && e.target === bottomRef.current) {
      onFinish();
    }
  };

  if (!shouldShow) return null;

  return (
    <div className={`splash-container${split ? " split-active" : ""}`}>
      <div className="splash-top" />
      <div className={`loading-line-wrapper${split ? " hide-line" : ""}`}>
        <div className="loading-line" />
      </div>
      <div
        ref={bottomRef}
        className="splash-bottom"
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  );
}
