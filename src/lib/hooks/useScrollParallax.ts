"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function useScrollParallax({
  shapeRange = [0, 400],
  blurRange = [0, 5],
  opacityRange = [1, 0.4],
} = {}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const shapeY = useTransform(scrollYProgress, [0, 1], shapeRange);

  const blurValue = useTransform(scrollYProgress, [0, 1], blurRange);
  const filter = useTransform(blurValue, (b) => `blur(${b}px)`);

  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange);

  return {
    ref,
    shapeY,
    filter,
    opacity,
    motion,
  };
}
