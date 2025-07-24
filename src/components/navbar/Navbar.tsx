// components/navbar/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="text-sm md:text-xl font-extralight text-white"
          >
            Hndra
          </Link>
          <button
            onClick={toggleMenu}
            className="text-sm md:text-xl font-extralight text-white"
          >
            Menu
          </button>
        </div>
      </div>

      {(isOpen || isAnimating) && (
        <MenuOverlay
          isAnimating={isAnimating}
          isOpen={isOpen}
          onToggle={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
