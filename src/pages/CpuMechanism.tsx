import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, CheckCircle, FileCheck, Lock, Users } from "lucide-react";

export default function CpuMechanism() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-light section-spacing">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              The CPU Mechanism
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              How Climate Impact Becomes Investable — Climate Performance Units embed both 
              financial returns and verified climate outcomes into a single, auditable asset.
            </p>
          </div>
        </div>
      </section>

      {/* What is a CPU */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                What is a Climate Performance Unit?
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  A Climate Performance Unit (CPU) is a digitized fund share representing fractional 
                  ownership of Reech Fund's portfolio of climate abatement projects.
                </p>
                <p>
                  But CPUs are not just tokenized shares. They embed a unique financial mechanism: 
                  CPUs are valued not only by project cash flows, but by verified climate outcomes.
                </p>
                <p>
                  This dual-value approach transforms climate impact from an ESG metric into a 
                  material driver of investor returns.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border/50">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6 text-center">
                CPU Value Equation
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-md border border-border/30">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Project Cash Flows</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Debt coupons (4-7%), equity appreciation, dividends</p>
                </div>
                <div className="text-center text-2xl font-bold text-primary">+</div>
                <div className="p-4 bg-background rounded-md border border-border/30">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">CEU Value</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Verified tons CO₂ reduced, embedded in NAV</p>
                </div>
                <div className="text-center text-2xl font-bold text-primary">=</div>
                <div className="p-4 bg-primary/10 rounded-md border-2 border-primary/30">
                  <p className="font-semibold text-primary text-center text-lg">Total CPU Value</p>
                  <p className="text-sm text-muted-foreground text-center">7-10% target IRR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Ledger */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              The Dual Ledger
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Financial returns and climate impact, inseparable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-lg p-8 border border-border/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground">Financial Ledger</h3>
              </div>
              <div className="bg-cream-light rounded-md p-4 font-mono text-sm space-y-2 text-muted-foreground">
                <p>Project: Solar Farm (€10mm investment)</p>
                <p>├─ Year 1 Revenue: €700,000</p>
                <p>├─ Operating Costs: €200,000</p>
                <p>├─ Net Cash Flow: €500,000</p>
                <p>├─ Debt Coupon: €400,000</p>
                <p className="text-primary font-semibold">└─ Financial Return: 4% Year 1</p>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground">Impact Ledger</h3>
              </div>
              <div className="bg-cream-light rounded-md p-4 font-mono text-sm space-y-2 text-muted-foreground">
                <p>Project: Solar Farm</p>
                <p>├─ Year 1 Generation: 12,500 MWh</p>
                <p>├─ Baseline (fossil): 18,750 MWh</p>
                <p>├─ CO₂ Avoided: 12,500 tCO₂e</p>
                <p>├─ CEU Issued: 12,500 CEUs</p>
                <p className="text-primary font-semibold">└─ Climate Value: €156,250</p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-primary/5 rounded-lg p-6 border-2 border-primary/20 text-center">
              <p className="text-lg font-semibold text-foreground mb-2">Combined CPU Return</p>
              <p className="text-muted-foreground">
                Financial: €400,000 + Climate: €156,250 = <span className="text-primary font-bold">€556,250 (5.6%)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEC vs CEU */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              CEC vs CEU: The Two Units of Climate Value
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg p-8 border border-border/50">
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                Forward-Looking
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Climate Emissions Commitment (CEC)
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">What:</strong> The commitment to reduce climate impact</li>
                <li><strong className="text-foreground">When:</strong> Issued at project sourcing</li>
                <li><strong className="text-foreground">Example:</strong> "This project will avoid 50,000 tons CO₂"</li>
                <li><strong className="text-foreground">Purpose:</strong> Underwriting & impact quantification</li>
                <li><strong className="text-foreground">Auditor:</strong> Internal (fund due diligence)</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border/50">
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                Verified Outcome
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Climate Emissions Unit (CEU)
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">What:</strong> The verified reduction of climate impact</li>
                <li><strong className="text-foreground">When:</strong> Issued annually after validation</li>
                <li><strong className="text-foreground">Example:</strong> "This project delivered 2,500 tons CO₂ reduction"</li>
                <li><strong className="text-foreground">Purpose:</strong> NAV calculation, investor returns</li>
                <li><strong className="text-foreground">Auditor:</strong> Independent (third-party validation)</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-cream-light rounded-lg p-8 text-center">
              <h4 className="font-display font-semibold text-lg text-foreground mb-3">Why Both Matter</h4>
              <p className="text-muted-foreground">
                <strong className="text-foreground">CECs</strong> provide credibility at investment selection. 
                <strong className="text-foreground"> CEUs</strong> provide accountability during execution. 
                Together, they ensure climate promises become climate outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              From Commitment to Verified Impact
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <ProcessStep
                number="1"
                title="Sourcing & Commitment"
                description="Project sourced from corporate sustainability initiative. CEC issued quantifying expected climate benefit."
              />
              <ProcessStep
                number="2"
                title="Capital Deployment"
                description="Fund invests through debt, preferred equity, or equity. Project executes toward commercial operation."
              />
              <ProcessStep
                number="3"
                title="Continuous Monitoring"
                description="Integrated real-time systems track project performance. Automated alerts for deviations."
              />
              <ProcessStep
                number="4"
                title="Annual Validation"
                description="Independent third-party verifies monitoring data. Climate outcomes calculated using standardized methodologies."
              />
              <ProcessStep
                number="5"
                title="CEU Issuance"
                description="CEUs issued and recorded in auditable ledger. Fund NAV updated to reflect verified climate value."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Auditable Ledger */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Transparent, Auditable, Blockchain-Verified
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every CEC and CEU is recorded in an auditable, blockchain-verified ledger 
                accessible to investors and auditors.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  No retroactive data changes
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Independent verification recorded permanently
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Investor can trace CEU provenance
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Regulators and auditors can verify authenticity
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border/50">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                Ledger Records Include
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex justify-between py-2 border-b border-border/30">
                  <span>Project identifier</span>
                  <span className="font-mono text-foreground">RF-2026-001</span>
                </li>
                <li className="flex justify-between py-2 border-b border-border/30">
                  <span>CEC issued</span>
                  <span className="font-mono text-foreground">50,000 tCO₂e</span>
                </li>
                <li className="flex justify-between py-2 border-b border-border/30">
                  <span>Monitoring data</span>
                  <span className="font-mono text-foreground">Verified</span>
                </li>
                <li className="flex justify-between py-2 border-b border-border/30">
                  <span>Baseline measurement</span>
                  <span className="font-mono text-foreground">Established</span>
                </li>
                <li className="flex justify-between py-2 border-b border-border/30">
                  <span>CEU calculation</span>
                  <span className="font-mono text-foreground">12,500 tCO₂e</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>Validator signature</span>
                  <span className="font-mono text-foreground">0x7f3a...</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Benefits */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Why This Matters for Investors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Users className="w-6 h-6" />}
              title="Aligned Incentives"
              description="Financial performance and climate performance are the same goal. No conflict between returns and impact."
            />
            <BenefitCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Dual-Source Returns"
              description="Returns flow from project cash flows AND climate outcome verification—diversification of return sources."
            />
            <BenefitCard
              icon={<FileCheck className="w-6 h-6" />}
              title="Transparent Accountability"
              description="Climate impact is quantified, verified, auditable, material to returns, and investor-accessible."
            />
            <BenefitCard
              icon={<Lock className="w-6 h-6" />}
              title="Regulatory Credibility"
              description="AIFMD compliance, SFDR standards, ISO 14064 methodology, third-party audit standards."
            />
            <BenefitCard
              icon={<ArrowRight className="w-6 h-6" />}
              title="Market Optionality"
              description="CPUs are tradeable on secondary markets. 24/7 trading capability on compliant platforms."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to Invest in Verified Climate Impact?
          </h2>
          <Button asChild variant="hero-outline">
            <Link to="/contact">
              Contact Us to Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-primary-foreground font-display font-bold text-lg">{number}</span>
      </div>
      <div className="bg-background rounded-lg p-6 flex-1 border border-border/30">
        <h3 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-background rounded-lg p-6 border border-border/30">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
