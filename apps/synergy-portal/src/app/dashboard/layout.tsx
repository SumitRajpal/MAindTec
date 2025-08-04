'use client'


import DashboardLayout from "@/layout/DashboardLayout";
function Dash({ children }: { children: React.ReactNode }) {

      return (
            <DashboardLayout>
                  {children}
            </DashboardLayout>)

}

export default Dash