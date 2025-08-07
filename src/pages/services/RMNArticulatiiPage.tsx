import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import ServiceLinks from "@/components/ServiceLinks";
import { GradientButton } from "@/components/ui/gradient-button";
import { Phone, CheckCircle, Eye, AlertCircle } from "lucide-react";

const indicatii = [
  "Dureri articulare persistente",
  "Leziuni ligamentare și tendinoase",
  "Rupturi de menisc",
  "Artrită și artroză",
  "Evaluare post-traumatică",
  "Instabilitate articulară",
  "Blocaje articulare",
  "Umflături și colecții lichidiene"
];

const structuriEvaluate = [
  "Cartilajul articular",
  "Ligamente și tendoane",
  "Meniscuri (la genunchi)",
  "Sinovială și lichid articular",
  "Oasele și structurile adiacente",
  "Bursa articulară",
  "Capsula articulară",
  "Vascularizația regională"
];

const articulatiiPrincipale = [
  {
    nume: "Genunchi",
    detalii: "Evaluare completă pentru meniscuri, ligamente, cartilaj"
  },
  {
    nume: "Umăr",
    detalii: "Manșeta rotatorilor, labrum, tendonul bicepsului"
  },
  {
    nume: "Cot", 
    detalii: "Epicondilite, leziuni ligamentare, artroză"
  },
  {
    nume: "Încheietura mâinii",
    detalii: "Tendoane, ligamente, osul scafoid"
  },
  {
    nume: "Șold",
    detalii: "Labrum acetabular, cartilaj, konflict femoro-acetabular"
  },
  {
    nume: "Gleznă",
    detalii: "Ligamente laterale, tendonul lui Ahile, cartilaj"
  }
];

export default function RMNArticulatiiPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Servicii", href: "/servicii" },
              { label: "RMN Articulații" }
            ]} 
          />
        </div>

        {/* Header */}
        <div className="mb-12 scroll-reveal">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              RMN Articulații
            </h1>
            <GradientButton variant="variant" className="text-sm font-medium px-3 py-1 rounded-full min-w-0 h-auto">
              Decontat CAS
            </GradientButton>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Investigații detaliate pentru sănătatea articulară cu imagini clare ale articulațiilor 
            și structurilor adiacente, fără radiații ionizante.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12 scroll-reveal">
          <div className="medical-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introducere</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RMN-ul articular oferă imagini excepțional de clare ale articulațiilor și structurilor adiacente, 
              fără utilizarea radiațiilor ionizante. Această investigație este esențială pentru diagnosticarea 
              precisă a leziunilor sportive, patologiilor degenerative și a unei game largi de afecțiuni articulare.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Prin capacitatea sa de a vizualiza detaliat țesuturile moi, RMN-ul articular este considerat 
              standardul de aur în evaluarea leziunilor ligamentare, tendinoase și a cartilajului articular.
            </p>
          </div>
        </section>

        {/* Indicații */}
        <section className="mb-12 scroll-reveal">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Indicații pentru RMN Articulații</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {indicatii.map((indicatie, index) => (
              <div key={index} className="flex items-start gap-3 medical-card p-4 rounded-lg">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{indicatie}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Articulații principale */}
        <section className="mb-12 scroll-reveal">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Articulații principale evaluate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articulatiiPrincipale.map((articulatie, index) => (
              <div key={index} className="medical-card p-5 rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-2">{articulatie.nume}</h3>
                <p className="text-sm text-muted-foreground">{articulatie.detalii}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ce detectează */}
        <section className="mb-12 scroll-reveal">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            <Eye className="inline h-6 w-6 mr-2 text-primary" />
            Ce detectează RMN-ul articular?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {structuriEvaluate.map((structura, index) => (
              <div key={index} className="flex items-start gap-3 bg-gradient-soft p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{structura}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Avantaje și proces */}
        <section className="mb-12 scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="medical-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Avantaje RMN Articular</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span>Non-invaziv și fără radiații</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span>Detalii anatomice de înaltă rezoluție</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span>Evaluare completă a articulației</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span>Diagnostic diferențial precis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span>Planificarea tratamentului optim</span>
                </li>
              </ul>
            </div>

            <div className="medical-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Procesul de investigație</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><span className="font-medium">1.</span> Poziționare corespunzătoare</li>
                <li><span className="font-medium">2.</span> Imobilizarea articulației</li>
                <li><span className="font-medium">3.</span> Achiziție de imagini în planuri multiple</li>
                <li><span className="font-medium">4.</span> Evaluare cu/fără substanță de contrast</li>
                <li><span className="font-medium">5.</span> Analiza detaliată a structurilor</li>
                <li><span className="font-medium">6.</span> Raport medical specializat</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pregătire și informații practice */}
        <section className="mb-12 scroll-reveal">
          <div className="bg-gradient-soft rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Pregătire și informații practice</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Pregătire</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Nu necesită pregătire specială</li>
                  <li>• Îmbrăcăminte confortabilă</li>
                  <li>• Înlăturați obiectele metalice</li>
                  <li>• Aduceți investigații anterioare</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Durata</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• O articulație: 30-40 min</li>
                  <li>• Multiple articulații: +15 min/articulație</li>
                  <li>• Cu substanță de contrast: +10-15 min</li>
                  <li>• Include poziționare și consultare</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Rezultate</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Raport în 24-48 ore</li>
                  <li>• Imagini pe film sau CD</li>
                  <li>• Consultare cu radiologul</li>
                  <li>• Recomandări de tratament</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Informații despre preț */}
        <section className="mb-12 scroll-reveal">
          <div className="medical-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Informații despre preț și decontare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Decontare CAS</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Investigațiile RMN articulare pot fi decontate prin CAS cu bilet de trimitere de la 
                  medicul ortoped sau reumatolog. Verificați condițiile specifice la programare.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Prețuri orientative</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• RMN umăr unilateral: <span className="font-medium">765,00 lei</span></li>
                  <li>• RMN genunchi bilateral: <span className="font-medium">1.015,00 lei</span></li>
                  <li>• Pentru alte articulații, contactați clinica</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 scroll-reveal">
          <div className="bg-black rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Programează RMN Articulații</h2>
            <p className="text-white/90 mb-6">
              Obține un diagnostic precis pentru problemele articulare și începe tratamentul optim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton asChild>
                <a href="tel:+40256404500" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Programează acum
                </a>
              </GradientButton>
              <GradientButton asChild variant="variant">
                <a href="/preturi-rmn">Vezi toate prețurile</a>
              </GradientButton>
            </div>
          </div>
        </section>

        {/* Service Links */}
        <ServiceLinks currentHref="/servicii/rmn-articulatii" />
      </div>
    </div>
  );
}