"use client";

import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {children}
    </div>
  );
}
