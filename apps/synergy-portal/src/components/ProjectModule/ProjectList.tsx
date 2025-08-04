'use client';

import FilterOption from "@/components/core/FilterOptions";
import ProjectCard from "@/components/ProjectModule/ProjectCard";
import { projectJsonList } from "@/shared/constants/project/common";


export enum Status {
      Active = "active",
      Inactive = "inactive"
}

export enum Department {
      Space = "Space",
      Automobile = "Automobile",
      Pharma = "Pharma",
      Aerospace = "Aerospace"
}

export interface ProductItem {
      key?: number;
      projectName?: string;
      description?: string;
      status?: Status | string;
      stage?: number;
      timestamp?: string;
      files?: number;
      department?: Department | string;
}
export interface Projects {
      data: ProductItem[];
}
const projects: Projects = projectJsonList


const ProjectsList = () => {
      return (
            <section className="flex w-full h-screen text-gray-400">
                  <div className="flex-1 overflow-y-auto">
                        <div className="grid justify-items-center gap-6 grid-cols-1 sm:grid-cols-1  lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
                              {projects.data?.map((projectItem, index) => (
                                    <ProjectCard key={index} project={projectItem} />
                              ))}
                        </div>
                  </div>
                  <aside className="hidden lg:flex w-[250px] h-full sticky top-0 border-r border-gray-200">
                        <FilterOption />
                  </aside>
            </section>


      );
};

export default ProjectsList;
