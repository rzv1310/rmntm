
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { Button } from "@/components/ui/button";
import { Phone, Info } from "lucide-react";

const preturi = [
  { serviciu: "RMN cerebral nativ", pret: "835,00 lei" },
  { serviciu: "RMN umăr unilateral nativ", pret: "765,00 lei" },
  { serviciu: "RMN genunchi bilateral nativ", pret: "1.015,00 lei" },
  { serviciu: "RMN abdomen superior nativ", pret: "835,00 lei" },
  { serviciu: "RMN pelvis nativ", pret: "835,00 lei" },
];

export default function PreturiRMNPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CustomBreadcrumb items={[{ label: "Prețuri RMN" }]} />
        </div>

        <div className="mb-12 scroll-reveal">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Prețuri RMN</h1>
          <p className="text-xl text-muted-foreground">Transparență și accesibilitate în serviciile noastre.</p>
        </div>

        <section className="mb-12 scroll-reveal">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Listă tarife orientative</h2>
          <div className="medical-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-soft">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Serviciu</th>
                    <th className="px-6 py-4 text-right font-semibold text-foreground">Preț</th>
                  </tr>
                </thead>
                <tbody>
                  {preturi.map((item, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="px-6 py-4 text-muted-foreground">{item.serviciu}</td>
                      <td className="px-6 py-4 text-right font-semibold text-primary">{item.pret}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12 scroll-reveal">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Observații importante</h3>
                <ul className="space-y-2 text-amber-700">
                  <li>• Prețurile sunt orientative și pot varia în funcție de complexitate</li>
                  <li>• Substanța de contrast: cost suplimentar aproximativ 100–150 lei</li>
                  <li>• Reduceri pentru investigații multiple în aceeași vizită</li>
                  <li>• Decontare disponibilă prin CAS și asigurări private</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-reveal">
          <div className="bg-gradient-hero rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Pentru informații exacte</h2>
            <p className="text-white/90 mb-6">Contactează-ne pentru prețuri actualizate și detalii despre decontare.</p>
            <Button asChild variant="medical" size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="tel:+40256404500" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                0256 404 500
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
