"use client";
import { useState } from "react";
import { LinkButton } from "../ui/Button";

export default function LanguageToggle() {
  const [lang, setLang] = useState<"en" | "id">("en");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      <button
        onClick={() => setLang(lang === "en" ? "id" : "en")}
        className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-white transition-all hover:scale-110 active:scale-95 shadow-xl"
      >
        {lang.toUpperCase()}
        <span className="absolute -top-8 scale-0 rounded bg-zinc-800 px-2 py-1 text-[10px] transition-all group-hover:scale-100">
          Switch to {lang === "en" ? "Indonesia" : "English"}
        </span>
      </button>

      <LinkButton href="/about" className="transition-all duration-300">
        {lang === "en" ? "About Me" : "Tentang Saya"}
      </LinkButton>
    </div>
  );
}
