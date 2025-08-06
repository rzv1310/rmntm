
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import ServiceCard from "@/components/ServiceCard";
import { Phone, Calendar, Clock, Award, Users, Shield, ChevronDown } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import { useState } from "react";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(255,255,255,${0.1 + i * 0.02})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.15 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.6, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const services = [
  {
    title: "RMN Cerebral",
    description: "Diagnostic neurologic de încredere pentru evaluarea detaliată a creierului și structurilor sale.",
    href: "/servicii/rmn-cerebral",
    highlights: ["Dureri de cap persistente", "Convulsii", "Suspiciune tumori cerebrale"],
    isDecontCAS: true,
  },
  {
    title: "RMN Coloană Vertebrală",
    description: "Evaluare completă a vertebrelor și țesuturilor moi pentru diagnostic ortopedic avansat.",
    href: "/servicii/rmn-coloana",
    highlights: ["Hernii de disc", "Dureri lombare", "Canal lombar îngust"],
    isDecontCAS: true,
  },
  {
    title: "RMN Articulații",
    description: "Investigații detaliate pentru sănătatea articulară cu imagini clare ale structurilor adiacente.",
    href: "/servicii/rmn-articulatii",
    highlights: ["Leziuni ligamentare", "Rupturi de menisc", "Artrită și artroză"],
    isDecontCAS: true,
  },
  {
    title: "RMN Abdominal",
    description: "Diagnostic complet pentru organele interne din cavitatea abdominală fără radiații ionizante.",
    href: "/servicii/rmn-abdominal",
    highlights: ["Patologii hepatice", "Afecțiuni biliare", "Tumori abdominale"],
    isDecontCAS: true,
  },
  {
    title: "RMN Pelvin",
    description: "Evaluare detaliată pentru sănătatea pelvină, utilă în ginecologie și urologie.",
    href: "/servicii/rmn-pelvin",
    highlights: ["Fibroame uterine", "Chisturi ovariene", "Patologii prostatice"],
    isDecontCAS: true,
  },
  {
    title: "RMN Umăr",
    description: "Examinare dedicată pentru diagnosticarea leziunilor de tendoane, labrum și capsulă articulară.",
    href: "/servicii/rmn-umar",
    highlights: ["Manșeta rotatorilor", "Instabilitate articulară", "Tendinite și bursite"],
    isDecontCAS: true,
  },
];

const advantages = [
  {
    icon: Users,
    title: "Radiologi cu experiență",
    description: "Interpretare rapidă și corectă.",
  },
  {
    icon: Clock,
    title: "Programări rapide",
    description: "Timpi de așteptare reduși.",
  },
  {
    icon: Shield,
    title: "Decontare prin CAS",
    description: "RMN cu bilet de trimitere.",
  },
];

const faqs = [
  {
    question: "Ce este RMN-ul și cum funcționează?",
    answer: "RMN (Rezonanța Magnetică Nucleară) este o investigație imagistică non-invazivă care folosește câmpuri magnetice puternice și unde radio pentru a crea imagini detaliate ale organelor și țesuturilor din corp, fără expunere la radiații ionizante.",
  },
  {
    question: "Cât durează o investigație RMN?",
    answer: "Durata variază în funcție de tipul investigației: RMN cerebral durează 30-45 minute, RMN coloană 30-40 minute, iar RMN abdominal poate dura 45-60 minute. Este important să rămâneți imobil pe parcursul examinării.",
  },
  {
    question: "Este necesară o pregătire specială?",
    answer: "Pentru majoritatea investigațiilor RMN nu este necesară pregătire specială. Pentru RMN abdominal se recomandă post de 4-6 ore. Anunțați existența implanturilor metalice sau dispozitivelor medicale implantabile.",
  },
  {
    question: "Când primesc rezultatele?",
    answer: "Rapoartele medicale sunt disponibile în 24-48 ore de la efectuarea investigației. Rezultatele sunt livrate pe film sau CD, împreună cu referatul medical detaliat.",
  },
];

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[600px] flex items-center bg-neutral-950">
          <div className="absolute inset-0">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                RMN Timișoara – 
                <span className="block text-white/90">Investigații de încredere</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                Platforma ta completă pentru informații despre serviciile RMN. 
                Găsește investigația potrivită și programează-te rapid la clinicile de încredere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <GradientButton asChild className="min-w-[200px]">
                  <a href="tel:+40256404500" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Programează-te acum
                  </a>
                </GradientButton>
                <GradientButton asChild variant="variant" className="min-w-[200px]">
                  <Link to="/servicii" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Vezi serviciile
                  </Link>
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Servicii RMN Complete
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De la investigații cerebrale la evaluări articulare, oferim o gamă completă de servicii RMN 
              cu echipament de ultimă generație și personal medical specializat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div key={service.href} className="scroll-reveal">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center scroll-reveal">
            <Button asChild variant="outline" size="lg">
              <Link to="/servicii" className="flex items-center gap-2">
                Vezi toate serviciile
                <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              De ce să alegi serviciile noastre?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Combinăm tehnologia avansată cu experiența medicală pentru a oferi diagnostice precise și rapide.
            </p>
          </div>

          <div className="flex justify-center">
            <DisplayCards cards={[
              {
                icon: <Users className="size-4 text-white" />,
                title: "Radiologi cu experiență",
                description: "Interpretare rapidă și corectă.",
                date: "",
                titleClassName: "text-black",
                className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
              },
              {
                icon: <Clock className="size-4 text-white" />,
                title: "Programări rapide",
                description: "Timpi de așteptare reduși.",
                date: "",
                titleClassName: "text-black",
                className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
              },
              {
                icon: <Shield className="size-4 text-white" />,
                title: "Decontare prin CAS",
                description: "RMN cu bilet de trimitere.",
                date: "",
                titleClassName: "text-black",
                className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
              },
            ]} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Întrebări frecvente
            </h2>
            <p className="text-xl text-muted-foreground">
              Răspunsuri la cele mai comune întrebări despre investigațiile RMN
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="medical-card rounded-xl overflow-hidden scroll-reveal">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus-ring"
                >
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div className={`faq-content ${openFAQ === index ? 'open' : ''}`}>
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 scroll-reveal">
            Gata să îți programezi investigația RMN?
          </h2>
          <p className="text-xl text-white/90 mb-8 scroll-reveal">
            Contactează-ne pentru o programare rapidă sau pentru informații suplimentare despre serviciile noastre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal">
            <GradientButton asChild className="min-w-[200px]">
              <a href="tel:+40256404500" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                0256 404 500
              </a>
            </GradientButton>
            <GradientButton asChild variant="variant" className="min-w-[200px]">
              <Link to="/contact" className="flex items-center gap-2">
                Contact complet
                <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
              </Link>
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}
