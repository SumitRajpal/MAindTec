import { useTabStore } from '@maind-tec-project/state-management';
import {
      MicIcon,
      SendHorizonalIcon
} from 'lucide-react';
import { useState } from 'react';
import MetaInfo, { MetaInfoProps } from '../atomic/MetaInfo';
const ChatFooter = () => {
      const [input, setInput] = useState('');
      const getCurrentTab = useTabStore((state) => state.currentTab);
      const metaInfo: MetaInfoProps = {
            fileReference: {
                  name: getCurrentTab?.name || 'Unknown File',
                  path: '',
            },
      };
      return (

            <div className=" bg-gray-50 px-4 py-2">
                  <div className="max-w-4xl mx-auto w-full">
                        <div className="w-full rounded-xl bg-white shadow-sm px-4 py-2 space-y-2">

                              <div className="flex items-center justify-between text-xs text-gray-700">
                                    <div className="flex items-center gap-2 flex-wrap">
                                          <button className="bg-gray-100 text-mBlue-700 text-[10px] px-2 py-0.5 rounded font-medium">
                                                Add Context
                                          </button>
                                          <div className="flex items-center gap-1">

                                                {getCurrentTab?.id && <MetaInfo fileReference={metaInfo.fileReference} />}
                                          </div>
                                    </div>
                              </div>
                              <textarea
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask MAind AI"
                                    rows={1}
                                    className="w-full border-none outline-none placeholder-gray-500 text-sm bg-transparent resize-none overflow-hidden max-h-40"
                              />

                              <div className="flex row items-center place-content-end gap-3">



                                    <div className="text-xs text-mBlue-600 hidden sm:block">
                                          <span className="mr-1">Ask</span>
                                          <select className="bg-transparent outline-none text-sm">
                                                <option>Project</option>
                                                <option>File</option>
                                          </select>
                                    </div>

                                    <div className="flex gap-2 text-gray-500">

                                          <button className="text-mBlue-600 hover:text-mBlue-800">
                                                <MicIcon className="h-5 w-5" />
                                          </button>
                                          <button className="text-mBlue-600 hover:text-mBlue-800">
                                                <SendHorizonalIcon className="h-5 w-5" />
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ChatFooter;