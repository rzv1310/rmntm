import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Acasă", href: "/" },
  {
    name: "Servicii",
    href: "/servicii",
    submenu: [
      { name: "RMN Cerebral", href: "/servicii/rmn-cerebral" },
      { name: "RMN Coloană", href: "/servicii/rmn-coloana" },
      { name: "RMN Articulații", href: "/servicii/rmn-articulatii" },
      { name: "RMN Abdominal", href: "/servicii/rmn-abdominal" },
      { name: "RMN Pelvin", href: "/servicii/rmn-pelvin" },
      { name: "RMN Umăr", href: "/servicii/rmn-umar" },
      { name: "RMN Timișoara - Medlife", href: "/servicii/rmn-timisoara-medlife" },
    ],
  },
  { name: "Prețuri RMN", href: "/preturi-rmn" },
  { name: "RMN prin CAS", href: "/rmn-prin-cas" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "glass shadow-medium backdrop-blur-md"
          : "bg-background/95 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 focus-ring rounded-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold gradient-text">Ghid RMN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    className="group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors focus-ring rounded-lg px-3 py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    
                    {/* Desktop Dropdown */}
                    <div
                      className={cn(
                        "absolute left-0 top-full mt-2 w-64 origin-top-left transform transition-all duration-200",
                        isServicesOpen
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-0 pointer-events-none"
                      )}
                    >
                      <div className="rounded-lg bg-background shadow-large border border-border p-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors focus-ring rounded-lg px-3 py-2",
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button asChild variant="medical" size="lg">
              <a href="tel:+40256404500" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Programează-te
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="focus-ring"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-40 lg:hidden transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md">
            <div className="mx-auto max-w-sm p-6">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-accent"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              isServicesOpen && "rotate-180"
                            )}
                          />
                        </button>
                        
                        {/* Mobile Submenu */}
                        <div
                          className={cn(
                            "mt-2 space-y-2 overflow-hidden transition-all duration-200",
                            isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          )}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block rounded-md px-6 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent"
                              onClick={closeMenu}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                          location.pathname === item.href
                            ? "text-primary bg-accent"
                            : "text-foreground hover:text-primary hover:bg-accent"
                        )}
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <Button asChild variant="medical" size="lg" className="w-full">
                    <a href="tel:+40256404500" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Programează-te
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}