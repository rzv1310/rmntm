import { Link } from "react-router-dom";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { FileText, Shield, Cookie } from "lucide-react";

export default function LegalPage() {
  const legalDocuments = [
    {
      title: "Termeni și Condiții",
      description: "Termenii și condițiile de utilizare a platformei RMN Timișoara",
      href: "/legal/termeni-si-conditii",
      icon: FileText
    },
    {
      title: "Politica Cookies",
      description: "Informații despre utilizarea cookie-urilor pe site-ul nostru",
      href: "/legal/politica-cookies",
      icon: Cookie
    },
    {
      title: "Politica de Confidențialitate (GDPR)",
      description: "Cum procesăm și protejăm datele dumneavoastră personale",
      href: "/legal/gdpr",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Legal" }
            ]} 
          />
        </div>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Documente Legale</h1>
          <p className="text-lg text-muted-foreground">
            Accesați documentele legale și politicile noastre de confidențialitate și utilizare.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {legalDocuments.map((doc) => {
            const IconComponent = doc.icon;
            return (
              <Link
                key={doc.href}
                to={doc.href}
                className="medical-card p-6 rounded-xl hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {doc.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}