import { useState, useEffect } from "react";
import { AlertTriangle, Info, Check, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const STORAGE_KEY = "reechDisclaimerAccepted";
const EXPIRY_DAYS = 30;

function getStoredAcceptance(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return false;
    
    const { accepted, timestamp } = JSON.parse(stored);
    const expiryTime = EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    
    if (Date.now() - timestamp > expiryTime) {
      localStorage.removeItem(STORAGE_KEY);
      return false;
    }
    
    return accepted === true;
  } catch {
    return false;
  }
}

function storeAcceptance(): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ accepted: true, timestamp: Date.now() })
  );
}

export function EntryDisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const hasAccepted = getStoredAcceptance();
    setIsOpen(!hasAccepted);
  }, []);

  const handleConfirm = () => {
    if (isChecked) {
      storeAcceptance();
      setIsOpen(false);
    }
  };

  const handleLeave = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent 
        className="max-w-2xl max-h-[90vh] overflow-y-auto [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-primary" />
            </div>
            <DialogTitle className="font-display font-bold text-xl">
              Important Notice — Informational Only
            </DialogTitle>
          </div>
          <DialogDescription className="text-left">
            This website provides exploratory and informational content about Reech Fund 
            and is intended to share ideas and test interest only.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* What this is NOT */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
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
              <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
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
          <div className="bg-muted/50 rounded-lg p-4 border border-border/30">
            <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
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
            <p className="mb-3">
              <strong className="text-foreground">Intended Audience:</strong> This website is 
              intended for informational purposes only and is accessed by sophisticated, professional, 
              and institutional parties capable of forming their own judgment.
            </p>
            <p className="text-destructive/80 bg-destructive/5 p-3 rounded-md border border-destructive/20">
              <strong>Retail Investor Notice:</strong> If you are a retail investor, please do not 
              proceed. This content is not suitable for retail investment consideration.
            </p>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
            <Checkbox
              id="disclaimer-confirm"
              checked={isChecked}
              onCheckedChange={(checked) => setIsChecked(checked === true)}
              className="mt-0.5"
            />
            <label 
              htmlFor="disclaimer-confirm" 
              className="text-sm text-foreground cursor-pointer leading-relaxed"
            >
              I confirm that I am a professional or institutional party, that I understand this 
              site is informational only and does not constitute an offer or solicitation, and 
              that I wish to proceed.
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              onClick={handleConfirm}
              disabled={!isChecked}
              className="flex-1"
            >
              Confirm & Enter
            </Button>
            <Button
              variant="outline"
              onClick={handleLeave}
              className="flex-1"
            >
              Leave Site
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
