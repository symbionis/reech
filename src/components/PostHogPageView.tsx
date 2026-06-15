import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePostHog } from "posthog-js/react";

/**
 * Captures a `$pageview` on every client-side route change. Pageview capture is
 * disabled in the PostHog config so this component is the single source of truth
 * for SPA navigation (otherwise the initial load and history changes can double-count).
 */
export function PostHogPageView() {
  const location = useLocation();
  const posthog = usePostHog();

  useEffect(() => {
    if (!posthog) return;
    posthog.capture("$pageview", {
      $current_url: window.location.href,
    });
  }, [location.pathname, location.search, posthog]);

  return null;
}
