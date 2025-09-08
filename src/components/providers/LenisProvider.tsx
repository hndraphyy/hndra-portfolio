"use client";

import { useLenis } from "@/lib/Lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenis();
  return <>{children}</>;
}
