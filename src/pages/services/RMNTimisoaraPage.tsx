import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import ServiceLinks from "@/components/ServiceLinks";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export default function RMNTimisoaraPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Servicii", href: "/servicii" },
              { label: "RMN Timișoara - Medlife" }
            ]} 
          />
        </div>

        <div className="mb-12 scroll-reveal">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            RMN Timișoara – Medlife
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Investigații de înaltă precizie la Medlife Timișoara cu echipament de ultimă generație.
          </p>
        </div>

        <section className="mb-12 scroll-reveal">
          <div className="medical-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Informații Contact</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Bulevardul Liviu Rebreanu 156, Timișoara</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+40256404500" className="text-primary font-medium">0256 404 500</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span>Luni–Vineri 8:00–20:00</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 scroll-reveal">
          <div className="bg-gradient-hero rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Programează-te la Medlife Timișoara</h2>
            <Button asChild variant="medical" size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="tel:+40256404500" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                0256 404 500
              </a>
            </Button>
          </div>
        </section>

        <ServiceLinks currentHref="/servicii/rmn-timisoara-medlife" />
      </div>
    </div>
  );
}