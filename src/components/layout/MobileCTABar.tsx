
import { useLocation } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { Phone, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileCTABar() {
  const location = useLocation();
  
  // Hide on certain pages
  const hiddenPaths = ['/contact', '/preturi-rmn'];
  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden mobile-cta-bar">
      <div className="flex p-4 space-x-3">
        <GradientButton asChild className="flex-1">
          <a href="tel:+40256404500" className="flex items-center justify-center gap-2">
            <div className="bg-burgundy-dark rounded-full p-1">
              <Phone className="h-3 w-3 text-burgundy-dark-foreground" />
            </div>
            Programează-te
          </a>
        </GradientButton>
        
        <GradientButton asChild variant="variant" className="flex-1">
          <Link to="/preturi-rmn" className="flex items-center justify-center gap-2">
            <div className="bg-burgundy-dark rounded-full p-1">
              <DollarSign className="h-3 w-3 text-burgundy-dark-foreground" />
            </div>
            Prețuri
          </Link>
        </GradientButton>
      </div>
    </div>
  );
}
