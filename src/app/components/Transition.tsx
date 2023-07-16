"use client";
import { LazyMotion, domAnimation, m} from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Transition({ children }) {
  const currentPath = usePathname();

  return (
  <LazyMotion features = {domAnimation}>
      <m.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={currentPath}
        className="h-full w-full flex"
      >
        {children}
      </m.main>
      </LazyMotion>
  );
}

export default Transition;
