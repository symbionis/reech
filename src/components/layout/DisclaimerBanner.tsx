import { Info } from "lucide-react";

export function DisclaimerBanner() {
  return (
    <div className="bg-amber-50 border-b-2 border-amber-200">
      <div className="section-container py-3">
        <p className="text-sm text-amber-900 flex items-center gap-2">
          <Info className="w-4 h-4 flex-shrink-0 text-amber-600" />
          <span>
            <strong>Important:</strong> This site provides exploratory information about a potential climate investment fund. 
            Reech Fund is not yet established or authorized. See disclaimer below.
          </span>
        </p>
      </div>
    </div>
  );
}
