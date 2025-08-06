import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import ServiceLinks from "@/components/ServiceLinks";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Phone } from "lucide-react";

export default function RMNUmarPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Servicii", href: "/servicii" },
              { label: "RMN Umăr" }
            ]} 
          />
        </div>

        <div className="mb-12 scroll-reveal">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">RMN Umăr</h1>
            <GradientButton variant="variant" className="text-sm font-medium px-3 py-1 rounded-full min-w-0 h-auto">Decontat CAS</GradientButton>
          </div>
        </div>

        <section className="mb-12 scroll-reveal">
          <div className="bg-gradient-hero rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Programează RMN Umăr</h2>
            <Button asChild variant="medical" size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="tel:+40256404500" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Programează acum
              </a>
            </Button>
          </div>
        </section>

        <ServiceLinks currentHref="/servicii/rmn-umar" />
      </div>
    </div>
  );
}