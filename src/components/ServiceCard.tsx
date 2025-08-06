import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  highlights?: string[];
  isDecontCAS?: boolean;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  highlights = [],
  isDecontCAS = false,
  className,
}: ServiceCardProps) {
  return (
    <div className={cn("medical-card service-card rounded-xl p-6 h-full flex flex-col", className)}>
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          {isDecontCAS && (
            <span className="bg-success text-success-foreground text-xs font-medium px-2 py-1 rounded-full">
              Decontat CAS
            </span>
          )}
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        {highlights.length > 0 && (
          <ul className="space-y-2 mb-6">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <Button asChild variant="outline" className="w-full group">
        <Link to={href} className="flex items-center justify-center gap-2">
          <span>Află mai multe</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
}