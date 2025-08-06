import CustomBreadcrumb from "@/components/CustomBreadcrumb";

export default function CookiesPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CustomBreadcrumb 
            items={[
              { label: "Legal", href: "/legal" },
              { label: "Politica Cookies" }
            ]} 
          />
        </div>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Politica privind modulele cookie</h1>
        </div>

        <div className="medical-card p-8 rounded-xl space-y-6">
          <p className="text-muted-foreground">Această politică explică ce sunt cookie-urile, cum le folosim și cum le puteți gestiona.</p>
          
          <h3 className="text-xl font-semibold text-foreground">1. Ce sunt cookie-urile?</h3>
          <p className="text-muted-foreground">Fișiere text mici stocate pe dispozitiv pentru a îmbunătăți experiența de navigare.</p>
          
          <h3 className="text-xl font-semibold text-foreground">2. Tipuri utilizate</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Necesare (esențiale pentru funcționarea site-ului)</li>
            <li>De performanță (statistici anonime)</li>
            <li>Funcționale (preferințe utilizator)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}