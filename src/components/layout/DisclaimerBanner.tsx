import { Info } from "lucide-react";

export function DisclaimerBanner() {
  return (
    <div className="bg-muted border-b border-border/50">
      <div className="section-container py-2">
        <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
          <Info className="w-4 h-4 flex-shrink-0 text-primary" />
          <span>
            This site provides exploratory information about a potential climate investment fund. 
            Reech Fund is not yet established or authorized. See disclaimer below.
          </span>
        </p>
      </div>
    </div>
  );
}
