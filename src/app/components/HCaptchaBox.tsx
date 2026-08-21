import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { HCAPTCHA_SITEKEY } from "../config";

// A dependency-free wrapper around hCaptcha's explicit-render API.
//
// We deliberately avoid the @hcaptcha/react-hcaptcha package: this project has
// a deliberately small dependency list, and the widget only needs ~40 lines of
// imperative glue. The script is fetched once per page load and shared by every
// instance (contact form, newsletter) via the module-level promise below.

declare global {
  interface Window {
    hcaptcha?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
  }
}

let loaderPromise: Promise<void> | null = null;

function loadHCaptcha(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.hcaptcha) return Promise.resolve();
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      // Allow a later attempt (e.g. a flaky network on first paint) to retry.
      loaderPromise = null;
      reject(new Error("hCaptcha script failed to load"));
    };
    document.head.appendChild(script);
  });

  return loaderPromise;
}

export type HCaptchaHandle = { reset: () => void };

type Props = {
  /** Fired with the token once the visitor passes the challenge. */
  onVerify: (token: string) => void;
  /** Fired when a previously issued token expires and is no longer valid. */
  onExpire?: () => void;
  /**
   * Fired when the widget errors *or* the script can't load at all. The forms
   * treat this as "captcha unavailable" and let the submission through rather
   * than trapping a real lead behind a broken third-party script.
   */
  onUnavailable?: () => void;
  className?: string;
};

export const HCaptchaBox = forwardRef<HCaptchaHandle, Props>(
  function HCaptchaBox({ onVerify, onExpire, onUnavailable, className }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);

    // Hold the latest callbacks in a ref so re-renders never force the widget
    // to be torn down and re-created (which would clear the visitor's token).
    const callbacks = useRef({ onVerify, onExpire, onUnavailable });
    callbacks.current = { onVerify, onExpire, onUnavailable };

    useImperativeHandle(
      ref,
      () => ({
        reset() {
          if (widgetIdRef.current !== null && window.hcaptcha) {
            try {
              window.hcaptcha.reset(widgetIdRef.current);
            } catch {
              // Widget already gone — nothing to reset.
            }
          }
        },
      }),
      []
    );

    useEffect(() => {
      let cancelled = false;

      loadHCaptcha()
        .then(() => {
          // Guard against React 18 StrictMode's double-invoked effects, which
          // would otherwise render two widgets into the same container.
          if (
            cancelled ||
            !containerRef.current ||
            widgetIdRef.current !== null ||
            !window.hcaptcha
          ) {
            return;
          }

          widgetIdRef.current = window.hcaptcha.render(containerRef.current, {
            sitekey: HCAPTCHA_SITEKEY,
            theme: "dark",
            callback: (token: string) => callbacks.current.onVerify(token),
            "expired-callback": () => callbacks.current.onExpire?.(),
            "error-callback": () => callbacks.current.onUnavailable?.(),
          });
        })
        .catch(() => {
          if (!cancelled) callbacks.current.onUnavailable?.();
        });

      return () => {
        cancelled = true;
        if (widgetIdRef.current !== null && window.hcaptcha) {
          try {
            window.hcaptcha.remove(widgetIdRef.current);
          } catch {
            // Already removed.
          }
          widgetIdRef.current = null;
        }
      };
    }, []);

    return <div ref={containerRef} className={className} />;
  }
);
