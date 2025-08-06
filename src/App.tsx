import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import RMNCerebralPage from "./pages/services/RMNCerebralPage";
import RMNColoanaPage from "./pages/services/RMNColoanaPage";
import RMNArticulatiiPage from "./pages/services/RMNArticulatiiPage";
import RMNAbdominalPage from "./pages/services/RMNAbdominalPage";
import RMNPelvinPage from "./pages/services/RMNPelvinPage";
import RMNUmarPage from "./pages/services/RMNUmarPage";
import RMNTimisoaraPage from "./pages/services/RMNTimisoaraPage";
import RMNPrinCASPage from "./pages/RMNPrinCASPage";
import PreturiRMNPage from "./pages/PreturiRMNPage";
import ContactPage from "./pages/ContactPage";
import TermeniPage from "./pages/legal/TermeniPage";
import CookiesPage from "./pages/legal/CookiesPage";
import GDPRPage from "./pages/legal/GDPRPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="servicii" element={<ServicesPage />} />
            <Route path="servicii/rmn-cerebral" element={<RMNCerebralPage />} />
            <Route path="servicii/rmn-coloana" element={<RMNColoanaPage />} />
            <Route path="servicii/rmn-articulatii" element={<RMNArticulatiiPage />} />
            <Route path="servicii/rmn-abdominal" element={<RMNAbdominalPage />} />
            <Route path="servicii/rmn-pelvin" element={<RMNPelvinPage />} />
            <Route path="servicii/rmn-umar" element={<RMNUmarPage />} />
            <Route path="servicii/rmn-timisoara-medlife" element={<RMNTimisoaraPage />} />
            <Route path="rmn-prin-cas" element={<RMNPrinCASPage />} />
            <Route path="preturi-rmn" element={<PreturiRMNPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="legal/termeni-si-conditii" element={<TermeniPage />} />
            <Route path="legal/politica-cookies" element={<CookiesPage />} />
            <Route path="legal/gdpr" element={<GDPRPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
