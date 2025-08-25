import CustomBreadcrumb from "@/components/CustomBreadcrumb";

export default function TermeniPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Legal", href: "/legal" },
              { label: "Termeni și Condiții" }
            ]} 
          />
        </div>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Termeni și Condiții</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="medical-card p-8 rounded-xl space-y-6">
            <p>Prezentul document stabilește termenii și condițiile de utilizare a website-ului „Ghid RMN". Accesând și utilizând site-ul, sunteți de acord cu acești termeni.</p>
            
            <h3 className="text-xl font-semibold text-foreground">1. Definiții</h3>
            <p className="text-muted-foreground">„Site" – platforma online „Ghid RMN"; „Utilizator" – orice persoană care accesează site-ul; „Servicii" – informații și facilități de programare către clinici partenere.</p>
            
            <h3 className="text-xl font-semibold text-foreground">2. Caracter informativ</h3>
            <p className="text-muted-foreground">Informațiile medicale au caracter general și nu înlocuiesc consultul de specialitate. Pentru diagnostic și tratament, adresați-vă medicului.</p>
          </div>
        </div>
      </div>
    </div>
  );
}