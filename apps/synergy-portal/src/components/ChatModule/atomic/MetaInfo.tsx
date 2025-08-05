'use client';

import Text from "@/components/text";
import { FileSpreadsheet } from "lucide-react";
import { FileReference } from "../components/ChatMessages";



export interface MetaInfoProps {
      fileReference: FileReference;
}

const MetaInfo: React.FC<MetaInfoProps> = ({ fileReference }) => {
      return (
            <div className="flex items-center border border-gray-300 rounded-md px-1 bg-transparent w-fit space-x-2 text-xs ">
                  <FileSpreadsheet className=" text-green-600" size={10} />
                  <span className="text-gray-800 font-light">
                        <Text.XXSmall>{fileReference.name}</Text.XXSmall>
                  </span>
            </div>
      );
};

export default MetaInfo;
