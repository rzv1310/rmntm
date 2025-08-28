import { Link } from "react-router-dom";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight, Phone } from "lucide-react";

const legalDocuments = [
  {
    title: "Termeni și Condiții",
    description: "Termenii și condițiile de utilizare a platformei RMN Timișoara pentru servicii medicale de înaltă calitate.",
    href: "/legal/termeni-si-conditii",
    highlights: ["Condiții de utilizare", "Drepturi și obligații", "Servicii medicale", "Responsabilități"]
  },
  {
    title: "Politica Cookies",
    description: "Informații detaliate despre utilizarea cookie-urilor pe site-ul nostru și cum acestea îmbunătățesc experiența dvs.",
    href: "/legal/politica-cookies",
    highlights: ["Tipuri de cookies", "Managementul preferințelor", "Cookie-uri tehnice", "Confidențialitate"]
  },
  {
    title: "Politica de Confidențialitate (GDPR)",
    description: "Cum procesăm și protejăm datele dumneavoastră personale în conformitate cu reglementările GDPR.",
    href: "/legal/gdpr",
    highlights: ["Protecția datelor", "Drepturi GDPR", "Securitate informații", "Consimțământ prelucrat"]
  }
];

export default function LegalPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Legal" }
            ]} 
          />
        </div>

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documente Legale
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Accesați documentele legale și politicile noastre de confidențialitate și utilizare. 
            Transparența și respectarea legislației sunt prioritățile noastre în oferirea serviciilor medicale.
          </p>
        </div>

        {/* Legal Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {legalDocuments.map((doc, index) => {
            return (
              <div key={doc.href} className="animate-fade-in-up" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
                <div className="medical-card service-card rounded-xl p-6 h-full flex flex-col hover:-translate-y-2 transition-all duration-300 ease-out hover:shadow-lg">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{doc.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{doc.description}</p>
                    
                    {doc.highlights.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {doc.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-burgundy-dark mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                  <GradientButton asChild className="w-full group">
                    <Link to={doc.href} className="flex items-center justify-center gap-2">
                      <span>Citește documentul</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </GradientButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center text-white animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ai întrebări despre documentele legale?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Contactează-ne pentru clarificări suplimentare despre politicile noastre sau pentru informații despre serviciile RMN.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton asChild>
              <a href="tel:+40256404500" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                0256 404 500
              </a>
            </GradientButton>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <div className="bg-gradient-soft rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Informații importante
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">Conformitate GDPR</h4>
                <p>Respectăm întru totul reglementările europene de protecție a datelor personale.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Transparență</h4>
                <p>Toate politicile sunt actualizate regulat și disponibile în format accesibil.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Suport legal</h4>
                <p>Echipa noastră juridică este disponibilă pentru clarificări suplimentare.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}