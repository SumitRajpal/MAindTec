'use client';

import {
      BarChart,
      BookText,
      FileText,
      FolderKanban,
      HelpCircle,
      Home,
      LayoutDashboard,
      Mail,
      MoreHorizontal,
      Plus,
      Search,
      Settings,
      StickyNote,
      Users,
} from 'lucide-react';

export default function NavBar() {
      return (
            <div className="h-auto w-64 bg-white border-r flex flex-col justify-between p-4">
                  <div>
                        <div className="flex items-center justify-between mb-6">
                              <h1 className="text-lg font-semibold">IITKd</h1>
                        </div>
                        <div className="flex items-center gap-2 mb-6">
                              <button className="flex-1 bg-black text-white text-sm px-3 py-2 rounded-md flex items-center gap-2">
                                    <Plus size={16} />
                                    Quick Create
                              </button>
                              <button className="bg-gray-100 p-2 rounded-md">
                                    <Mail size={16} />
                              </button>
                        </div>

                        <nav className="flex flex-col gap-2">
                              <NavItem icon={<LayoutDashboard size={16} />} label="Dashboard" />
                              <NavItem icon={<FolderKanban size={16} />} label="Lifecycle" />
                              <NavItem icon={<BarChart size={16} />} label="Analytics" />
                              <NavItem icon={<Home size={16} />} label="Projects" path="/dashboard/project" />
                              <NavItem icon={<Users size={16} />} label="Team" />
                              <div className="mt-6 mb-1 text-xs text-gray-500">Documents</div>
                              <NavItem icon={<BookText size={16} />} label="Data Library" />
                              <NavItem icon={<FileText size={16} />} label="Reports" />
                              <NavItem icon={<StickyNote size={16} />} label="Word Assistant" />
                              <NavItem icon={<MoreHorizontal size={16} />} label="More" />
                        </nav>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                        <NavItem icon={<Settings size={16} />} label="Settings" />
                        <NavItem icon={<HelpCircle size={16} />} label="Get Help" />
                        <NavItem icon={<Search size={16} />} label="Search" />

                        {/* User Info */}
                        <div className="flex items-center gap-3 mt-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
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
            <div className="flex items-center gap-3 text-sm text-gray-700 px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  {icon}
                  <span>{label}</span>
            </div>
      );
}
