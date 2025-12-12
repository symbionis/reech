import { Link } from "react-router-dom";

const footerLinks = {
  fund: [
    { name: "About the Fund", href: "/about" },
    { name: "Investment Strategy", href: "/strategy" },
    { name: "CPU Mechanism", href: "/cpu-mechanism" },
    { name: "Risk & Returns", href: "/risk-returns" },
    { name: "Fund Details", href: "/fund-details" },
  ],
  legal: [
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Legal Disclaimer", href: "/legal" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">R</span>
              </div>
              <span className="font-display font-bold text-xl">Reech Fund</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Verified climate impact with institutional discipline. A digital fund financing
              large-scale corporate climate abatement initiatives.
            </p>
          </div>

          {/* Fund Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-primary-foreground/90">
              The Fund
            </h4>
            <ul className="space-y-3">
              {footerLinks.fund.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-primary-foreground/90">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Reech Fund. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-xs max-w-2xl text-center md:text-right">
              Reech Fund is a Reserved Alternative Investment Fund (RAIF) domiciled in Luxembourg.
              This website is for informational purposes only and does not constitute an offer to sell
              or a solicitation of an offer to buy any securities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
