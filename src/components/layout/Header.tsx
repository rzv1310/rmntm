
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Menu as NavMenu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";

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
    ],
  },
  { name: "Prețuri RMN", href: "/preturi-rmn" },
  { name: "RMN prin CAS", href: "/rmn-prin-cas" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
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
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center pt-4 pb-2">
        <NavMenu setActive={setActive}>
          <Link to="/" className="text-foreground hover:text-primary font-light py-2 px-3 rounded-lg transition-colors uppercase">
            Acasă
          </Link>
          
          <MenuItem setActive={setActive} active={active} item="Servicii">
            <div className="grid grid-cols-2 gap-4 p-2 min-w-[400px]">
              {navigation.find(item => item.name === "Servicii")?.submenu?.map((service) => (
                <HoveredLink key={service.href} to={service.href}>
                  {service.name}
                </HoveredLink>
              ))}
            </div>
          </MenuItem>
          
          <MenuItem setActive={setActive} active={active} item="Prețuri & CAS">
            <div className="flex flex-col space-y-2">
              <HoveredLink to="/preturi-rmn">Prețuri RMN</HoveredLink>
              <HoveredLink to="/rmn-prin-cas">RMN prin CAS</HoveredLink>
            </div>
          </MenuItem>
          
          <Link to="/contact" className="text-foreground hover:text-primary font-light py-2 px-3 rounded-lg transition-colors uppercase">
            Contact
          </Link>
        </NavMenu>
      </div>

      {/* Mobile Navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:hidden">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <GradientButton
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="focus-ring p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </GradientButton>

          {/* Phone button */}
          <GradientButton asChild className="focus-ring p-2">
            <a href="tel:+40256404500" aria-label="Sună acum">
              <Phone className="h-6 w-6" />
            </a>
          </GradientButton>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-40 transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="absolute inset-0 bg-white">
            <div className="mx-auto max-w-sm p-6">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <Link
                          to={item.href}
                          className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:text-primary font-light uppercase"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                        <div className="mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block rounded-md px-6 py-2 text-sm text-muted-foreground hover:text-foreground font-light uppercase"
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
                          "block rounded-lg px-3 py-2 text-base font-medium transition-colors font-light uppercase",
                          location.pathname === item.href
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        )}
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <GradientButton asChild className="w-full">
                    <a href="tel:+40256404500" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Programează-te
                    </a>
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
