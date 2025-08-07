import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const allServices = [
  { title: "RMN Cerebral", href: "/servicii/rmn-cerebral" },
  { title: "RMN Coloană", href: "/servicii/rmn-coloana" },
  { title: "RMN Articulații", href: "/servicii/rmn-articulatii" },
  { title: "RMN Abdominal", href: "/servicii/rmn-abdominal" },
  { title: "RMN Pelvin", href: "/servicii/rmn-pelvin" },
  { title: "RMN Mamar", href: "/servicii/rmn-mamar" },
  { title: "Vezi Prețuri RMN", href: "/preturi-rmn" },
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {otherServices.map((service) => (
          <Link
            key={service.href}
            to={service.href}
            className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-muted/50 transition-colors group focus-ring"
          >
            <span className="text-sm font-medium text-foreground">{service.title}</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to="/contact"
          className="flex items-center justify-between p-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors group focus-ring px-6"
        >
          <span className="text-sm font-medium">Contact & Programări</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform ml-2" />
        </Link>
      </div>
    </div>
  );
}