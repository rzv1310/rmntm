import CustomBreadcrumb from "@/components/CustomBreadcrumb";

export default function GDPRPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Legal", href: "/legal" },
              { label: "GDPR" }
            ]} 
          />
        </div>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Politica de confidențialitate (GDPR)</h1>
        </div>

        <div className="medical-card p-8 rounded-xl space-y-6">
          <h3 className="text-xl font-semibold text-foreground">1. Operatorul</h3>
          <p className="text-muted-foreground">Operatorul datelor este „Ghid RMN". Pentru orice solicitare privind datele, utilizați pagina Contact.</p>
          
          <h3 className="text-xl font-semibold text-foreground">2. Ce date colectăm</h3>
          <p className="text-muted-foreground">Date de identificare din formularele de contact și programare (nume, telefon, email) și date tehnice (IP, dispozitiv) în scop de securitate și analitice anonime.</p>
          
          <h3 className="text-xl font-semibold text-foreground">3. Drepturile dvs.</h3>
          <p className="text-muted-foreground">Acces, rectificare, ștergere, restricționare, portabilitate, opoziție, plângere la ANSPDCP. Pentru exercitare, folosiți pagina Contact.</p>
        </div>
      </div>
    </div>
  );
}