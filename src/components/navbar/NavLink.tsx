"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  name: string;
  onClick?: () => void;
};

const NavLink = ({ href, name, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="group relative inline-flex items-center gap-4 text-black transition"
      >
        <span className={`${isActive ? "text-gray-700" : ""} transition`}>
          {name}
        </span>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-3 lg:w-5 h-3 lg:h-5 bg-black opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-100" />
          <div className="w-3 lg:w-5 h-3 lg:h-5 bg-black opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-300" />
          <div className="w-3 lg:w-5 h-3 lg:h-5 bg-black opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-500" />
        </div>
      </Link>
    </li>
  );
};

export default NavLink;
