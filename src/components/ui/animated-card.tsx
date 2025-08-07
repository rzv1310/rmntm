import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <div className={cn(
      "relative w-full h-64 rounded-xl z-10 overflow-hidden flex flex-col items-center justify-center",
      "shadow-[20px_20px_60px_hsl(var(--muted)),_-20px_-20px_60px_hsl(var(--background))]",
      className
    )}>
      {/* Background with blur effect */}
      <div className="absolute top-1 left-1 right-1 bottom-1 z-20 bg-background/95 backdrop-blur-xl rounded-lg overflow-hidden border-2 border-background" />
      
      {/* Animated blob */}
      <div className="absolute z-10 top-1/2 left-1/2 w-32 h-32 rounded-full bg-primary opacity-100 blur-sm animate-blob-bounce" />
      
      {/* Content */}
      <div className="relative z-30 p-6 h-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}