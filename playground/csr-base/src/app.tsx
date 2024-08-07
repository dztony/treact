import { createRoot } from "react-dom/client";
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routeConfigList } from "@/route.tsx";

function appEntryRender() {
  const domNode = document.getElementById('root') as HTMLElement;
  const root = createRoot(domNode);
  const router = createBrowserRouter(routeConfigList);

  root.render(<RouterProvider router={router} />);
}

appEntryRender();
