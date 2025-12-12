import { Link } from "react-router-dom";
const footerLinks = {
  fund: [{
    name: "About the Fund",
    href: "/about"
  }, {
    name: "Investment Strategy",
    href: "/strategy"
  }, {
    name: "CPU Mechanism",
    href: "/cpu-mechanism"
  }, {
    name: "Risk & Returns",
    href: "/risk-returns"
  }, {
    name: "Fund Details",
    href: "/fund-details"
  }],
  legal: [{
    name: "Request Information",
    href: "/contact"
  }, {
    name: "Privacy Policy",
    href: "/privacy"
  }, {
    name: "Legal Disclaimer",
    href: "/legal"
  }]
};
export function Footer() {
  return <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-12 md:py-16">
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
              Exploring climate impact investing with institutional discipline. 
              An informational exploration of digital fund concepts for climate abatement.
            </p>
          </div>

          {/* Fund Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-primary-foreground/90">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.fund.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-primary-foreground/90">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-8">
          <div className="max-w-4xl">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Disclaimer
            </h4>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              This website is provided for informational purposes only to explore and discuss 
              climate investment concepts. It does not constitute an offer or invitation to invest, 
              financial, legal, or investment advice, or a prospectus or fund document.
            </p>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Reech Fund is not yet established or authorized. No investment decisions should be 
              made based on this website. By using this site, you acknowledge that you have read 
              and understood this disclaimer.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Reech Fund. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs">
              Exploratory information only. Not an investment offering.
            </p>
          </div>
        </div>
      </div>
    </footer>;
}