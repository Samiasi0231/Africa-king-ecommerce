import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ShopProvider } from "@/context/shop-context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ShopProvider currency="NGN">
        <App />
      </ShopProvider>
    </BrowserRouter>
  </StrictMode>
);
