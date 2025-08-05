/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTabStore } from '@maind-tec-project/state-management';
import type { GetProps, TreeDataNode } from 'antd';
import { Tree } from 'antd';
import React from 'react';

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>;

const { DirectoryTree } = Tree;

const treeData: TreeDataNode[] = [
      {
            title: 'Propulsion Systems',
            key: '1',
            children: [
                  { title: 'report123.pdf', key: '2', isLeaf: true },
                  { title: 'design88.cad', key: '3', isLeaf: true },
                  { title: 'budget2022.xls', key: '4', isLeaf: true },
                  { title: 'notes.pdf', key: '5', isLeaf: true },
                  { title: 'blueprint.cad', key: '6', isLeaf: true },
                  {
                        title: 'Fuel Cell',
                        key: '7',
                        children: [
                              { title: 'invoice_7.xls', key: '8', isLeaf: true },
                              { title: 'projectX.cad', key: '9', isLeaf: true },
                              { title: 'plan_A4.pdf', key: '10', isLeaf: true }
                        ]
                  }
            ]
      },
      {
            title: 'Nozzle Designs',
            key: '11',
            children: [
                  { title: 'diagram01.cad', key: '12', isLeaf: true },
                  { title: 'finance_data.xls', key: '13', isLeaf: true },
                  {
                        title: 'Mechanics',
                        key: '14',
                        children: [
                              { title: 'specs25.pdf', key: '15', isLeaf: true },
                              { title: 'model5.cad', key: '16', isLeaf: true },

                        ]
                  }
            ]
      }
];

const TreeList: React.FC = () => {
      const setTab = useTabStore((state) => state.setTab);
      const setCurrentTab = useTabStore((state) => state.setCurrentTab);
      const onSelect: DirectoryTreeProps['onSelect'] = (keys, info: any) => {
            if (info?.node?.isLeaf) {
                  const { title, key } = info.selectedNodes[0];
                  setTab({ id: key, name: title });
                  setCurrentTab({ id: key, name: title });
            }

      };

      const onExpand: DirectoryTreeProps['onExpand'] = (keys, info: any) => {
            console.log('Trigger Expand', keys, info.selectedNodes);
      };

      return (
            <DirectoryTree
                  defaultExpandAll
                  onSelect={onSelect}
                  onExpand={onExpand}
                  treeData={treeData}
            />
      );
};

export default TreeList;