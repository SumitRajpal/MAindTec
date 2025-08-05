'use client';

import ChatLayout from "@/components/ChatModule/main";
import { useProjectStore } from "@maind-tec-project/state-management";



const ProjectsDetail = () => {
      const projectId = useProjectStore((state) => state.getProjectId());
      return (
            <section className="flex w-full h-full text-gray-400 overflow-hidden flex-col md:flex-row">
                  <div className="hidden md:flex md:w-[70%] flex-col justify-center border-gray-300 rounded-lg">
                        <section className="flex flex-col w-full h-full border border-dashed rounded-lg p-4 overflow-auto">
                              {projectId} hello
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
