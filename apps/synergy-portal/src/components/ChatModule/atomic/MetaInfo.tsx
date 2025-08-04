'use client';

import Text from "@/components/text";
import { FileSpreadsheet } from "lucide-react";
import { FileReference } from "../components/ChatMessages";



interface MetaInfoProps {
      fileReference: FileReference;
}

const MetaInfo: React.FC<MetaInfoProps> = ({ fileReference }) => {
      return (
            <div className="flex items-center border border-gray-300 rounded-md px-2 py-1 bg-transparent w-fit space-x-2 text-xs ">
                  <FileSpreadsheet className="w-4 h-4 text-green-600" />
                  <span className="text-gray-800 font-light">
                        <Text.XSmall>{fileReference.name}</Text.XSmall>
                  </span>
            </div>
      );
};

export default MetaInfo;
