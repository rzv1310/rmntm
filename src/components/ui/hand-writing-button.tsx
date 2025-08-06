"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface HandWrittenButtonProps {
  text: string;
  href: string;
  className?: string;
  showArrow?: boolean;
}

export function HandWrittenButton({
  text,
  href,
  className,
  showArrow = true,
}: HandWrittenButtonProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className={cn("relative inline-block group", className)}>
      <div className="absolute inset-0 -inset-8">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 600 200"
          initial="hidden"
          animate="visible"
          className="w-full h-full"
        >
          <motion.path
            d="M 450 50 
               C 550 100, 500 160, 300 170
               C 150 170, 100 160, 100 100
               C 100 50, 200 30, 300 30
               C 400 30, 450 80, 450 80"
            fill="none"
            strokeWidth="4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              pathLength: { duration: 2.5, ease: "easeInOut" },
              opacity: { duration: 0.5 }
            }}
            className="text-primary opacity-70 group-hover:opacity-90 transition-opacity duration-300"
          />
        </motion.svg>
      </div>
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Link 
          to={href} 
          className="inline-flex items-center gap-2 bg-gradient-hero text-white px-8 py-4 rounded-xl font-elegant font-light text-lg hover:shadow-medical hover:-translate-y-1 transition-all duration-300 group-hover:scale-105"
        >
          <span>{text}</span>
          {showArrow && (
            <ChevronDown className="h-5 w-5 rotate-[-90deg] transition-transform group-hover:translate-x-1" />
          )}
        </Link>
      </motion.div>
    </div>
  );
}