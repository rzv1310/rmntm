import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function CustomBreadcrumb({ items, className }: CustomBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center space-x-1 text-sm", className)}>
      <Link
        to="/"
        className="breadcrumb-item flex items-center gap-1 hover:text-primary focus-ring rounded px-2 py-1"
      >
        <Home className="h-4 w-4" />
        <span>Acasă</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          {item.href ? (
            <Link
              to={item.href}
              className="breadcrumb-item hover:text-primary focus-ring rounded px-2 py-1"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium px-2 py-1">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}