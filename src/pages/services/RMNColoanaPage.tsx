import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import ServiceLinks from "@/components/ServiceLinks";
import { GradientButton } from "@/components/ui/gradient-button";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Phone, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { AnimatedPhoneButton } from "@/components/ui/animated-phone-button";

const indicatii = [
  "Dureri de gât și blocaje cervicale",
  "Hernii de disc cervicale C1–C7",
  "Instabilitate cervicală",
  "Dureri lombare (lombalgii)",
  "Hernii de disc lombare L1–S1",
  "Canal lombar îngust (stenoză)",
  "Iscialgia și dureri radiante",
  "Deformări (scolioză, cifoză)"
];

const avantaje = [
  "Vizualizare completă a discurilor intervertebrale",
  "Evaluarea măduvei spinării și a nervilor",
  "Fără expunere la radiații",
  "Detalii anatomice de înaltă rezoluție",
  "Diagnostic diferențial precis",
  "Monitorizarea evoluției tratamentului"
];

export default function RMNColoanaPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Servicii", href: "/servicii" },
              { label: "RMN Coloană" }
            ]} 
          />
        </div>

        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              RMN Coloană Vertebrală
            </h1>
            <GradientButton variant="variant" className="text-sm font-medium px-3 py-1 rounded-full min-w-0 h-auto">
              Decontat CAS
            </GradientButton>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Diagnostic ortopedic avansat pentru evaluarea vertebrelor și țesuturilor moi adiacente, 
            fără radiații ionizante.
          </p>
        </div>

        {/* Phone Button */}
        <AnimatedPhoneButton />

        {/* Introduction */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="h-8"></div>
          <AnimatedCard>
            
            <p className="text-muted-foreground leading-relaxed text-center">
              RMN-ul coloanei vertebrale evaluează în detaliu vertebrele și țesuturile moi adiacente, 
              fără radiații ionizante. Această investigație este utilă atât în diagnostic, cât și în 
              monitorizarea evoluției diferitelor afecțiuni ale coloanei vertebrale.
            </p>
          </AnimatedCard>
        </section>

        {/* Indicații */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Indicații pentru RMN Coloană</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard>
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Segmente cervicale și dorsale</h3>
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
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Segmente lombare și patologii</h3>
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
                <li>• Nu necesită pregătire specială</li>
                <li>• Durata: 30-45 minute/segment</li>
                <li>• Îmbrăcăminte confortabilă</li>
                <li>• Înlăturați obiectele metalice</li>
              </ul>
            </AnimatedCard>
            
            <AnimatedCard>
              <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2 justify-center">
                <AlertCircle className="h-5 w-5 text-red-500" />
                Anunțați existența
              </h3>
              <ul className="space-y-2 text-muted-foreground text-center">
                <li>• Implanturilor metalice</li>
                <li>• Pacemaker-ului cardiac</li>
                <li>• Protezelor dentare</li>
                <li>• Dispozitivelor medicale implantabile</li>
              </ul>
            </AnimatedCard>
          </div>
        </section>

        {/* Avantaje */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Avantajele RMN Coloană la Clinica Imagistică Avansată
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {avantaje.map((avantaj, index) => (
              <AnimatedCard key={index} className="h-auto">
                <div className="flex items-start gap-3 h-full justify-start md:justify-center">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-left md:text-center">{avantaj}</span>
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
                Investigațiile pot fi decontate prin Casa de Asigurări de Sănătate cu bilet de trimitere 
                de la medicul de familie sau specialist. Pentru detalii, contactați recepția la programare.
              </p>
            </AnimatedCard>
            
            <AnimatedCard>
              <h3 className="text-lg font-medium text-foreground mb-3 text-center">Preț orientativ</h3>
              <p className="text-2xl font-bold text-red-500 mb-2 text-center">750,00 lei</p>
              <p className="text-sm text-muted-foreground text-center">
                *Preț pentru RMN per segment. Multiple segmente: preț preferențial
              </p>
            </AnimatedCard>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-black rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Programează-te pentru RMN Coloană</h2>
            <p className="text-white/90 mb-6">
              Diagnosticul rapid și precis este esențial pentru tratamentul optim al afecțiunilor coloanei.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton asChild>
                <a href="tel:+40256404500" className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-white" />
                  0256 404 500
                </a>
              </GradientButton>
              <GradientButton asChild>
                <a href="/contact">Programare online</a>
              </GradientButton>
            </div>
          </div>
        </section>

        {/* Service Links */}
        <ServiceLinks currentHref="/servicii/rmn-coloana" />
      </div>
    </div>
  );
}