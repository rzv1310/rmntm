
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const footerNavigation = {
  servicii: [
    { name: "RMN Cerebral", href: "/servicii/rmn-cerebral" },
    { name: "RMN Coloană", href: "/servicii/rmn-coloana" },
    { name: "RMN Articulații", href: "/servicii/rmn-articulatii" },
    { name: "RMN Abdominal", href: "/servicii/rmn-abdominal" },
    { name: "RMN Pelvin", href: "/servicii/rmn-pelvin" },
    { name: "RMN Umăr", href: "/servicii/rmn-umar" },
  ],
  informatii: [
    { name: "Prețuri RMN", href: "/preturi-rmn" },
    { name: "RMN prin CAS", href: "/rmn-prin-cas" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Termeni și Condiții", href: "/legal/termeni-si-conditii" },
    { name: "Politica Cookies", href: "/legal/politica-cookies" },
    { name: "GDPR", href: "/legal/gdpr" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-soft border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/77a7121b-7ef8-461f-81b5-ec894ecdecb8.png" 
                alt="RMN Logo" 
                className="h-8 w-8"
              />
              <h2 className="text-lg font-semibold text-foreground tracking-wider uppercase">RMN TIMIȘOARA</h2>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Platforma ta de încredere pentru informații complete despre serviciile RMN. 
              Găsește investigația potrivită și programează-te rapid.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+40256404500" className="hover:text-primary transition-colors">
                  0256 404 500
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@rmn-timisoara.ro" className="hover:text-primary transition-colors">
                  contact@rmn-timisoara.ro
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Bulevardul Liviu Rebreanu 156, Timișoara</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Luni–Vineri 8:00–20:00</span>
              </div>
            </div>
          </div>

          {/* Services & Information Combined */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:col-span-1">
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                Servicii RMN
              </h3>
              <ul className="space-y-3">
                {footerNavigation.servicii.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                Informații
              </h3>
              <ul className="space-y-3">
                {footerNavigation.informatii.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RMN Timișoara. Toate drepturile rezervate.
            </p>
            <p className="text-sm text-muted-foreground">
              Informațiile au caracter orientativ. Consultați medicul specialist.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
