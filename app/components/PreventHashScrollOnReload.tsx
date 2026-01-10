"use client";

import { useEffect } from "react";

export default function PreventHashScrollOnReload() {
  useEffect(() => {
    try {
      // Prefer manual scroll restoration so the browser doesn't auto-scroll to an anchor on reload
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    } catch (e) {
      // ignore in environments where history isn't available
    }

    // If this navigation was a reload and there's a hash, the browser may have already jumped to it.
    // Force the viewport to the top on mount to avoid showing the page scrolled to the bottom.
    try {
      const navEntries = (performance && performance.getEntriesByType)
        ? performance.getEntriesByType('navigation')
        : [];

  const navType = (navEntries && navEntries.length) ? (navEntries[0] as any).type : (performance as any).navigation?.type;
      const isReload = navType === 'reload' || navType === 1; // fallback for older browsers

      if (isReload && window.location.hash) {
        // run after a tick so we override any browser auto-scroll
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }, 0);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return null;
}
