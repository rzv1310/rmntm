import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import ServiceLinks from "@/components/ServiceLinks";
import { GradientButton } from "@/components/ui/gradient-button";
import { Phone, Clock, AlertCircle, CheckCircle } from "lucide-react";

const indicatii = [
  "Dureri de cap persistente (migrene, alte cauze neurologice)",
  "Vertij și tulburări de echilibru",
  "Convulsii și epilepsie",
  "Tulburări de memorie (suspiciune boli neurodegenerative)",
  "Suspiciune de tumori cerebrale",
  "AVC – evaluare și monitorizare",
  "Scleroză multiplă",
  "Traumatisme craniocerebrale",
];

const avantaje = [
  "Echipament RMN de înaltă rezoluție",
  "Radiologi cu experiență în neuroimagistică",
  "Programare rapidă",
  "Fără expunere la radiații ionizante",
  "Imagini detaliate ale creierului",
  "Diagnostic precis și rapid",
];

export default function RMNCerebralPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Servicii", href: "/servicii" },
              { label: "RMN Cerebral" }
            ]} 
          />
        </div>

        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              RMN Cerebral
            </h1>
            <GradientButton variant="variant" className="text-sm font-medium px-3 py-1 rounded-full min-w-0 h-auto">
              Decontat CAS
            </GradientButton>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Diagnostic neurologic de încredere pentru evaluarea detaliată a creierului și structurilor sale, 
            fără utilizarea radiațiilor ionizante.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="medical-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introducere</h2>
            <p className="text-muted-foreground leading-relaxed">
              RMN-ul cerebral este o investigație imagistică non-invazivă, critică pentru evaluarea detaliată 
              a creierului și a structurilor sale, fără expunere la radiații ionizante. Această metodă oferă 
              imagini de înaltă rezoluție care permit diagnosticarea precisă a unei game largi de afecțiuni neurologice.
            </p>
          </div>
        </section>

        {/* Indicații */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Indicații pentru RMN Cerebral</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {indicatii.map((indicatie, index) => (
              <div key={index} className="flex items-start gap-3 medical-card p-4 rounded-lg">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{indicatie}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pregătire */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Pregătirea pentru investigație</h2>
          <div className="bg-gradient-soft rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Durată și pregătire
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Nu necesită pregătire specială</li>
                  <li>• Durata: aproximativ 30-45 minute</li>
                  <li>• Mențineți imobilitatea pe parcursul examinării</li>
                  <li>• Puteți relua activitățile normale imediat după</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  Anunțați existența
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Implanturilor metalice</li>
                  <li>• Pacemaker-ului cardiac</li>
                  <li>• Protezelor dentare</li>
                  <li>• Dispozitivelor medicale implantabile</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Avantaje */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Avantajele RMN Cerebral la Clinica Imagistică Avansată
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {avantaje.map((avantaj, index) => (
              <div key={index} className="flex items-start gap-3 medical-card p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{avantaj}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Preț și decontare */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <div className="medical-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Preț și decontare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Decontare CAS</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Serviciile pot fi decontate prin Casa de Asigurări de Sănătate cu bilet de trimitere 
                  de la medicul de familie sau specialist. Pentru detalii, contactați recepția la programare.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Preț orientativ</h3>
                <p className="text-2xl font-bold text-primary mb-2">835,00 lei</p>
                <p className="text-sm text-muted-foreground">
                  *Preț pentru RMN cerebral nativ. Cu substanță de contrast: +100-150 lei
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-black rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Programează-te pentru RMN Cerebral</h2>
            <p className="text-white/90 mb-6">
              Contactează-ne pentru o programare rapidă sau pentru informații suplimentare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton asChild>
                <a href="tel:+40256404500" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  0256 404 500
                </a>
              </GradientButton>
              <GradientButton asChild variant="variant">
                <a href="/contact">Contact complet</a>
              </GradientButton>
            </div>
          </div>
        </section>

        {/* Service Links */}
        <ServiceLinks currentHref="/servicii/rmn-cerebral" />
      </div>
    </div>
  );
}