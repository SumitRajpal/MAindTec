'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ProductItem } from "./ProjectList";
// Inspiration Design 1. https://dribbble.com/shots/19162973--FromTheArchives-tvOS-GitHub-app-Concept
// Inspiration Design 2. https://in.pinterest.com/pin/145804106679517947/

type ProjectCardProps = {
      project: ProductItem;
};
const ProgressBar = ({ value }: { value: number }) => {

      return (
            <div className="w-full bg-gray-100 h-1 rounded-3xl overflow-hidden">
                  <div
                        role="progressbar"
                        className="bg-green-600 h-1 rounded-3xl"
                        aria-valuenow={value}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: `${value}%` }}
                  />
            </div>
      );
};
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
      const router = useRouter();

      const pathname = usePathname();
      const handleNavigation = (id: number) => {
            router.push(`${pathname}/${id}`);
      };

      return (
            <div id={project.key + '-projectItem'} className="w-full cursor-pointer max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-5 space-y-4" onClick={() => project.key && handleNavigation(project.key)} >

                  <div className="flex justify-between items-start">
                        <h2 className="text-lg font-semibold text-gray-900">{project.projectName}</h2>
                        <span className="text-sm text-gray-500 whitespace-nowrap">{project.timestamp}</span>
                  </div>

                  <div className="text-sm text-gray-400">{project.description}</div>

                  <div className="flex justify-between items-center text-sm text-gray-700">
                        <div className="flex items-center gap-1">
                              <span className="text-gray-800">✔</span>
                              <span>0 done</span>
                        </div>
                        <div className="flex items-center gap-1">
                              <span>🌙</span>
                              <span>0 in progress</span>
                        </div>
                        <div className="flex items-center gap-1">
                              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">{project.department}</span>
                        </div>
                  </div>

                  <ProgressBar value={(((project.stage ?? 0) / 10) * 100)} />
            </div>
      );
};

export default ProjectCard;
