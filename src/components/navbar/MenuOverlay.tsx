"use client";

import { useEffect, useState, useRef } from "react";
import NavLink from "./NavLink";
import { navItems } from "@/configs/nav";
import { socialLinks } from "@/configs/socialLinks";
import { FiX } from "react-icons/fi";

type MenuOverlayProps = {
  isAnimating: boolean;
  isOpen: boolean;
  onToggle: () => void;
};

const MenuOverlay = ({ isAnimating, isOpen, onToggle }: MenuOverlayProps) => {
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const handleEnd = () => {
      if (isOpen) {
        setHasAnimatedIn(true); // Tampilkan bagian bawah setelah animasi selesai
      }
    };

    node.addEventListener("animationend", handleEnd);

    return () => {
      node.removeEventListener("animationend", handleEnd);
      setHasAnimatedIn(false); // Reset saat tutup
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        ref={containerRef}
        className={`absolute inset-0 bg-white text-black transform transition-all duration-300 ease-in-out px-4 lg:px-8 py-4 ${
          isAnimating ? "animate-slideUp" : isOpen ? "animate-slideDown" : ""
        }`}
      >
        <button
          onClick={onToggle}
          className="absolute px-4 sm:px-6 lg:px-8 right-0 top-5 text-xl md:text-2xl 2xl:text-3xl font-extralight text-black"
        >
          <FiX />
        </button>

        {/* Menu items */}
        <ul className="text-4xl lg:text-6xl 2xl:text-7xl font-extralight space-y-3 md:space-y-4 lg:space-y-6">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} onClick={onToggle} />
          ))}
        </ul>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 mb-7 md:mb-14">
          {hasAnimatedIn && (
            <div className="h-[3px] md:h-[5px] bg-black animate-progressBar" />
          )}

          {hasAnimatedIn && (
            <div className="px-4 sm:px-6 lg:px-8 pt-3 md:pt-6 opacity-0 animate-fadeInDelay">
              <div className="flex justify-between text-start md:items-center flex-col md:flex-row gap-1">
                <p className="text-lg md:text-3xl lg:text-4xl font-medium">
                  Hendra Aditya Pratama
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium flex gap-3 md:gap-4">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon className="hover:text-green duration-300 transition" />
                    </a>
                  ))}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
