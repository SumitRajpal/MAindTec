import { useTabStore } from "@maind-tec-project/state-management";
import { X } from "lucide-react";
import { useState } from "react";

const tabsData = [
      { id: "1", label: "page.tsx" },
      { id: "2", label: "layout.tsx" },
      { id: "3", label: "Tooltip.tsx", },
      { id: "4", label: "ChatHeader.tsx" },
];

export default function TabBar() {
      const [selectedTab, setSelectedTab] = useState(tabsData[0].id);
      const setTab = useTabStore((state) => state.setTab);
      const setCurrentTab = useTabStore((state) => state.setCurrentTab);
      const getTabs = useTabStore((state) => state.getTabs);
      const deleteTab = useTabStore((state) => state.deleteTab);
      const tabs = useTabStore((state) => state.tabs);
      tabsData.forEach((tab) => {
            if (!tabs.some((t) => t.id === tab.id)) {
                  setTab({ id: tab.id, name: tab.label });
            }
      });
      return (
            <div className="w-full h-auto overflow-x-hidden overflow-y-hidden whitespace-nowrap no-scrollbar bg-transparent text-xs border-b border-gray-100 ">
                  <div className="flex">
                        {tabs.map((tabItem) => {
                              const isSelected = (tabItem.id === selectedTab);

                              return (
                                    <div
                                          key={tabItem.id}
                                          onClick={() => { setCurrentTab(tabItem) }}
                                          className={`group flex items-center justify-between px-4 py-2 min-w-[150px] max-w-full
            cursor-pointer truncate border-b-2 transition-all duration-200 ease-in-out
            ${isSelected
                                                      ? "bg-gray-100 text-black border-gray-300"
                                                      : "hover:bg-gray-100 text-mBlue-700 border-transparent"
                                                }
            `}
                                    >
                                          <span className="truncate">{tabItem.name}</span>

                                          <X
                                                className="ml-3 h-4 w-4 text-gray-400 hover:text-mMaroon-500 transition-colors duration-150"
                                                onClick={(e) => {
                                                      deleteTab(tabItem.id);

                                                }}
                                          />
                                    </div>
                              );
                        })}
                  </div>
            </div>


      );
}
