import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, TrendingUp, AlertTriangle, Eye } from "lucide-react";

export default function RiskReturns() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-light section-spacing">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Risk & Returns
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Exploring institutional returns aligned with verified impact through comprehensive 
              risk management and transparent performance tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Performance Targets */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Target Returns & Risk Profile
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard value="7-10%" label="Target IRR" sublabel="Unlevered annual return" />
            <StatCard value="20+" label="Projects" sublabel="Diversified portfolio" />
            <StatCard value="5-10 yrs" label="Horizon" sublabel="Investment timeline" />
            <StatCard value="Institutional" label="Risk Profile" sublabel="Credit quality" />
          </div>

          <div className="bg-card rounded-lg p-8 border border-border/50">
            <h3 className="font-display font-semibold text-xl text-foreground mb-6">
              Proposed Return Sources
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Debt Coupons</h4>
                <p className="text-sm text-muted-foreground">4-7% on secured positions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Equity Appreciation</h4>
                <p className="text-sm text-muted-foreground">Capital gains on equity</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Dividends</h4>
                <p className="text-sm text-muted-foreground">From operational projects</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Impact Premium</h4>
                <p className="text-sm text-muted-foreground">CEU accrual in NAV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars of Risk Management */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Proposed Risk Management Framework
            </h2>
          </div>

          <div className="space-y-8">
            <RiskPillar
              icon={<CheckCircle className="w-6 h-6" />}
              number="1"
              title="Project Due Diligence"
              items={[
                "Gate-3 pre-approval ensures financial and technical feasibility",
                "Full due diligence covering technical, financial, regulatory, operational aspects",
                "Sensitivity analysis on returns under multiple scenarios",
                "Conservative impact forecasting",
              ]}
            />
            <RiskPillar
              icon={<AlertTriangle className="w-6 h-6" />}
              number="2"
              title="Risk Assessment & Quantification"
              items={[
                "Credit risk assessment (counterparty creditworthiness)",
                "Operational risk evaluation (technology maturity, supply chain)",
                "Market risk analysis (demand, pricing, commodity exposure)",
                "Execution risk assessment (timeline, cost overruns)",
                "Climate/environmental risk analysis (weather, regulatory shifts)",
              ]}
            />
            <RiskPillar
              icon={<Eye className="w-6 h-6" />}
              number="3"
              title="Integrated Monitoring"
              items={[
                "Real-time performance tracking via automated systems",
                "Quarterly performance reports from project operators",
                "Automated alerts for performance deviations",
                "Milestone verification before capital tranches released",
                "Transparent performance ledger",
              ]}
            />
            <RiskPillar
              icon={<Shield className="w-6 h-6" />}
              number="4"
              title="Insurance Integration"
              items={[
                "Delivery risk insurance (covers non-delivery or underperformance)",
                "Performance guarantees (covers operational underperformance)",
                "Credit enhancement (covers counterparty default)",
                "Permanence/reversal insurance (for nature-based solutions)",
              ]}
            />
            <RiskPillar
              icon={<TrendingUp className="w-6 h-6" />}
              number="5"
              title="Portfolio Management"
              items={[
                "Diversification across sectors (renewable, logistics, NbS)",
                "Diversification across geographies (multiple European regions)",
                "Diversification across project stages",
                "Diversification across instruments (debt, preferred equity, equity)",
                "Sector-specific risk controls",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Impact Verification */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Verified, Auditable Climate Outcomes
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Impact credibility is as important as financial credibility. We're exploring 
                multiple layers of impact verification.
              </p>
            </div>

            <div className="space-y-6">
              <VerificationStep
                title="Baseline Measurement"
                description="Pre-project baseline established using standardized methodologies for each pillar."
              />
              <VerificationStep
                title="Continuous Monitoring"
                description="Real-time, automated data collection from project systems (sensors, IoT, SCADA)."
              />
              <VerificationStep
                title="Third-Party Validation"
                description="Annual independent verification by accredited validators (ISO 14064, Verra standards)."
              />
              <VerificationStep
                title="Auditable Impact Ledger"
                description="All CEUs recorded in transparent ledger with investor access."
              />
              <VerificationStep
                title="Impact Reporting"
                description="Quarterly reports including total CEUs issued, quality status, and auditor sign-off."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capital Protection */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Proposed Capital Protection Mechanisms
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProtectionCard
              title="Secured Debt Positions"
              description="Project assets, cash flow pledges, subordination of other debt"
            />
            <ProtectionCard
              title="Preferred Equity Rights"
              description="Priority distribution, downside protection, board representation"
            />
            <ProtectionCard
              title="Insurance Backstops"
              description="Delivery, performance, credit, and environmental risk coverage"
            />
            <ProtectionCard
              title="Diversification"
              description="20+ projects minimize single-project failure impact"
            />
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="py-12 bg-background border-t border-border/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Important:</strong> All investments carry risk. 
              Past performance is not indicative of future results. Climate impact outcomes are 
              subject to market, regulatory, and execution risks. This is exploratory information 
              only. Reech Fund is not yet established or authorized. No investment decisions should 
              be made based on this website. Investors may lose some or all of their investment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Want to Understand Our Risk Framework?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Reach out to discuss how we approach institutional-grade risk management.
          </p>
          <Button asChild variant="hero-outline">
            <Link to="/contact">
              Request Information
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function StatCard({ value, label, sublabel }: { value: string; label: string; sublabel: string }) {
  return (
    <div className="bg-card rounded-lg p-6 text-center border border-border/30">
      <p className="text-3xl font-display font-bold text-primary mb-1">{value}</p>
      <p className="font-semibold text-foreground">{label}</p>
      <p className="text-sm text-muted-foreground">{sublabel}</p>
    </div>
  );
}

function RiskPillar({ icon, number, title, items }: { icon: React.ReactNode; number: string; title: string; items: string[] }) {
  return (
    <div className="bg-background rounded-lg p-8 border border-border/30">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
          <span className="font-display font-bold text-lg">{number}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            {icon}
          </div>
          <h3 className="font-display font-semibold text-xl text-foreground">{title}</h3>
        </div>
      </div>
      <ul className="grid md:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function VerificationStep({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}

function ProtectionCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-background rounded-lg p-6 border border-border/30">
      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
        <Shield className="w-5 h-5" />
      </div>
      <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
