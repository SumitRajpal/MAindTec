'use client';

import IconBar from "@/components/core/IconBar";
import NavigationBar from "@/components/core/NavigationBar";
import PageHeader from "@/components/core/PageHeader";
import TreeBar from "@/components/core/TreeBar";
import { useSidebarStore } from "@maind-tec-project/state-management";
import { ReactNode, Suspense } from "react";

interface DashboardProps {
      children: ReactNode;
}
interface SideBarItem {
      component: ReactNode;
}

interface ActiveSideBarList {
      [key: string]: SideBarItem;
}

const activeSideBarList: ActiveSideBarList = {
      "1": { component: <NavigationBar /> },
      "2": { component: <TreeBar /> }
}
export default function Dashboard({ children }: DashboardProps) {
      const setNavBar = useSidebarStore((state) => state.setNavbar);
      const navBar = useSidebarStore((state) => state.activeNavbar);
      const activeSidebar = useSidebarStore((state) => state.getActiveSidebar());
      return (
            <Suspense fallback={<div>Loading SideBar</div>}>

                  <div className="relative h-screen  overflow-hidden bg-gray-50">

                        <div className="flex h-full md:grid md:grid-cols-[280px_1fr]  transition-all duration-300 ease-in-out">


                              <aside className="hidden md:flex flex-row  overflow-y-auto">
                                    <IconBar />
                                    {activeSideBarList[activeSidebar ? activeSidebar : '1']?.component}


                              </aside>

                              {navBar && (
                                    <div
                                          className="fixed inset-0 z-40 bg-black/50 md:hidden animate-fade-in"
                                          onClick={() => setNavBar(false)}
                                    />
                              )}

                              <aside
                                    className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${navBar ? 'translate-x-0' : '-translate-x-full'}`}
                              >
                                    <div className="flex flex-row  h-full">
                                          <IconBar />
                                          {activeSideBarList[activeSidebar ? activeSidebar : '1']?.component}
                                    </div>
                              </aside>


                              <main className="flex flex-col w-full h-full overflow-y-auto">

                                    <PageHeader />
                                    {children}
                              </main>
                        </div>
                  </div>
            </Suspense>
      );
}
