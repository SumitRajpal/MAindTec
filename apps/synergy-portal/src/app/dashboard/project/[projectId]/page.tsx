'use client';

import TabBar from "@/components/core/TabBar";
import ProjectsDetail from "@/components/ProjectModule/ProjectDetail";
import { useProjectStore } from "@maind-tec-project/state-management";
import { useEffect } from "react";

const ProjectDetailComponent = ({ params }: { params: Promise<{ projectId: string }> }) => {
      const setProjectId = useProjectStore((state) => state.setProjectId);

      useEffect(() => {
            const fetchProjectId = async () => {
                  const { projectId } = await params;
                  setProjectId(projectId);
            };
            fetchProjectId();
      }, [params]);

      return (
            <div className="flex flex-col h-screen overflow-hidden">

                  <div className="flex items-center min-w-full">
                        <TabBar />
                  </div>


                  <div className="flex-1 overflow-y-auto">
                        <ProjectsDetail />
                  </div>
            </div>
      )
};

export default ProjectDetailComponent;