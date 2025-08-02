"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function useScrollParallax({
  textRange = [0, 100],
  imageRange = [0, -100],
} = {}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textX = useTransform(scrollYProgress, [0, 1], textRange);
  const imageX = useTransform(scrollYProgress, [0, 1], imageRange);

  return {
    ref,
    textX,
    imageX,
    motion, // optionally return motion to simplify imports
  };
}
