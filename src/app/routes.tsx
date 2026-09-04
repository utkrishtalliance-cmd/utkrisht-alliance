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
import { Creators } from "./pages/Creators";
import { ArtsArchitecture } from "./pages/ArtsArchitecture";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { SegmentPage } from "./components/SegmentPage";
import { SEGMENTS } from "./data/segments";
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
      { path: "creators", Component: Creators },
      { path: "arts-architecture", Component: ArtsArchitecture },
      { path: "fashion-shows", element: <SegmentPage content={SEGMENTS["fashion-shows"]} /> },
      { path: "luxury-real-estate", element: <SegmentPage content={SEGMENTS["luxury-real-estate"]} /> },
      { path: "networking-events", element: <SegmentPage content={SEGMENTS["networking-events"]} /> },
      { path: "brand-showcases", element: <SegmentPage content={SEGMENTS["brand-showcases"]} /> },
      { path: "whisky-spirits", element: <SegmentPage content={SEGMENTS["whisky-spirits"]} /> },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
    ],
  },
]);
