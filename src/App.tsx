import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import TreatmentFundPage from "./pages/TreatmentFundPage";
import TMSTreatmentPage from "./pages/services/TMSTreatmentPage";
import DepressionTreatmentPage from "./pages/services/DepressionTreatmentPage";
import MentalHealthConsultingPage from "./pages/services/MentalHealthConsultingPage";
import KetamineTherapyPage from "./pages/services/KetamineTherapyPage";
import DigitalMarketingPage from "./pages/services/DigitalMarketingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/tms-treatment" element={<TMSTreatmentPage />} />
          <Route path="/services/depression-treatment" element={<DepressionTreatmentPage />} />
          <Route path="/services/mental-health-consulting" element={<MentalHealthConsultingPage />} />
          <Route path="/services/ketamine-therapy" element={<KetamineTherapyPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/treatment-fund" element={<TreatmentFundPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;export default App;