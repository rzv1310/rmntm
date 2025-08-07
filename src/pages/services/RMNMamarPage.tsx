import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import ServiceLinks from "@/components/ServiceLinks";
import { GradientButton } from "@/components/ui/gradient-button";
import { Phone, CheckCircle, Eye, AlertCircle, Heart } from "lucide-react";

const indicatii = [
  "Screening mamar la risc crescut",
  "Evaluare leziuni detectate la mamografie",
  "Monitorizare cicatrici post-operatorii",
  "Suspiciune de cancer mamar",
  "Evaluare pre-operatorie",
  "Controlul eficacității tratamentului",
  "Identificarea cancerului multicentrik",
  "Screening la portătoarele BRCA"
];

const avantajeRMN = [
  "Sensibilitate ridicată pentru cancer",
  "Fără radiații ionizante",
  "Evaluare țesuturilor dense",
  "Detectare precoce",
  "Caracterizarea leziunilor",
  "Evaluare bilaterală simultană",
  "Monitorizare tratament",
  "Screening la risc crescut"
];

const structuriEvaluate = [
  "Țesutul mamar glandular",
  "Canalele galactofore",
  "Ganglionii limfatici axilari",
  "Vascularizația mamară",
  "Țesutul adipos",
  "Areola și mamelonul",
  "Mușchiul pectoral",
  "Spațiul retromamarian"
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
        <div className="mb-12 scroll-reveal">
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
        <section className="mb-12 scroll-reveal">
          <div className="medical-card p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Introducere</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RMN-ul mamar este cea mai sensibilă metodă imagistică pentru detectarea cancerului de sân, 
              oferind imagini detaliate ale întregii structuri mamare. Această investigație este esențială 
              pentru femeile cu risc crescut și pentru evaluarea completă a leziunilor mamare.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Prin capacitatea sa superioară de a diferenția țesuturile, RMN-ul mamar poate detecta 
              leziuni mici care nu sunt vizibile la mamografie sau ecografie, fiind deosebit de util 
              la femeile cu țesut mamar dens.
            </p>
          </div>
        </section>

        {/* Indicații */}
        <section className="mb-12 scroll-reveal">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Indicații pentru RMN Mamar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {indicatii.map((indicatie, index) => (
              <div key={index} className="flex items-start gap-3 medical-card p-4 rounded-lg">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{indicatie}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ce detectează */}
        <section className="mb-12 scroll-reveal">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            <Eye className="inline h-6 w-6 mr-2 text-primary" />
            Ce evaluează RMN-ul mamar?
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
              <h3 className="text-xl font-semibold text-foreground mb-4">Avantaje RMN Mamar</h3>
              <ul className="space-y-3 text-muted-foreground">
                {avantajeRMN.map((avantaj, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                    <span>{avantaj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="medical-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Procesul de investigație</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><span className="font-medium">1.</span> Poziționare în decubit ventral</li>
                <li><span className="font-medium">2.</span> Administrare substanță de contrast</li>
                <li><span className="font-medium">3.</span> Achiziție imagini native</li>
                <li><span className="font-medium">4.</span> Secvențe dinamice post-contrast</li>
                <li><span className="font-medium">5.</span> Evaluare bilaterală completă</li>
                <li><span className="font-medium">6.</span> Raport specializat cu recomandări</li>
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
                  <li>• Efectuare în zilele 7-14 ale ciclului</li>
                  <li>• Nu aplicați deodorant sau pudră</li>
                  <li>• Îmbrăcăminte fără metal</li>
                  <li>• Aduceți investigații anterioare</li>
                  <li>• Informați despre sarcină/alăptare</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Durata</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• RMN mamar bilateral: 45-60 min</li>
                  <li>• Include administrare contrast</li>
                  <li>• Poziționare și consultare: +15 min</li>
                  <li>• Total: aproximativ 75 min</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Rezultate</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Raport în 24-48 ore</li>
                  <li>• Imagini pe film sau CD</li>
                  <li>• Consultare cu radiologul</li>
                  <li>• Recomandări suplimentare</li>
                  <li>• Trimitere la specialist dacă necesar</li>
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
                  RMN-ul mamar poate fi decontat prin CAS cu bilet de trimitere de la medicul ginecolog, 
                  oncolog sau chirurg. Condițiile specifice vor fi verificate la programare.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Preț orientativ</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• RMN mamar bilateral: <span className="font-medium">850,00 lei</span></li>
                  <li>• Include substanța de contrast</li>
                  <li>• Contactați pentru informații complete</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 scroll-reveal">
          <div className="bg-black rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Programează RMN Mamar</h2>
            <p className="text-white/90 mb-6">
              Protejează-ți sănătatea cu cea mai avansată metodă de screening mamar disponibilă.
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
        <ServiceLinks currentHref="/servicii/rmn-mamar" />
      </div>
    </div>
  );
}