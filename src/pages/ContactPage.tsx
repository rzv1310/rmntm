
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { GradientButton } from "@/components/ui/gradient-button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CustomBreadcrumb items={[{ label: "Contact" }]} />
        </div>

        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact</h1>
          <p className="text-xl text-muted-foreground">Sună pentru programări și informații !</p>
        </div>

        <section className="mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="medical-card p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Informații de contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Telefon</h3>
                    <a href="tel:+40256404500" className="text-xl text-red-500 font-medium">0256 404 500</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <a href="mailto:contact@rmn-timisoara.ro" className="text-red-500">contact@rmn-timisoara.ro</a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Adresa</h3>
                    <p className="text-muted-foreground">Bulevardul Liviu Rebreanu 156, Timișoara</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Program</h3>
                    <p className="text-muted-foreground">Luni–Vineri 08:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="bg-black rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ai nevoie de mai multe detalii?</h2>
            <p className="text-white/90 mb-6">Suntem aici să îți răspundem la orice întrebare.</p>
            <GradientButton asChild>
              <a href="tel:+40256404500" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Sună acum
              </a>
            </GradientButton>
          </div>
        </section>
      </div>
    </div>
  );
}
