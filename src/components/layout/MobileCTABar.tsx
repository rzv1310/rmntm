
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
            <Phone className="h-4 w-4" />
            Programează-te
          </a>
        </GradientButton>
        
        <GradientButton asChild variant="variant" className="flex-1">
          <Link to="/preturi-rmn" className="flex items-center justify-center gap-2">
            <DollarSign className="h-4 w-4" />
            Prețuri
          </Link>
        </GradientButton>
      </div>
    </div>
  );
}
