import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const allServices = [
  { title: "RMN Cerebral", href: "/servicii/rmn-cerebral" },
  { title: "RMN Coloană", href: "/servicii/rmn-coloana" },
  { title: "RMN Articulații", href: "/servicii/rmn-articulatii" },
  { title: "RMN Abdominal", href: "/servicii/rmn-abdominal" },
  { title: "RMN Pelvin", href: "/servicii/rmn-pelvin" },
  { title: "RMN Umăr", href: "/servicii/rmn-umar" },
  { title: "RMN Timișoara - Medlife", href: "/servicii/rmn-timisoara-medlife" },
];

interface ServiceLinksProps {
  currentHref?: string;
  title?: string;
  className?: string;
}

export default function ServiceLinks({ 
  currentHref, 
  title = "Vezi și celelalte servicii RMN",
  className 
}: ServiceLinksProps) {
  const otherServices = allServices.filter(service => service.href !== currentHref);

  return (
    <div className={cn("bg-gradient-soft rounded-xl p-6", className)}>
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {otherServices.map((service) => (
          <Link
            key={service.href}
            to={service.href}
            className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-accent transition-colors group focus-ring"
          >
            <span className="text-sm font-medium text-foreground">{service.title}</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        ))}
        <Link
          to="/contact"
          className="flex items-center justify-between p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group focus-ring"
        >
          <span className="text-sm font-medium">Contact & Programări</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/preturi-rmn"
          className="flex items-center justify-between p-3 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-colors group focus-ring"
        >
          <span className="text-sm font-medium">Vezi prețurile</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}