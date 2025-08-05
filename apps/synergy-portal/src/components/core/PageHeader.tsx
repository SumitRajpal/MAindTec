'use client';
import { useSidebarStore } from '@maind-tec-project/state-management';
import { Breadcrumb } from 'antd';
import { Menu } from 'lucide-react';
import React from 'react';

const PageHeader: React.FC = () => {
      const setNavBar = useSidebarStore((state) => state.setNavbar);
      return (
            <header className="flex items-center justify-between p-2">
                  <button
                        className="md:hidden text-2xl hover:scale-110 transition-transform"
                        onClick={() => setNavBar(true)}
                  >
                        <Menu size={24} />
                  </button>

                  <div className="flex items-center mx-8 gap-4">
                        <Breadcrumb
                              separator=">"
                              items={[
                                    {
                                          title: 'Home',
                                    },
                                    {
                                          title: 'Projects',
                                          href: '',
                                    }
                              ]}
                        />
                  </div>
            </header>)
};

export default PageHeader;