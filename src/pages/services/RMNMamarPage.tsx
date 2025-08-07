import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import ServiceLinks from "@/components/ServiceLinks";
import { GradientButton } from "@/components/ui/gradient-button";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Phone, Clock, AlertCircle, CheckCircle } from "lucide-react";

const indicatii = [
  "Screening mamar la risc crescut",
  "Evaluare leziuni detectate la mamografie",
  "Suspiciune de cancer mamar",
  "Monitorizare cicatrici post-operatorii",
  "Evaluare pre-operatorie",
  "Controlul eficacității tratamentului",
  "Identificarea cancerului multicentrik",
  "Screening la portătoarele BRCA"
];

const avantaje = [
  "Sensibilitate ridicată pentru cancer",
  "Fără radiații ionizante",
  "Evaluare țesuturilor dense",
  "Detectare precoce de leziuni",
  "Caracterizarea precisă a leziunilor",
  "Evaluare bilaterală simultană"
];

export default function RMNMamarPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Servicii", href: "/servicii" },
              { label: "RMN Mamar" }
            ]} 
          />
        </div>

        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              RMN Mamar
            </h1>
            <GradientButton variant="variant" className="text-sm font-medium px-3 py-1 rounded-full min-w-0 h-auto">
              Decontat CAS
            </GradientButton>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Examinare specializată pentru screeningul și diagnosticarea afecțiunilor mamare, 
            inclusiv detectarea precoce a cancerului de sân.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <AnimatedCard>
            <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">Introducere</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              RMN-ul mamar este cea mai sensibilă metodă imagistică pentru detectarea cancerului de sân, 
              oferind imagini detaliate ale întregii structuri mamare. Această investigație este esențială 
              pentru femeile cu risc crescut și pentru evaluarea completă a leziunilor mamare.
            </p>
          </AnimatedCard>
        </section>

        {/* Indicații */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Indicații pentru RMN Mamar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard>
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Screening și diagnostic</h3>
              <div className="space-y-3">
                {indicatii.slice(0, 4).map((indicatie, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{indicatie}</span>
                  </div>
                ))}
              </div>
            </AnimatedCard>
            
            <AnimatedCard>
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Evaluări specializate</h3>
              <div className="space-y-3">
                {indicatii.slice(4).map((indicatie, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{indicatie}</span>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Pregătire */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Pregătirea pentru investigație</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard>
              <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2 justify-center">
                <Clock className="h-5 w-5 text-red-500" />
                Durată și pregătire
              </h3>
              <ul className="space-y-2 text-muted-foreground text-center">
                <li>• Efectuare în zilele 7-14 ale ciclului</li>
                <li>• Durata: aproximativ 45-60 minute</li>
                <li>• Nu aplicați deodorant sau pudră</li>
                <li>• Include substanță de contrast</li>
              </ul>
            </AnimatedCard>
            
            <AnimatedCard>
              <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2 justify-center">
                <AlertCircle className="h-5 w-5 text-red-500" />
                Anunțați existența
              </h3>
              <ul className="space-y-2 text-muted-foreground text-center">
                <li>• Sarcinii sau alăptării</li>
                <li>• Implanturilor mamare</li>
                <li>• Alergiilor medicamentoase</li>
                <li>• Investigațiilor anterioare</li>
              </ul>
            </AnimatedCard>
          </div>
        </section>

        {/* Avantaje */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Avantajele RMN Mamar la Clinica Imagistică Avansată
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {avantaje.map((avantaj, index) => (
              <AnimatedCard key={index} className="h-auto">
                <div className="flex items-start gap-3 h-full">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-center">{avantaj}</span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* Preț și decontare */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Preț și decontare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard>
              <h3 className="text-lg font-medium text-foreground mb-3 text-center">Decontare CAS</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                RMN-ul mamar poate fi decontat prin CAS cu bilet de trimitere de la medicul ginecolog, 
                oncolog sau chirurg. Condițiile specifice vor fi verificate la programare.
              </p>
            </AnimatedCard>
            
            <AnimatedCard>
              <h3 className="text-lg font-medium text-foreground mb-3 text-center">Preț orientativ</h3>
              <p className="text-2xl font-bold text-red-500 mb-2 text-center">850,00 lei</p>
              <p className="text-sm text-muted-foreground text-center">
                *Preț pentru RMN mamar bilateral cu substanță de contrast inclusă
              </p>
            </AnimatedCard>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-black rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Programează-te pentru RMN Mamar</h2>
            <p className="text-white/90 mb-6">
              Protejează-ți sănătatea cu cea mai avansată metodă de screening mamar disponibilă.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton asChild>
                <a href="tel:+40256404500" className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-red-500" />
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
        <ServiceLinks currentHref="/servicii/rmn-mamar" />
      </div>
    </div>
  );
}