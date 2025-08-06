
import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import ServiceCard from "@/components/ServiceCard";
import { Phone, Calendar, Clock, Award, Users, Shield, ChevronDown, ArrowRight } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import { useState } from "react";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

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
    id: 1,
    question: "Ce este RMN?",
    answer: "RMN (Rezonanța Magnetică Nucleară) este o investigație imagistică non-invazivă care folosește câmpuri magnetice puternice și onde radio pentru a crea imagini detaliate ale organelor și țesuturilor din corp, fără expunere la radiații ionizante.",
    icon: "🧠",
    iconPosition: "right" as const,
  },
  {
    id: 2,
    question: "Cât durează o investigație RMN?",
    answer: "Durata variază în funcție de tipul investigației: RMN cerebral durează 30-45 minute, RMN coloană 30-40 minute, iar RMN abdominal poate dura 45-60 minute. Este important să rămâneți imobil pe parcursul examinării.",
  },
  {
    id: 3,
    question: "Este necesară o pregătire specială?",
    answer: "Pentru majoritatea investigațiilor RMN nu este necesară pregătire specială. Pentru RMN abdominal se recomandă post de 4-6 ore. Anunțați existența implanturilor metalice sau dispozitivelor medicale implantabile.",
  },
  {
    id: 4,
    question: "În cât timp primesc rezultatele iRM?",
    answer: "Rapoartele medicale sunt disponibile în aprox. 2-5 zile de la efectuarea investigației. Rezultatele sunt livrate pe film și CD / DVD, împreună cu referatul medical detaliat.",
    icon: "⏱️",
    iconPosition: "left" as const,
  },
];

export default function HomePage() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[600px] flex flex-col justify-center bg-neutral-950">
          <div className="absolute inset-0">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                RMN Timișoara
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                Imagistică de încredere în Timișoara, cu programare și rezultate rapide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <GradientButton asChild className="min-w-[200px]">
                  <a href="tel:+40256404500" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Sună acum!
                  </a>
                </GradientButton>
                <GradientButton asChild variant="variant" className="min-w-[200px]">
                  <Link to="/preturi-rmn" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Prețuri RMN
                  </Link>
                </GradientButton>
              </div>
            </div>
          </div>
          
          {/* Google Rating - positioned at bottom */}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
            <div className="flex items-center justify-center gap-2 animate-fade-in-up">
              <span className="text-white/90 text-lg font-medium">Google 5.0</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }}
                    >
                      <motion.path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill="url(#star-gradient)"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut"
                        }}
                      />
                      <defs>
                        <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#fbbf24", stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: "#f97316", stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  ))}
                </div>
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
              Servicii RMN Complete în Timișoara
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De la investigații cerebrale la evaluări articulare, oferim o gamă completă de examinări RMN 
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

          <div className="scroll-reveal">
            <Link to="/servicii" className="block hover:scale-105 transition-transform duration-200">
              <HandWrittenTitle 
                title="Vezi toate"
                subtitle="examinările RMN"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              De ce să alegi clinica noastră RMN?
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
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Întrebările Pacienților
            </h2>
            <p className="text-xl text-muted-foreground">
              Răspunsuri la cele mai frecvente întrebări despre investigațiile RMN
            </p>
          </div>

          <div className="scroll-reveal">
            <FaqAccordion 
              data={faqs}
              className="max-w-[700px] mx-auto"
              timestamp=""
              questionClassName="!bg-transparent hover:!bg-transparent !text-black"
              answerClassName="!bg-black !text-white"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 scroll-reveal">
            Gata să îți programezi examinarea RMN?
          </h2>
          <p className="text-xl text-white/90 mb-8 scroll-reveal">
            Sună pentru o programare rapidă sau pentru informații suplimentare despre iRM.
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
                Contact
                <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
              </Link>
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}
