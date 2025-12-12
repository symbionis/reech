import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Strategy", href: "/strategy" },
  { name: "CPU Mechanism", href: "/cpu-mechanism" },
  { name: "Risk & Returns", href: "/risk-returns" },
  { name: "Fund Details", href: "/fund-details" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50">
      <nav className="section-container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-xl">R</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">Reech Fund</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                location.pathname === item.href
                  ? "text-primary bg-primary/5"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button asChild variant="default" size="sm">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 -m-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border/50 animate-fade-in">
          <div className="section-container py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-md transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild variant="default" className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
