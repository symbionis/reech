import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Strategy from "@/pages/Strategy";
import CpuMechanism from "@/pages/CpuMechanism";
import RiskReturns from "@/pages/RiskReturns";
import FundDetails from "@/pages/FundDetails";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  useScrollToTop();
  return null;
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/strategy" element={<Strategy />} />
              <Route path="/cpu-mechanism" element={<CpuMechanism />} />
              <Route path="/risk-returns" element={<RiskReturns />} />
              <Route path="/fund-details" element={<FundDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
