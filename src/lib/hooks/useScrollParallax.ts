"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function useScrollParallax({
  textRange = [0, 400],
  imageRange = [0, -400],
  shapeRange = [0, 400], // baru untuk Y-axis
} = {}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textX = useTransform(scrollYProgress, [0, 1], textRange);
  const imageX = useTransform(scrollYProgress, [0, 1], imageRange);
  const shapeY = useTransform(scrollYProgress, [0, 1], shapeRange);

  return {
    ref,
    textX,
    imageX,
    shapeY,
    motion, // biar simple
  };
}
