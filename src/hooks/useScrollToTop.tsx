import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Don't scroll to top if there's an anchor hash
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}
