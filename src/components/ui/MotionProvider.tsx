"use client";

import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <LazyMotion features={domAnimation} strict={false}>
      {children}
    </LazyMotion>
  );
};
