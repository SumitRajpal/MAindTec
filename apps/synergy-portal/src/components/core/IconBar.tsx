'use client';

import Tooltip from '@/components/Tooltip';
import { useSidebarStore } from '@maind-tec-project/state-management';
import clsx from 'clsx';
import {
      Circle,
      Clipboard,
      Files,
      Gift,
      GitBranch,
      Package,
      Play,
      Search,
      Settings,
      Share2,
      Sparkles,
      User,
} from 'lucide-react';




export default function IconBar() {
      const setSidebar = useSidebarStore((state) => state.setSidebar);
      const activeSidebar = useSidebarStore((state) => state.getActiveSidebar());
      const icons = [
            { id: "1", icon: <Files size={18} />, notify: false, text: "Switch to dashboard menu" },
            { id: "2", icon: <Search size={18} />, notify: false, text: "Switch to project view" },
            { id: "3", icon: <GitBranch size={18} />, notify: true, count: 3, text: " Disabled" },
            { id: "4", icon: <Play size={18} />, notify: false, text: " Disabled" },
            { id: "5", icon: <Gift size={18} />, notify: false, text: " Disabled" },
            { id: "6", icon: <Clipboard size={18} />, notify: false, text: " Disabled" },
            { id: "7", icon: <Sparkles size={18} />, notify: false, text: " Disabled" },
            { id: "8", icon: <Circle size={18} />, notify: false, text: " Disabled" },
            { id: "9", icon: <Share2 size={18} />, notify: false, text: " Disabled" },
            { id: "10", icon: <Package size={18} />, notify: false, text: " Disabled" }
      ];

      return (
            <div className="bg-white border-r flex flex-col justify-between p-2 items-center">
                  <div className="flex flex-col gap-4">
                        {icons.map((item, index) => (
                              <Tooltip text={item.text} key={item.id}>
                                    <div
                                          className={clsx(
                                                'relative flex justify-center',
                                                activeSidebar === item.id ? 'bg-gray-100 rounded-xl' : ''
                                          )}
                                          onClick={() => setSidebar(item.id)}
                                    >
                                          <button
                                                className={clsx(
                                                      'p-2 rounded-md transition-all',
                                                      activeSidebar === item.id
                                                            ? 'text-mBlue-600'
                                                            : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                                                )}
                                          >
                                                {item.icon}
                                          </button>

                                          {item.notify && (
                                                <span className="absolute -top-1 -right-1 text-[10px] bg-mBlue-600 text-white rounded-full px-1.5 h-4 flex items-center justify-center leading-none">
                                                      {item.count}
                                                </span>
                                          )}
                                    </div>
                              </Tooltip>
                        ))}
                  </div>
                  <div className="flex flex-col gap-4 items-center text-gray-500">
                        <User size={18} className="hover:text-gray-900 transition-colors" />
                        <Settings size={18} className="hover:text-gray-900 transition-colors" />
                  </div>
            </div>

      );
}
