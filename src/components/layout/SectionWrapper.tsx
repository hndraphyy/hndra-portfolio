"use client";

import { ReactNode } from "react";

export default function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}
