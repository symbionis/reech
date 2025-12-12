import { AlertTriangle, Info, Check, X } from "lucide-react";

export function ComplianceDisclaimer() {
  return (
    <section className="bg-card border-t border-border/50">
      <div className="section-container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground">
              Important Notice — Informational Only
            </h3>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            This website provides exploratory and informational content about Reech Fund 
            and is intended to share ideas and test interest only.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* What this is NOT */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-destructive" />
                This is NOT:
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  A pre-marketing activity under AIFMD or EU regulations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  An offer, invitation, or solicitation to invest
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  A prospectus or offering document
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  Financial, legal, or investment advice
                </li>
              </ul>
            </div>

            {/* What this IS */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                What this IS:
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  General information about climate investment concepts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  An exploratory discussion of a potential fund structure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  An opportunity to request information and ask questions
                </li>
              </ul>
            </div>
          </div>

          {/* Important Disclaimers */}
          <div className="bg-background rounded-lg p-6 border border-border/30 mb-8">
            <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Important Disclaimers
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Reech Fund is not yet established or authorized as an investment fund
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                No AIFM or fund manager has been authorized or appointed
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                No investment terms, prospectus, or subscription documents exist
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                All information is subject to significant change
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                No investment decision should be made based on this website
              </li>
            </ul>
          </div>

          {/* Intended Audience */}
          <div className="text-sm text-muted-foreground">
            <p className="mb-4">
              <strong className="text-foreground">Intended Audience:</strong> This website is 
              intended for informational purposes only and is accessed by sophisticated, professional, 
              and institutional parties capable of forming their own judgment.
            </p>
            <p className="text-destructive/80 bg-destructive/5 p-4 rounded-md border border-destructive/20">
              <strong>Retail Investor Notice:</strong> If you are a retail investor, please do not 
              proceed. This content is not suitable for retail investment consideration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
