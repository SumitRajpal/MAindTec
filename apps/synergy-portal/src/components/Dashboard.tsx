'use client';

import IconBar, { activeSideBarList } from "@/components/core/iconbar";
import { useSidebarStore } from "@maind-tec-project/state-management";
import { ReactNode, Suspense, useState } from "react";

interface DashboardProps {
      children: ReactNode;
}
export default function Dashboard({ children }: DashboardProps) {
      const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
      const activeSidebar = useSidebarStore((state) => state.getActiveSidebar());
      return (
            <Suspense fallback={<div>Loading SideBar</div>}>

                  <div className="relative h-screen  overflow-hidden bg-gray-50">

                        <div className="flex h-full md:grid md:grid-cols-[280px_1fr] transition-all duration-300 ease-in-out">


                              <aside className="hidden md:flex flex-row  overflow-y-auto">
                                    <IconBar />
                                    {activeSideBarList[activeSidebar ? activeSidebar : '1']?.component}


                              </aside>

                              {mobileSidebarOpen && (
                                    <div
                                          className="fixed inset-0 z-40 bg-black/50 md:hidden animate-fade-in"
                                          onClick={() => setMobileSidebarOpen(false)}
                                    />
                              )}

                              <aside
                                    className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                              >
                                    <div className="flex flex-row  h-full">
                                          <IconBar />
                                          {activeSideBarList[activeSidebar ? activeSidebar : '1']?.component}
                                    </div>
                              </aside>


                              <main className="flex flex-col w-full h-full overflow-y-auto">

                                    <header className="flex items-center justify-between mb-6">
                                          <button
                                                className="md:hidden text-2xl hover:scale-110 transition-transform"
                                                onClick={() => setMobileSidebarOpen(true)}
                                          >
                                                ☰
                                          </button>

                                          <div className="flex items-center gap-4">
                                                <button className="text-gray-500 hover:text-gray-700">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                                            viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                                      </svg>
                                                </button>
                                                <div className="w-8 h-8 rounded-full bg-gray-400" />
                                          </div>
                                    </header>
                                    {children}
                              </main>
                        </div>
                  </div>
            </Suspense>
      );
}
