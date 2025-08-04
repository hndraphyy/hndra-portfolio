"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function LinkButton({ href, children, className }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-block overflow-hidden px-5 py-2 text-md md:text-xl font-light text-black bg-green",
        className
      )}
    >
      <span className="relative z-10 group-hover:text-green transition-colors duration-700 ease-in-out">
        {children}
      </span>
      <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-[700ms] ease-in-out z-0"></span>
    </Link>
  );
}
