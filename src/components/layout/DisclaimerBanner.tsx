import { Info } from "lucide-react";

export function DisclaimerBanner() {
  return (
    <div className="bg-cream-100 border-b border-cream-200">
      <div className="section-container py-2.5">
        <p className="text-sm text-charcoal-600 flex items-center gap-2">
          <Info className="w-4 h-4 flex-shrink-0 text-charcoal-400" />
          <span>
            <strong>Important:</strong> This site provides exploratory information about a potential climate investment fund. 
            Reech Fund is not yet established or authorized. See disclaimer below.
          </span>
        </p>
      </div>
    </div>
  );
}
