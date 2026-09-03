import { Outlet } from "react-router-dom";
import type { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Header />
      {children ?? <Outlet />}
      <Footer />
    </>
  );
}
