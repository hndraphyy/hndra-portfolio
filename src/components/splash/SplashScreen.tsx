"use client";

import { useEffect, useState, useRef } from "react";
import "../../styles/SplashScreen.css";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [split, setSplit] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("seenSplash");
    const isFirst = !alreadySeen;

    if (isFirst) {
      sessionStorage.setItem("seenSplash", "true");
      setFirstVisit(true);
    } else {
      setFirstVisit(false);
    }

    const timeout = setTimeout(
      () => {
        setSplit(true);
      },
      isFirst ? 1820 : 300
    ); // Durasi animasi tergantung apakah pertama kali

    return () => clearTimeout(timeout);
  }, []);

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (split && e.target === bottomRef.current) {
      onFinish();
    }
  };

  return (
    <div className={`splash-container${split ? " split-active" : ""}`}>
      <div className="splash-top" />

      {!split && firstVisit && (
        <div className="loading-line-wrapper">
          <div className="loading-line" />
        </div>
      )}

      <div
        ref={bottomRef}
        className="splash-bottom"
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  );
}
