import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import ServiceLinks from "@/components/ServiceLinks";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, AlertTriangle } from "lucide-react";

const segmente = [
  {
    title: "RMN Coloană Cervicală",
    indicatii: [
      "Dureri de gât",
      "Blocaje cervicale",
      "Hernii de disc C1–C7",
      "Instabilitate cervicală"
    ]
  },
  {
    title: "RMN Coloană Lombară",
    indicatii: [
      "Dureri lombare (lombalgii)",
      "Hernii de disc L1–S1",
      "Canal lombar îngust (stenoză)",
      "Iscialgia"
    ]
  },
  {
    title: "RMN Coloană Dorsală",
    indicatii: [
      "Dureri între omoplați",
      "Deformări (scolioză, cifoză)",
      "Patologii vertebrale",
      "Evaluare post-traumatică"
    ]
  }
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
    <div className="min-h-screen py-8">
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
        <div className="mb-12 scroll-reveal">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              RMN Coloană Vertebrală
            </h1>
            <span className="bg-success text-success-foreground text-sm font-medium px-3 py-1 rounded-full">
              Decontat CAS
            </span>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Diagnostic ortopedic avansat pentru evaluarea vertebrelor și țesuturilor moi adiacente, 
            fără radiații ionizante.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12 scroll-reveal">
          <div className="medical-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introducere</h2>
            <p className="text-muted-foreground leading-relaxed">
              RMN-ul coloanei vertebrale evaluează în detaliu vertebrele și țesuturile moi adiacente, 
              fără radiații ionizante. Această investigație este utilă atât în diagnostic, cât și în 
              monitorizarea evoluției diferitelor afecțiuni ale coloanei vertebrale, oferind informații 
              precise despre discurile intervertebrale, măduva spinării și nervii adiacenți.
            </p>
          </div>
        </section>

        {/* Indicații pe segmente */}
        <section className="mb-12 scroll-reveal">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Indicații pe segmente</h2>
          <div className="space-y-6">
            {segmente.map((segment, index) => (
              <div key={index} className="medical-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-4">{segment.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {segment.indicatii.map((indicatie, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <AlertTriangle className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{indicatie}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Avantaje */}
        <section className="mb-12 scroll-reveal">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Avantajele RMN Coloană</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {avantaje.map((avantaj, index) => (
              <div key={index} className="flex items-start gap-3 medical-card p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{avantaj}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ce detectează */}
        <section className="mb-12 scroll-reveal">
          <div className="bg-gradient-soft rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Ce detectează RMN-ul coloanei?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Structuri evaluate</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Vertebrele și corpii vertebrali</li>
                  <li>• Discurile intervertebrale</li>
                  <li>• Măduva spinării</li>
                  <li>• Rădăcinile nervoase</li>
                  <li>• Ligamentele spinale</li>
                  <li>• Mușchii paravertebrali</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Patologii diagnosticate</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Hernii de disc</li>
                  <li>• Stenoză de canal</li>
                  <li>• Spondiloză</li>
                  <li>• Tumori spinale</li>
                  <li>• Infecții vertebrale</li>
                  <li>• Traumatisme vertebrale</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pregătire și durată */}
        <section className="mb-12 scroll-reveal">
          <div className="medical-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Pregătire și durată</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Pregătire</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Nu necesită pregătire specială</li>
                  <li>• Îmbrăcăminte confortabilă</li>
                  <li>• Înlăturați obiectele metalice</li>
                  <li>• Anunțați medicația actuală</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Durata investigației</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• RMN cervical: 30-40 minute</li>
                  <li>• RMN lombar: 30-40 minute</li>
                  <li>• RMN dorsal: 35-45 minute</li>
                  <li>• Multiple segmente: +15-20 min/segment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Preț informativ */}
        <section className="mb-12 scroll-reveal">
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Informații despre preț și decontare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Decontare CAS</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Investigațiile pot fi decontate prin CAS cu bilet de trimitere corespunzător. 
                  Contactați recepția pentru verificarea condițiilor de decontare.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Preț orientativ</h3>
                <p className="text-muted-foreground">
                  Prețurile variază în funcție de segmentul investigat. Pentru informații exacte, 
                  contactați clinica la <a href="tel:+40256404500" className="text-primary font-medium">0256 404 500</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 scroll-reveal">
          <div className="bg-gradient-hero rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Programează RMN Coloană Vertebrală</h2>
            <p className="text-white/90 mb-6">
              Diagnosticul rapid și precis este esențial pentru tratamentul optim al afecțiunilor coloanei.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="medical" size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="tel:+40256404500" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Programează acum
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="/preturi-rmn">Vezi prețurile</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Links */}
        <ServiceLinks currentHref="/servicii/rmn-coloana" />
      </div>
    </div>
  );
}