"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

type Turnstile = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

// Cloudflare Turnstile adds a hidden `cf-turnstile-response` input inside the container, so the token is submitted with the form.
export function TurnstileWidget({ siteKey, resetSignal }: { siteKey: string; resetSignal: unknown }) {
  const container = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  function renderWidget() {
    if (!container.current || !window.turnstile || widgetId.current) {
      return;
    }

    widgetId.current = window.turnstile.render(container.current, {
      language: "sk",
      sitekey: siteKey,
      size: "flexible",
      theme: "light",
    });
  }

  useEffect(() => {
    return () => {
      if (widgetId.current) {
        window.turnstile?.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, []);

  // A token is valid for one submission only, so every answer from the server asks for a fresh one.
  useEffect(() => {
    if (widgetId.current) {
      window.turnstile?.reset(widgetId.current);
    }
  }, [resetSignal]);

  return (
    <>
      <Script
        onReady={renderWidget}
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
      />
      <div className="min-h-[65px]" ref={container} />
    </>
  );
}
