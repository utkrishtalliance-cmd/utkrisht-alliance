import { createBrowserRouter, redirect } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Events } from "./pages/Events";
import { Partner } from "./pages/Partner";
import { Media } from "./pages/Media";
import { Insights } from "./pages/Insights";
import { InsightArticle } from "./pages/InsightArticle";
import { Contact } from "./pages/Contact";
import { SHOW_MEDIA_PAGE } from "./featureFlags";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "events", Component: Events },
      { path: "partner", Component: Partner },
      {
        path: "media",
        ...(SHOW_MEDIA_PAGE
          ? { Component: Media }
          : { loader: () => redirect("/") }),
      },
      { path: "insights", Component: Insights },
      { path: "insights/:slug", Component: InsightArticle },
      { path: "contact", Component: Contact },
    ],
  },
]);
