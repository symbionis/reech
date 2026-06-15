import React from "react";
import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import App from "./App.tsx";
import "./index.css";

const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
const posthogHost =
  import.meta.env.VITE_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    // Pageviews are captured manually on route change (see PostHogPageView).
    capture_pageview: false,
    capture_pageleave: true,
    person_profiles: "always",
  });
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createRoot(document.getElementById("root")!).render(
  posthogKey ? <PostHogProvider client={posthog}>{app}</PostHogProvider> : app
);
