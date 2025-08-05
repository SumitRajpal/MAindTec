'use client';

import ChatLayout from "@/components/ChatModule/main";
import { useProjectStore, useTabStore } from "@maind-tec-project/state-management";



const ProjectsDetail = () => {
      const projectId = useProjectStore((state) => state.getProjectId());
      const currentTab = useTabStore((state) => state.currentTab);
      return (
            <section className="flex w-full h-full text-gray-400 overflow-hidden flex-col md:flex-row">
                  <div className="hidden md:flex md:w-[70%] flex-col justify-center border-gray-300 rounded-lg">
                        <section className="flex flex-col w-full h-full rounded-lg overflow-auto">
                              <div className="flex items-center justify-center min-h-screen bg-gray-100">
                                    <div className="bg-white shadow-lg rounded-xl p-4 w-96 text-center">
                                          <h6 className="text-sm font-semibold mb-4">No time left to design this</h6>
                                          <h2 className="text-2xl font-semibold mb-4">Current Project Design ID: {projectId}</h2>
                                          <h2 className="text-2xl font-semibold mb-4"> File Name: {currentTab?.name}</h2>
                                    </div>
                              </div>
                        </section>
                  </div>

                  <aside
                        className="
      flex w-full md:w-[30%]
      border-l md:border-l border-gray-200
      h-full overflow-auto
    "
                  >
                        <div className="w-full h-auto flex-1">
                              <ChatLayout />
                        </div>
                  </aside>
            </section>



      );
};

export default ProjectsDetail;
