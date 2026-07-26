import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Events } from "./pages/Events";
import { Partner } from "./pages/Partner";
import { Media } from "./pages/Media";
import { Insights } from "./pages/Insights";
import { Contact } from "./pages/Contact";

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
      { path: "media", Component: Media },
      { path: "insights", Component: Insights },
      { path: "contact", Component: Contact },
    ],
  },
]);
