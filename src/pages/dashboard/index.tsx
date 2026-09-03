import { useState } from "react";
import { useShop } from "@/context/shop-context";
import { ORDERS } from "@/data/orders";
import type   { ViewKey } from "./types";
import SidebarTabs from "./components/sidebar-tabs";
import Overview from "./components/over-view";
import OrdersList from "./components/orders-list";
import OrderDetail from "./components/order-detail";
import MeasurementsTab from "./components/measurements-tab";
import AppointmentsTab from "./components/appointments-tab";
import AddressesTab from "./components/addresses-tab";
import SavedPiecesTab from "./components/saved-pieces-tab";

export default function Dashboard() {
  const { money } = useShop();
  const [view, setView] = useState<ViewKey>("overview");
  const [orderIdx, setOrderIdx] = useState(0);
  const [signedIn, setSignedIn] = useState(true);

  const order = ORDERS[orderIdx] || ORDERS[0];

  return (
    <div className="w-full">
      <section className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-5 px-5 pt-8 pb-5 sm:px-8 sm:pt-11 lg:gap-7.5 lg:px-10 lg:pt-13 lg:pb-6.5">
        <div className="flex flex-col gap-2.5 sm:gap-3">
          <span className="text-[10.5px] tracking-[0.3em] text-muted-foreground uppercase">Client since 2023 · Ikoyi</span>
          <h1 className="text-[clamp(28px,6vw,52px)] leading-none font-normal font-serif">Good evening, Adebayo.</h1>
        </div>
        <button
          type="button"
          onClick={() => setSignedIn((s) => !s)}
          className="cursor-pointer border border-foreground/24 px-5 py-3 text-[10.5px] tracking-[0.18em] text-foreground uppercase hover:border-foreground sm:px-6 sm:py-3.5"
        >
          {signedIn ? "Sign out" : "Signed out"}
        </button>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 px-5 pb-16 sm:px-8 lg:grid-cols-[224px_minmax(0,1fr)] lg:gap-14 lg:px-10 lg:pb-30">
        <SidebarTabs view={view} onChange={setView} />

        <div className="flex flex-col gap-6 lg:gap-7.5">
          {view === "overview" && (
            <Overview
              money={money}
              onManage={() => setView("appts")}
              onMeasure={() => setView("measure")}
              onOpenOrder={(i) => {
                setOrderIdx(i);
                setView("order");
              }}
              onAllOrders={() => setView("orders")}
            />
          )}
          {view === "orders" && (
            <OrdersList
              money={money}
              onOpenOrder={(i) => {
                setOrderIdx(i);
                setView("order");
              }}
            />
          )}
          {view === "order" && <OrderDetail order={order} money={money} onBack={() => setView("orders")} />}
          {view === "measure" && <MeasurementsTab />}
          {view === "appts" && <AppointmentsTab />}
          {view === "addr" && <AddressesTab />}
          {view === "saved" && <SavedPiecesTab money={money} />}
        </div>
      </section>
    </div>
  );
}
