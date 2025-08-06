import MetaInfo from "@/components/ChatModule/atomic/MetaInfo";
import { useFileMessages } from "@/hooks/getChatByFile";
import { useProjectMessages } from "@/hooks/getChatsByProject";
import { useChatStore, useProjectStore, useTabStore } from "@maind-tec-project/state-management";
import clsx from "clsx";
import { Bot, Paperclip } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
export interface FileReference {
      name: string;
      path: string;
}

export interface Message {
      id: string;
      senderId: string;
      text: string;
      timestamp: string;
      pageName?: string;
      fileReference?: FileReference;
}

const EmptyAI = () => {
      return (
            <div className="flex items-center justify-center h-full bg-transparent px-4">
                  <div className="flex flex-col items-center text-center space-y-6 max-w-md">


                        <div className="text-gray-300">
                              <Bot className="w-12 h-12" strokeWidth={1.5} />
                        </div>

                        <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
                              Ask MAind AI
                        </h1>


                        <p className="text-sm text-gray-500 leading-relaxed">
                              Ask MAind AI is powered by AI, so mistakes are possible. Review the output carefully before relying on it.
                        </p>

                        <div className="w-full mt-2 space-y-2 text-sm text-gray-400">
                              <div className="flex items-center justify-center space-x-2">
                                    <Paperclip className="w-4 h-4" />
                                    <span>
                                          <code className="font-mono text-gray-600">Chat with project</code>
                                    </span>
                              </div>
                              <div className="flex items-center justify-center space-x-2">
                                    <Paperclip className="w-4 h-4" />
                                    <span>
                                          <code className="font-mono text-gray-600">Chat with files</code>
                                    </span>
                              </div>
                              <div className="flex items-center justify-center space-x-2">
                                    <Paperclip className="w-4 h-4" />
                                    <span>
                                          <code className="font-mono text-gray-600">Use dropdown chat options project or file</code>
                                    </span>
                              </div>
                        </div>

                  </div>
            </div>
      );
};
const ChatMessages = () => {
      const getCurrentTab = useTabStore((state) => state.currentTab);
      const projectId = useProjectStore((state) => state.getProjectId());
      const currentUserId = "me_001"
      const messagesEndRef = useRef<HTMLDivElement>(null);
      const { messages: fileMessages } = useFileMessages(projectId, getCurrentTab?.id)
      const { projectMessages } = useProjectMessages(projectId)
      const getChatType = useChatStore((state) => state.chatType);
      useEffect(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, [fileMessages, getCurrentTab, projectMessages]);


      const messages = useMemo(() => (getChatType == 'project') ? projectMessages : fileMessages, [projectMessages, fileMessages, getChatType])
      return (

            <div className="flex-1 px-4 py-6">
                  {getChatType}
                  <div className="max-w-3xl mx-auto space-y-6">

                        {messages.length ? messages?.map((msg, index) => {
                              const isOwn = msg.senderId === currentUserId;

                              return (
                                    <div
                                          key={index + msg.id}
                                          className={clsx(
                                                'flex flex-col gap-1',
                                                isOwn ? 'items-end' : 'items-start'
                                          )}
                                    >
                                          {msg.fileReference && !isOwn && (
                                                <div className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                                                      <span className="select-none">▾</span>
                                                      <span>Used 1 reference</span>
                                                </div>
                                          )}


                                          <div
                                                className={clsx(
                                                      'px-4 py-3 rounded-xl shadow max-w-[75%] break-words text-sm',
                                                      isOwn
                                                            ? 'bg-mBlue-600 text-white rounded-br-none'
                                                            : 'bg-[#f3f4f6] text-gray-900 rounded-bl-none'
                                                )}
                                          >
                                                <div className="flex flex-1 flex-col gap-0 items-end">
                                                      <span className=" text-sm">
                                                            {msg.text}
                                                      </span>
                                                      <span className="text-xs">
                                                            {msg.timestamp}
                                                      </span>

                                                </div>

                                          </div>


                                          {isOwn && <MetaInfo fileReference={msg.fileReference} />}

                                    </div>
                              );
                        }) : <EmptyAI />}
                        <div ref={messagesEndRef} />
                  </div>
            </div>
      );
};

export default ChatMessages;