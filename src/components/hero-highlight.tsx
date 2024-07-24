"use client";
import { cn } from "@/utils/cn";
import {  motion } from "framer-motion";
import React from "react";


export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-cyan-300 to-green-300 px-1 pb-1 dark:from-cyan-500 dark:to-green-500`,
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
