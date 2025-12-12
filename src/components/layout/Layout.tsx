import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DisclaimerBanner } from "./DisclaimerBanner";
import { EntryDisclaimerModal } from "./EntryDisclaimerModal";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <EntryDisclaimerModal />
      <div className="fixed top-0 left-0 right-0 z-50 bg-background">
        <DisclaimerBanner />
        <Header />
      </div>
      <main className="flex-1 pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}
