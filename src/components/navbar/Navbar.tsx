"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 overflow-hidden border-b ${
        isOpen
          ? "h-screen bg-transparent border-black/30"
          : isScrolled
          ? "bg-[rgba(0,0,0,0.4)] border-black/30"
          : "bg-transparent border-transparent"
      } transition-colors duration-300 ease-in-out`}
      style={isOpen ? { transition: "none" } : {}}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="text-sm md:text-xl 2xl:text-2xl font-light text-white"
          >
            Hndra
          </Link>
          <button
            onClick={toggleMenu}
            className="text-md md:text-2xl 2xl:text-3xl font-extralight text-white transition-colors duration-300"
          >
            <FiMenu />
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
