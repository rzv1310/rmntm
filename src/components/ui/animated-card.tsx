import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedCard({ children, className, style }: AnimatedCardProps) {
  return (
    <div className={cn(
      "relative w-full h-64 rounded-xl z-10 overflow-hidden flex flex-col items-center justify-center",
      className
    )} style={{
      boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
      ...style
    }}>
      {/* Background with blur effect */}
      <div className="absolute top-1 left-1 right-1 bottom-1 z-20 rounded-lg overflow-hidden border-2 border-white" 
           style={{
             background: "rgba(255, 255, 255, 0.95)",
             backdropFilter: "blur(24px)"
           }} />
      
      {/* Animated blob */}
      <div 
        className="absolute z-10 top-1/2 left-1/2 w-32 h-32 rounded-full opacity-100"
        style={{
          backgroundColor: "#ff0000",
          filter: "blur(12px)",
          animation: "blob-bounce 5s infinite ease"
        }} />
      
      {/* Content */}
      <div className="relative z-30 p-6 h-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}