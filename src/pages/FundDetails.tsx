import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Calendar, Briefcase, Users, Globe, Scale } from "lucide-react";
export default function FundDetails() {
  return <>
      {/* Hero */}
      <section className="bg-cream-light section-spacing">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Fund Details
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Institutional specifications, governance structure, and investment terms 
              for Reech Fund.
            </p>
          </div>
        </div>
      </section>

      {/* Fund Structure */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Luxembourg RAIF, AIFMD-Compliant
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Reech Fund operates as a Reserved Alternative Investment Fund under 
                Luxembourg law with full AIFMD compliance.
              </p>
            </div>

            <div className="space-y-6">
              <DetailRow label="Vehicle" value="Reserved Alternative Investment Fund (RAIF)" />
              <DetailRow label="Domicile" value="Luxembourg" />
              <DetailRow label="Regulation" value="AIFMD (Alternative Investment Fund Managers Directive)" />
              <DetailRow label="Status" value="EU passporting rights for professional investors across EEA" />
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Governance Model
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GovernanceCard icon={<Users className="w-6 h-6" />} title="Fund Manager" description="Professional investment manager with fiduciary responsibility for fund strategy and investor capital." />
            <GovernanceCard icon={<Scale className="w-6 h-6" />} title="Independent Board" description="Oversight of fund governance, compliance, and strategic alignment." />
            <GovernanceCard icon={<Building className="w-6 h-6" />} title="AIFM" description="Regulated entity ensuring AIFMD compliance, risk management, and regulatory oversight." />
            <GovernanceCard icon={<Building className="w-6 h-6" />} title="Custodian" description="Institutional-grade custody of fund assets with dual fiat and digital safeguards." />
            <GovernanceCard icon={<Briefcase className="w-6 h-6" />} title="Administrator" description="NAV calculation, fund accounting, and investor reporting." />
            <GovernanceCard icon={<Scale className="w-6 h-6" />} title="Auditor" description="Annual independent audit of financial and impact metrics." />
          </div>
        </div>
      </section>

      {/* Fund Sizing */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Fund Scale & Launch Timeline
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatCard value="€100mm" label="Total Target" />
              <StatCard value="€50mm" label="First Close" />
              <StatCard value="Q3 2026" label="Launch" />
              <StatCard value="€5mm" label="Minimum" />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-display font-semibold text-xl text-foreground mb-8 text-center">
              Timeline
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <TimelineCard period="Q1-Q2 2026" title="Legal & Governance Setup" description="Final legal structure finalization, governance setup, anchor investor commitments" />
              <TimelineCard period="Q3 2026" title="First Close & Launch" description="€50mm first close target, fund launch, initial capital deployment begins" />
              <TimelineCard period="Q4 2026+" title="Ongoing Operations" description="Capital deployment, project sourcing, investor reporting, performance monitoring" />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Project Eligibility Framework
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border/30">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                Investment Parameters
              </h3>
              <div className="space-y-4">
                <DetailRow label="Ticket Size" value="€5-20mm per initiative" />
                <DetailRow label="Project Stage" value="Development to early operational" />
                <DetailRow label="Geography" value="Europe (initially)" />
                <DetailRow label="Horizon" value="5-10 years" />
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border/30">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                Sectors & Instruments
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Sectors</p>
                  <p className="text-foreground">Renewable Energy, ESCO, Logistics, Circular Materials, Nature-based Solutions</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Instruments</p>
                  <p className="text-foreground">Senior secured debt (4-7%), Preferred equity (6-8%), Direct equity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Profile */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Fund Terms & Investor Qualifications
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Designed for professional and institutional investors under AIFMD.
              </p>
              
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                Qualified Investors
              </h3>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Professional investors under AIFMD</li>
                <li>• Institutional asset managers and allocators</li>
                <li>• Family offices with impact mandates</li>
                <li>• Pension funds and endowments</li>
                <li>• Insurance companies</li>
                <li>• Corporate treasuries</li>
              </ul>

              <p className="text-foreground font-semibold">
                Minimum Investment: €5mm
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border/30">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">Fees</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Management Fee</span>
                    <span className="font-semibold text-foreground">1.5%-2.0% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Performance Fee</span>
                    <span className="font-semibold text-foreground">20% above hurdle</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border/30">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">Reporting</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quarterly</span>
                    <span className="text-foreground text-sm">NAV, performance updates</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual</span>
                    <span className="text-foreground text-sm">Audited financials, impact report</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border/30">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">Liquidity</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Open-ended with periodic redemption windows</li>
                  <li>• 1-year initial lock-up period</li>
                  <li>• Secondary market trading of CPUs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digitalization */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Digital Fund Shares & Trading Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fund shares are digitized as Climate Performance Units (CPUs), recognized 
                as Real World Assets under AIFMD regulation.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>CPUs issued and tracked on blockchain infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Smart contracts automate distributions and capital releases</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>24/7 trading on AIF-compliant secondary markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Dual custody arrangement (fiat + digital)</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border/30">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                Custody Arrangement
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Fiat Custody</h4>
                  <p className="text-sm text-muted-foreground">Traditional bank custodian holds cash and traditional securities</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Digital Custody</h4>
                  <p className="text-sm text-muted-foreground">Institutional-grade digital custodian holds CEUs, stable coins and smart contract private keys</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dual Control</h4>
                  <p className="text-sm text-muted-foreground">No custodian has unilateral control; requires multi-signature authorization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Regulatory Alignment & Compliance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ComplianceCard title="AIFMD" description="Full EU Alternative Investment Fund Managers Directive compliance" />
            <ComplianceCard title="SFDR" description="Sustainable Finance Disclosure Regulation (Article 8 or 9)" />
            <ComplianceCard title="Impact Standards" description="ISO 14064, Verra, Gold Standard alignment" />
            <ComplianceCard title="KYC/AML" description="Mandatory Know Your Customer and Anti-Money Laundering" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Contact us to discuss investment in Reech Fund and receive investor materials.
          </p>
          <Button asChild variant="hero-outline">
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>;
}
function DetailRow({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return <div className="flex justify-between items-start py-3 border-b border-border/30">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-medium text-right max-w-[60%]">{value}</span>
    </div>;
}
function StatCard({
  value,
  label
}: {
  value: string;
  label: string;
}) {
  return <div className="bg-card rounded-lg p-6 text-center border border-border/30">
      <p className="text-2xl font-display font-bold text-primary mb-1">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>;
}
function GovernanceCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return <div className="bg-background rounded-lg p-6 border border-border/30">
      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>;
}
function TimelineCard({
  period,
  title,
  description
}: {
  period: string;
  title: string;
  description: string;
}) {
  return <div className="text-center">
      <div className="inline-flex items-center px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
        {period}
      </div>
      <h4 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>;
}
function ComplianceCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return <div className="bg-card rounded-lg p-6 text-center border border-border/30">
      <h3 className="font-display font-semibold text-lg text-primary mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>;
}