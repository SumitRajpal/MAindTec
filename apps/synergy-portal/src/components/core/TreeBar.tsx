'use client';

import { Projects } from '@/components/ProjectModule/ProjectList';
import { projectJsonList } from '@/shared/constants/project/common';
import { Collapse, CollapseProps } from 'antd';
import { PanelRightOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import TreeList from './TreeList';
const projects: Projects = projectJsonList
const items: CollapseProps['items'] = projects.data.map((projectItem, index) => ({
      key: projectItem.key?.toString() || index.toString(),
      label: projectItem.label || `Project ${index + 1}`,
      children: <TreeList />
}));

const TreeBar: React.FC = () => {
      const router = useRouter();
      const [activeKey, setActiveKey] = useState<string | string[]>('1');

      const handleChange = (key: string | string[]) => {
            if (key.length) {
                  setActiveKey(key);
                  router.push(`/dashboard/project/${key}`);
            }

      }
      return (
            <div className="h-auto w-64 bg-white border-r flex flex-col justify-stretch">
                  <div className="flex flex-col gap-4 p-3">
                        <div className="flex items-center gap-3 rounded-md cursor-pointer">
                              <div className="h-8 w-8 bg-gray-200 text-center text-sm flex items-center justify-center rounded-full">
                                    SR
                              </div>
                              <div className="flex-1">
                                    <p className="text-sm font-medium">Projects</p>
                                    <p className="text-xs text-gray-500">sumitr@iitk.ac.in</p>
                              </div>
                              <div className="bg-gray-100 p-2 rounded-md transform transition-transform duration-300 ease-in-out md:hidden">
                                    <PanelRightOpen size={16} />
                              </div>
                        </div>

                  </div>
                  <Collapse defaultActiveKey={activeKey} ghost accordion items={items} size='small' bordered={true} onChange={handleChange} />
            </div>


      );
}

export default TreeBar;