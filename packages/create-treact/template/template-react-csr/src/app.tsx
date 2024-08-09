import { createRoot } from "react-dom/client";
import React from "react";
import Home from '@/page/home/index.tsx';

function render() {
  const domNode = document.getElementById('root') as HTMLElement;
  const root = createRoot(domNode);

  root.render(<Home />);
}

render();
