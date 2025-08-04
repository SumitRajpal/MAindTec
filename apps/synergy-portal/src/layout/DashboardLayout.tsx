'use client'


import { SideMenuProvider } from "@/context/SideMenuContext";
import { lazy } from "react";

const Dashboard = lazy(() => import("@/components/Dashboard"));

function DashboardLayout({ children }: { children: React.ReactNode }) {

      return (
            <SideMenuProvider>
                  <Dashboard>
                        {children}
                  </Dashboard>
            </SideMenuProvider>)

}

export default DashboardLayout