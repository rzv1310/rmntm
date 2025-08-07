import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import ServiceLinks from "@/components/ServiceLinks";
import { GradientButton } from "@/components/ui/gradient-button";
import { Phone } from "lucide-react";

export default function RMNPelvinPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Servicii", href: "/servicii" },
              { label: "RMN Pelvin" }
            ]} 
          />
        </div>

        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">RMN Pelvin</h1>
            <GradientButton variant="variant" className="text-sm font-medium px-3 py-1 rounded-full min-w-0 h-auto">Decontat CAS</GradientButton>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Evaluare detaliată pentru sănătatea pelvină, utilă în ginecologie și urologie.
          </p>
        </div>

        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="bg-black rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Programează RMN Pelvin</h2>
            <GradientButton asChild>
              <a href="tel:+40256404500" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Programează acum
              </a>
            </GradientButton>
          </div>
        </section>

        <ServiceLinks currentHref="/servicii/rmn-pelvin" />
      </div>
    </div>
  );
}