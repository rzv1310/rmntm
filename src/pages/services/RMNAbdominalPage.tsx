import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import ServiceLinks from "@/components/ServiceLinks";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Phone, CheckCircle, Clock } from "lucide-react";

export default function RMNAbdominalPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Servicii", href: "/servicii" },
              { label: "RMN Abdominal" }
            ]} 
          />
        </div>

        <div className="mb-12 scroll-reveal">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">RMN Abdominal</h1>
            <GradientButton variant="variant" className="text-sm font-medium px-3 py-1 rounded-full min-w-0 h-auto">Decontat CAS</GradientButton>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Diagnostic complet pentru organele interne din cavitatea abdominală fără radiații ionizante.
          </p>
        </div>

        <section className="mb-12 scroll-reveal">
          <div className="medical-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Indicații</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Patologii hepatice", "Afecțiuni biliare", "Patologii pancreatice", "Afecțiuni renale", "Tumori abdominale", "Evaluarea splinei"].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gradient-soft rounded-lg">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12 scroll-reveal">
          <div className="bg-gradient-soft rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Pregătire</h2>
            <div className="flex items-start gap-3 mb-3">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium text-foreground mb-2">Instrucțiuni importante</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Post 4–6 ore înainte de investigație</li>
                  <li>• Evitați lichidele cu 2 ore înainte</li>
                  <li>• Informați despre medicația actuală</li>
                  <li>• Durata: aproximativ 45–60 minute</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 scroll-reveal">
          <div className="bg-gradient-hero rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Programează RMN Abdominal</h2>
            <p className="text-white/90 mb-6">Contactează-ne pentru programare și informații detaliate.</p>
            <Button asChild variant="medical" size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="tel:+40256404500" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                0256 404 500
              </a>
            </Button>
          </div>
        </section>

        <ServiceLinks currentHref="/servicii/rmn-abdominal" />
      </div>
    </div>
  );
}