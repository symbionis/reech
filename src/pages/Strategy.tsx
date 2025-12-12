import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Truck, TreeDeciduous, CheckCircle } from "lucide-react";
import pillarRenewable from "@/assets/pillar-renewable.jpg";
import pillarLogistics from "@/assets/pillar-logistics.jpg";
import pillarNature from "@/assets/pillar-nature.jpg";
export default function Strategy() {
  return <>
      {/* Hero */}
      <section className="bg-cream-light section-spacing">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              The Investment Strategy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Three complementary investment pillars financing climate abatement across 
              the global economy, each targeting institutional returns with verified impact.
            </p>
          </div>
        </div>
      </section>

      {/* Pillar 1: Renewable Energy */}
      <section id="renewable" className="section-spacing bg-background scroll-mt-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sun className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Pillar 1</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Renewable Energy, Energy Transition, ESCO
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Supply partnerships for renewable electricity procurement, heat electrification, 
                and energy-as-a-service (EaaS) models. These investments would finance the large-scale 
                energy infrastructure transformation of corporate facilities and supply chains.
              </p>
              
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">Example Projects</h3>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  On-site solar PV installations on manufacturing facilities
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Industrial heat pump deployments replacing fossil fuel boilers
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Energy-as-a-service contracts with guaranteed savings
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Industrial efficiency and electrification retrofits
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-4">
                <MetricCard label="Ticket Size" value="€5-20mm" />
                <MetricCard label="Timeline" value="1.5-3 years" />
                <MetricCard label="Target Returns" value="7-10% IRR" />
                <MetricCard label="Instruments" value="Preferred equity, debt" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img src={pillarRenewable} alt="Solar panel installation on industrial facility" className="w-full h-80 lg:h-[500px] object-cover rounded-lg shadow-institutional-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Logistics */}
      <section id="logistics" className="section-spacing bg-cream-light scroll-mt-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img src={pillarLogistics} alt="Electric trucks at charging station" className="w-full h-80 lg:h-[500px] object-cover rounded-lg shadow-institutional-lg" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Pillar 2</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Logistics, Circular Materials
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Supply chain decarbonization and circular economy enabling technologies. 
                These investments would finance the transformation of corporate logistics and 
                material sourcing toward low-carbon, circular models.
              </p>
              
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">Example Projects</h3>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Fleet electrification (electric trucks, delivery vehicles)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Charging infrastructure deployment
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Waste-to-energy or waste-to-material facilities
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Recycled material processing and recovery
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-4">
                <MetricCard label="Ticket Size" value="€5-20mm" />
                <MetricCard label="Timeline" value="2-6 years" />
                <MetricCard label="Target Returns" value="7-10% IRR" />
                <MetricCard label="Instruments" value="Debt, equity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Nature-based */}
      <section id="nature" className="section-spacing bg-background scroll-mt-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <TreeDeciduous className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Pillar 3</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Nature-based Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Biodiversity restoration, carbon sequestration, and climate adaptation. 
                These investments would finance large-scale, long-duration nature-based projects 
                that deliver carbon removal, biodiversity gains, and resilience improvements.
              </p>
              
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">Example Projects</h3>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Reforestation and afforestation projects
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Regenerative agriculture and soil carbon sequestration
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Wetland and mangrove restoration
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Landscape-scale ecosystem restoration
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-4">
                <MetricCard label="Ticket Size" value="€5-20mm" />
                <MetricCard label="Timeline" value="15-30 years" />
                <MetricCard label="Target Returns" value="7-10% IRR" />
                <MetricCard label="Instruments" value="Debt, equity" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img src={pillarNature} alt="Forest restoration project" className="w-full h-80 lg:h-[500px] object-cover rounded-lg shadow-institutional-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Selection */}
      <section className="section-spacing bg-cream-light">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8 text-center">Project Selection Criteria</h2>
            
            <div className="space-y-6">
              <CriteriaCard number="1" title="Corporate Sourcing & Gate-3 Pre-Approval" description="Projects would be sourced from corporate sustainability initiatives that have passed internal gate-3 development approval—financially feasible, technically validated, and execution-ready." />
              <CriteriaCard number="2" title="Measurable, Quantified Impact" description="Every project must deliver clearly defined, quantifiable climate outcomes with baseline measurement, monitoring methodology, and independent verification pathway." />
              <CriteriaCard number="3" title="Institutional-Grade Financial Return" description="Projects must be structured for 7-10% unlevered financial returns with clear cash flow or asset appreciation pathway and institutional credit quality underwriting." />
              <CriteriaCard number="4" title="Risk Management & Insurance" description="Comprehensive risk assessment with insurance integration for delivery risk and performance guarantees, plus portfolio-level diversification." />
              <CriteriaCard number="5" title="Scalability & Standardization" description="Projects should be replicable across multiple geographies with standardized underwriting and monitoring, compatible with fund operating infrastructure." />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Interested in These Investment Areas?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Tell us which pillars interest you most and we'll follow up with more detailed information.
          </p>
          <Button asChild variant="hero-outline">
            <Link to="/contact">
              Share Your Interest
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>;
}
function MetricCard({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return <div className="bg-card rounded-md p-4 border border-border/30">
      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
      <p className="font-semibold text-foreground">{value}</p>
    </div>;
}
function CriteriaCard({
  number,
  title,
  description
}: {
  number: string;
  title: string;
  description: string;
}) {
  return <div className="bg-background rounded-lg p-6 border border-border/30 flex gap-6">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-primary-foreground font-display font-bold">{number}</span>
      </div>
      <div>
        <h3 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>;
}