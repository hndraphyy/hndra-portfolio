"use client";

import { useEffect, useState, useRef } from "react";
import "../../styles/SplashScreen.css";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [split, setSplit] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSplit(true); // mulai buka pintu
    }, 500); // setelah grow-line selesai

    return () => clearTimeout(timeout);
  }, []);

  // Setelah panel bawah selesai animasi keluar, baru panggil onFinish
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (split && e.target === bottomRef.current) {
      onFinish();
    }
  };

  return (
    <div className={`splash-container${split ? " split-active" : ""}`}>
      <div className="splash-top" />
      <div
        ref={bottomRef}
        className="splash-bottom"
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  );
}
