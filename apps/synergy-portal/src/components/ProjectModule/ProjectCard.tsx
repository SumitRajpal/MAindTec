'use client';

import { File, Stamp } from 'lucide-react';
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
            <div
                  id={project.key + '-projectItem'}
                  className="w-full max-w-sm h-full flex flex-col cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-5"
                  onClick={() => project.key && handleNavigation(project.key)}
            >
                  <div className="flex justify-between items-start mb-3">
                        <h2 className="text-lg font-semibold text-gray-900">
                              {project.label}
                        </h2>
                        <span className="text-sm text-gray-500 whitespace-nowrap">
                              {project.timestamp}
                        </span>
                  </div>

                  <div className="text-sm text-gray-500 flex-1 overflow-hidden line-clamp-5">
                        {project.description}
                  </div>
                  <div className="mt-4 space-y-3">
                        <div className="flex justify-between items-center text-sm text-gray-700">
                              <div className="flex items-center gap-1">
                                    <span className="text-gray-800"><Stamp size={12} /></span>
                                    <span>{project.status}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                    <span><File size={12} /></span>
                                    <span>{project.files}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                    <span className="text-xs bg-mBlue-100 px-2 py-1 rounded-full">
                                          {project.department}
                                    </span>
                              </div>
                        </div>
                        <ProgressBar value={((project.stage ?? 0) / 10) * 100} />
                  </div>
            </div>
      );
};

export default ProjectCard;
