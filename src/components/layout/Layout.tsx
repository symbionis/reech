import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DisclaimerBanner } from "./DisclaimerBanner";
import { ComplianceDisclaimer } from "./ComplianceDisclaimer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerBanner />
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <ComplianceDisclaimer />
      <Footer />
    </div>
  );
}
