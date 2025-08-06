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

function HandWrittenButton({
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
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className={cn("relative inline-block group", className)}>
      <div className="absolute inset-0 -inset-4">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 400 120"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <motion.path
            d="M 50 60 
               C 100 30, 150 30, 200 60
               C 250 90, 300 90, 350 60"
            fill="none"
            strokeWidth="3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 0.5 }
            }}
            className="text-primary opacity-60 group-hover:opacity-80 transition-opacity duration-300"
          />
        </motion.svg>
      </div>
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
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

export { HandWrittenButton };