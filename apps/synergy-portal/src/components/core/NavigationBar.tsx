'use client';

import { useSidebarStore } from '@maind-tec-project/state-management';
import {
      BarChart,
      BookText,
      FileText,
      FolderKanban,
      HelpCircle,
      Home,
      LayoutDashboard,
      MoreHorizontal,
      PanelRightOpen,
      Search,
      Settings,
      StickyNote,
      Users
} from 'lucide-react';
import Link from 'next/link';
export default function NavigationBar() {
      const setNavBar = useSidebarStore((state) => state.setNavbar);
      return (
            <div className="h-auto w-64 bg-white border-r flex flex-col justify-between p-3">
                  <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 rounded-md cursor-pointer">
                              <div className="h-8 w-8  text-center text-sm flex items-center justify-center rounded-full">
                                    {/* <Image src={Logo} alt="Logo" width={200} height={200} /> */}
                              </div>
                              <div className="flex-1">
                                    <p className="text-sm font-medium">Sumit Rajpal</p>
                                    <p className="text-xs text-gray-500">sumitr@iitk.ac.in</p>
                              </div>
                              <div className="bg-gray-100 p-2 rounded-md transform transition-transform duration-300 ease-in-out md:hidden" onClick={() => { setNavBar(false) }}>
                                    <PanelRightOpen size={16} />
                              </div>
                        </div>
                        <nav className="flex flex-col gap-2">
                              <NavItem icon={<LayoutDashboard size={16} />} label="Dashboard" path="/dashboard" />
                              <NavItem icon={<FolderKanban size={16} />} label="Lifecycle" path="/dashboard" />
                              <NavItem icon={<BarChart size={16} />} label="Analytics" path="/dashboard" />
                              <NavItem icon={<Home size={16} />} label="Projects" path="/dashboard/project" />
                              <NavItem icon={<Users size={16} />} label="Team" path="/dashboard" />
                              <div className="mt-6 mb-1 text-xs text-gray-500">Documents</div>
                              <NavItem icon={<BookText size={16} />} label="Data Library" path="/dashboard" />
                              <NavItem icon={<FileText size={16} />} label="Reports" path="/dashboard" />
                              <NavItem icon={<StickyNote size={16} />} label="Word Assistant" path="/dashboard" />
                              <NavItem icon={<MoreHorizontal size={16} />} label="More" path="/dashboard" />
                        </nav>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                        <NavItem icon={<Settings size={16} />} label="Settings" />
                        <NavItem icon={<HelpCircle size={16} />} label="Get Help" />
                        <NavItem icon={<Search size={16} />} label="Search" />

                        <div className="flex items-center gap-3 mt-4  rounded-md hover:bg-gray-100 cursor-pointer">
                              <div className="h-8 w-8 bg-gray-200 text-center text-sm flex items-center justify-center rounded-full">
                                    SR
                              </div>
                              <div className="flex-1">
                                    <p className="text-sm font-medium">Sumit Rajpal</p>
                                    <p className="text-xs text-gray-500">m@example.com</p>
                              </div>
                              <MoreHorizontal size={16} />
                        </div>
                  </div>
            </div>
      );
}

function NavItem({ icon, label, path }: { icon: React.ReactNode; label: string, path?: string }) {
      return (
            <Link href={path ?? ''} className="flex items-center gap-3 text-sm text-gray-700 px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  {icon}
                  <span>{label}</span>
            </Link>
      );
}
