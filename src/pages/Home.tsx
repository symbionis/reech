import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
import pillarRenewable from "@/assets/pillar-renewable.jpg";
import pillarLogistics from "@/assets/pillar-logistics.jpg";
import pillarNature from "@/assets/pillar-nature.jpg";
export default function Home() {
  return <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-start">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative section-container pt-16 md:pt-24 lg:pt-32 pb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in text-balance">Verified Climate Impact With Institutional Discipline</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed animate-fade-in animate-fade-in-delay-1">A digital fund financing large-scale corporate climate abatement initiatives with institutional returns and auditable impact outcomes.</p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-fade-in-delay-2">
              <Button asChild variant="hero">
                <Link to="/strategy">
                  Explore Our Approach
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline">
                <Link to="/cpu-mechanism">
                  The CPU Concept
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard icon={<CheckCircle className="w-8 h-8 text-primary" />} title="Verified Impact" description="Corporate gate-3 approved projects with integrated monitoring and auditable climate outcomes." />
            <ValueCard icon={<TrendingUp className="w-8 h-8 text-primary" />} title="Institutional Returns" description="Target 7-10% unlevered financial returns, diversified across three climate investment pillars." />
            <ValueCard icon={<Shield className="w-8 h-8 text-primary" />} title="Risk Management" description="Comprehensive due diligence, insurance integration, and portfolio-level safeguards." />
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
              The Investment Strategy
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Three complementary investment pillars financing climate abatement across the global economy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard image={pillarRenewable} title="Renewable Energy, Energy Transition, ESCO" description="Supply partnerships for renewable procurement, heat electrification, and energy services." href="/strategy#renewable" />
            <PillarCard image={pillarLogistics} title="Logistics, Circular Materials" description="Supply chain decarbonization and circular economy enabling technologies." href="/strategy#logistics" />
            <PillarCard image={pillarNature} title="Nature-based Solutions" description="Biodiversity restoration, carbon sequestration, and climate adaptation." href="/strategy#nature" />
          </div>
        </div>
      </section>

      {/* CPU Mechanism Preview */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                The CPU Concept
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Climate Performance Units (CPUs) represent an innovative approach to climate finance: 
                fund shares that could embed both financial returns and verified climate outcomes.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Unlike traditional funds that separate returns from impact reporting, CPUs aim to create 
                inseparable alignment between investor performance and climate outcomes.
              </p>
              <Button asChild variant="cta">
                <Link to="/cpu-mechanism">
                  Explore the CPU Concept
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-card rounded-lg p-8 border border-border/50">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                CPU Value Equation
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-background rounded-md">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Project Cash Flows</p>
                    <p className="text-sm text-muted-foreground">Debt coupons, equity appreciation</p>
                  </div>
                </div>
                <div className="flex items-center justify-center text-2xl font-bold text-primary">+</div>
                <div className="flex items-center gap-4 p-4 bg-background rounded-md">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">CEU Value</p>
                    <p className="text-sm text-muted-foreground">Verified climate impact units</p>
                  </div>
                </div>
                <div className="flex items-center justify-center text-2xl font-bold text-primary">=</div>
                <div className="p-4 bg-primary/5 rounded-md border-2 border-primary/20">
                  <p className="font-semibold text-primary text-center text-lg">
                    Total CPU Value
                  </p>
                  <p className="text-sm text-muted-foreground text-center">
                    Financial returns + Climate impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk & Returns Overview */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Risk-Adjusted Framework
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Institutional-grade returns with comprehensive risk management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border/30">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                Target Financial Performance
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-muted-foreground">Target IRR</span>
                  <span className="font-semibold text-primary">7-10% unlevered</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-muted-foreground">Risk Profile</span>
                  <span className="font-semibold">Institutional credit quality</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-muted-foreground">Investment Horizon</span>
                  <span className="font-semibold">5-10 years</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Diversification</span>
                  <span className="font-semibold">20+ projects</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border/30">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                Risk Management Approach
              </h3>
              <ul className="space-y-3">
                {["Project due diligence with gate-3 pre-approval", "Comprehensive risk assessment & quantification", "Real-time integrated monitoring", "Insurance integration & backstops", "Portfolio-level diversification controls"].map((item, i) => <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/risk-returns">
                Explore Risk & Returns Framework
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fund Details Snapshot */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Proposed Fund Structure
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">Structure</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Luxembourg RAIF</li>
                <li>AIFMD-compliant</li>
                <li>Independent governance</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">Target Sizing</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Target: €100mm</li>
                <li>First Close: €50mm</li>
                <li>Min Subscription: €5mm</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">Investment</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Tickets: €5-20mm</li>
                <li>Horizon: 5-10 years</li>
                <li>Instruments: Debt, equity</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/fund-details">
                View Full Fund Details
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Want to Stay Informed?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            We're gathering interest from institutional parties who want to understand more 
            about climate impact investing and the CPU concept.
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
function ValueCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return <div className="card-institutional text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-xl text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>;
}
function PillarCard({
  image,
  title,
  description,
  href
}: {
  image: string;
  title: string;
  description: string;
  href: string;
}) {
  return <Link to={href} className="pillar-card group">
      <img src={image} alt={title} className="pillar-card-image" />
      <div className="pillar-card-overlay" />
      <div className="pillar-card-content">
        <h3 className="font-display font-semibold text-xl mb-2">{title}</h3>
        <p className="text-primary-foreground/80 text-sm mb-4">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium">
          Explore <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>;
}