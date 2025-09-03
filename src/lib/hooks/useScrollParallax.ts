"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function useScrollParallax({ shapeRange = [0, 400] } = {}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const shapeY = useTransform(scrollYProgress, [0, 1], shapeRange);

  return {
    ref,
    shapeY,
    motion,
  };
}
