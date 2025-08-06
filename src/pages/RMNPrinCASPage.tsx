
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { GradientButton } from "@/components/ui/gradient-button";
import { Phone, FileText, CheckCircle } from "lucide-react";

export default function RMNPrinCASPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CustomBreadcrumb items={[{ label: "RMN prin CAS" }]} />
        </div>

        <div className="mb-12 scroll-reveal">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">RMN Decontat prin CAS</h1>
          <p className="text-xl text-muted-foreground">Ghid complet pentru decontarea investigațiilor RMN prin Casa de Asigurări de Sănătate.</p>
        </div>

        <section className="mb-12 scroll-reveal">
          <div className="medical-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Condiții pentru decontare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Calitatea de asigurat cu contribuții la zi",
                "Card de sănătate valabil", 
                "Trimitere medicală justificată",
                "Respectarea circuitului medical"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12 scroll-reveal">
          <div className="bg-gradient-soft rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              <FileText className="inline h-6 w-6 mr-2" />
              Documente necesare
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Obligatorii</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Trimitere de la medic cu cod CAS</li>
                  <li>• Carte de identitate valabilă</li>
                  <li>• Card de sănătate valabil</li>
                  <li>• Bilet de trimitere cu diagnostic</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Suplimentare</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Analize anterioare</li>
                  <li>• Imagini medicale precedente</li>
                  <li>• Foaie de observație (dacă este cazul)</li>
                  <li>• Lista medicației curente</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-reveal">
          <div className="bg-gradient-hero rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Programare prin CAS</h2>
            <p className="text-white/90 mb-6">Contactează-ne pentru informații despre programarea cu decontare CAS.</p>
            <GradientButton asChild>
              <a href="tel:+40256404500" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                0256 404 500
              </a>
            </GradientButton>
          </div>
        </section>
      </div>
    </div>
  );
}
