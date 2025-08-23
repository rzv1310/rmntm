
import ServiceCard from "@/components/ServiceCard";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { GradientButton } from "@/components/ui/gradient-button";
import { Phone } from "lucide-react";

const services = [
  {
    title: "RMN Cerebral",
    description: "Diagnostic neurologic de încredere pentru evaluarea detaliată a creierului și structurilor sale, fără expunere la radiații ionizante.",
    href: "/servicii/rmn-cerebral",
    highlights: ["Dureri de cap persistente", "Convulsii și epilepsie", "Suspiciune de tumori cerebrale", "AVC - evaluare și monitorizare"],
    isDecontCAS: true,
  },
  {
    title: "RMN Coloană Vertebrală",
    description: "Evaluare completă a vertebrelor și țesuturilor moi pentru diagnostic ortopedic avansat, utilă pentru multiple afecțiuni spinale.",
    href: "/servicii/rmn-coloana",
    highlights: ["Hernii de disc", "Dureri lombare cronice", "Canal lombar îngust (stenoză)", "Blocaje cervicale"],
    isDecontCAS: true,
  },
  {
    title: "RMN Articulații",
    description: "Investigații detaliate pentru sănătatea articulară cu imagini clare ale țesuturilor moi și structurilor adiacente.",
    href: "/servicii/rmn-articulatii",
    highlights: ["Leziuni ligamentare", "Rupturi de menisc", "Artrită și artroză", "Evaluare post-traumatică"],
    isDecontCAS: true,
  },
  {
    title: "RMN Abdominal",
    description: "Diagnostic complet pentru organele interne din cavitatea abdominală fără radiații ionizante, pentru multiple patologii.",
    href: "/servicii/rmn-abdominal",
    highlights: ["Patologii hepatice", "Afecțiuni biliare și pancreatice", "Tumori abdominale", "Evaluarea rinichilor"],
    isDecontCAS: true,
  },
  {
    title: "RMN Pelvin",
    description: "Evaluare detaliată pentru sănătatea pelvină, utilă în ginecologie și urologie pentru diagnostic precis.",
    href: "/servicii/rmn-pelvin",
    highlights: ["Fibroame uterine", "Chisturi ovariene", "Endometrioză", "Patologii prostatice"],
    isDecontCAS: true,
  },
  {
    title: "RMN Mamar",
    description: "Examinare specializată pentru screeningul și diagnosticarea afecțiunilor mamare, inclusiv detectarea precoce a cancerului de sân.",
    href: "/servicii/rmn-mamar",
    highlights: ["Screening mamar", "Detectare precoce cancer", "Evaluare leziuni benigne", "Monitorizare risc crescut"],
    isDecontCAS: true,
  },
  {
    title: "Centru RMN Timișoara",
    description: "Servicii RMN de înaltă precizie în centrul orașului Timișoara, fără cozi de așteptare și cu rezultate precise.",
    href: "/",
    highlights: ["Locație convenabilă", "Programări rapide", "Echipament de ultimă generație", "Rapoarte în timp util"],
    isDecontCAS: true,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <CustomBreadcrumb items={[{ label: "Servicii" }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Servicii RMN Complete
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explorează gama noastră de examinări RMN. De la investigații cerebrale la evaluări articulare, 
            oferim diagnostic de înaltă precizie cu echipament de ultimă generație și personal medical dedicat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={service.href} className="animate-fade-in-up" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center text-white animate-fade-in-up" style={{animationDelay: '0.7s'}}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ai nevoie de o programare rapidă?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Contactează-ne pentru informații detaliate despre orice serviciu RMN sau pentru o programare în cel mai scurt timp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton asChild>
              <a href="tel:+40256404500" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                0256 404 500
              </a>
            </GradientButton>
            <GradientButton asChild>
              <a href="/contact">Programare online</a>
            </GradientButton>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-soft rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Informații importante
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">Decontare CAS</h4>
                <p>Toate serviciile RMN pot fi decontate prin Casa de Asigurări de Sănătate, în condițiile legii.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Fără radiații</h4>
                <p>Investigațiile RMN nu utilizează radiații ionizante, fiind sigure pentru toate vârstele.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Rezultate rapide</h4>
                <p>Rapoartele medicale sunt disponibile în 24-48 ore de la efectuarea investigației.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
