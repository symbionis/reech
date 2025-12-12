import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building, Scale, Globe } from "lucide-react";
export default function About() {
  return <>
      {/* Hero */}
      <section className="bg-cream-light section-spacing">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">About the Fund</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Reech Fund bridges a critical capital gap in global decarbonization, delivering institutional returns aligned with verified climate outcomes.</p>
          </div>
        </div>
      </section>

      {/* Why Reech Fund Exists */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Why Reech Fund Exists</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Large-scale corporate climate abatement projects—factory retooling, renewable energy deployment, 
                  supply chain transformation, biodiversity restoration—face a critical capital constraint.
                </p>
                <p>
                  They're too large for traditional corporate budgets, too specialized for standard impact funds, 
                  and require institutional-grade governance that most climate finance lacks.
                </p>
                <p>
                  We're exploring whether Reech Fund could serve institutional capital seeking verified climate 
                  impact tied directly to measurable outcomes, institutional-grade financial returns, and 
                  transparent, auditable project performance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatCard value="€100mm" label="Target Fund Size" />
              <StatCard value="7-10%" label="Target IRR" />
              <StatCard value="20+" label="Diversified Projects" />
              <StatCard value="TBD" label="Timeline" />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Climate Performance as a Financial Asset
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Reech Fund operates on a fundamental insight: climate impact should not be separate from financial returns. It should be embedded in them.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-8 border border-border/30">
              <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                Financial Ledger
              </h3>
              <p className="text-muted-foreground mb-4">
                Secured debt, preferred equity, or equity positions potentially delivering 7-10% unlevered 
                annual returns through coupons, dividends, and appreciation.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border/30">
              <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                Impact Ledger
              </h3>
              <p className="text-muted-foreground mb-4">
                Climate Emissions Units (CEUs) representing verified, quantified climate outcomes 
                potentially embedded directly in fund valuation.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="cta">
              <Link to="/cpu-mechanism">
                Explore the CPU Concept
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Investor Profile */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Who This Is Designed For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed for professional and institutional investors seeking diversified exposure 
              to large-scale climate abatement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InvestorCard icon={<Users className="w-6 h-6" />} title="Family Offices" description="Impact mandates with institutional discipline" />
            <InvestorCard icon={<Building className="w-6 h-6" />} title="Pension Funds" description="ESG-focused with long-term horizon" />
            <InvestorCard icon={<Scale className="w-6 h-6" />} title="Insurance Companies" description="Sustainability commitments aligned" />
            <InvestorCard icon={<Globe className="w-6 h-6" />} title="Corporate Treasuries" description="Climate-linked investment strategies" />
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Proposed minimum subscription: <span className="font-semibold text-foreground">€5mm</span>
            </p>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Independent Management, Fiduciary Oversight</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">Reech Fund operates as an independent, professionally managed investment vehicle under Luxembourg RAIF regulation.</p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span><strong className="text-foreground">Independent Management:</strong> Professional fund manager with fiduciary responsibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span><strong className="text-foreground">AIFMD Compliance:</strong> EU regulated with institutional-grade governance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span><strong className="text-foreground">EU Passporting:</strong> Accessible to professional investors across the EEA</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span><strong className="text-foreground">Dual Custody:</strong> Institutional-grade custody with fiat and digital safeguards</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border/30">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                Proposed Timeline
              </h3>
              <div className="space-y-6">
                <TimelineItem period="Current" title="Exploration & Interest Gathering" description="Understanding market interest and refining the concept" />
                <TimelineItem period="Q1-Q2 2026" title="Legal & Governance Setup" description="Final legal structure and anchor investor commitments" />
                <TimelineItem period="Q3 2026" title="First Close" description="€50mm target with fund launch" />
                <TimelineItem period="Q4 2026+" title="Capital Deployment" description="Ongoing fund management and investor reporting" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Have Questions or Want to Learn More?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Contact us to discuss this concept and share your thoughts.
          </p>
          <Button asChild variant="hero-outline">
            <Link to="/contact">
              Request Information
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>;
}
function StatCard({
  value,
  label
}: {
  value: string;
  label: string;
}) {
  return <div className="bg-card rounded-lg p-6 text-center border border-border/30">
      <p className="text-3xl font-display font-bold text-primary mb-2">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>;
}
function InvestorCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return <div className="bg-card rounded-lg p-6 text-center border border-border/30">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 text-primary">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>;
}
function TimelineItem({
  period,
  title,
  description
}: {
  period: string;
  title: string;
  description: string;
}) {
  return <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-primary rounded-full" />
        <div className="w-0.5 h-full bg-border" />
      </div>
      <div className="pb-6">
        <p className="text-sm font-medium text-primary mb-1">{period}</p>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>;
}