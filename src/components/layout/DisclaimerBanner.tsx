import { Info } from "lucide-react";

export function DisclaimerBanner() {
  return (
    <div className="bg-primary/10 border-b border-primary/20">
      <div className="section-container py-3">
        <p className="text-sm text-foreground flex items-center gap-2">
          <Info className="w-4 h-4 flex-shrink-0 text-primary" />
          <span>
            <strong>Important:</strong> This site provides exploratory information about a potential climate investment fund. 
            Reech Fund is not yet established or authorized. See disclaimer below.
          </span>
        </p>
      </div>
    </div>
  );
}
