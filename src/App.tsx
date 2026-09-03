import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Catalogue from "@/pages/catalogue";
import Product from "@/pages/product";
import Fitting from "@/pages/fitting";
import Dashboard from "@/pages/dashboard";
import Cart from "@/pages/cart";
import Checkout from "@/pages/checkout";

export default function App() {
  return (
    <Routes>
      {/* Pages that share the site Header/Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/fitting" element={<Fitting />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      {/* Checkout has its own minimal header/footer, so it sits outside Layout */}
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
