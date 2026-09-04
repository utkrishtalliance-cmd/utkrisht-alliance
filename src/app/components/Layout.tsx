import { Outlet } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { applyPageMeta } from "../seo";

export function Layout() {
  const location = useLocation();

  // Scroll to top + refresh SEO metadata (title/description/canonical/OG) on
  // every route change.
  useEffect(() => {
    window.scrollTo(0, 0);
    applyPageMeta(location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}