import clsx from "clsx";
import { AtSign, Bot, Paperclip, Slash } from "lucide-react";
import { useEffect, useRef } from "react";
import MetaInfo from "../atomic/MetaInfo";
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

                        {/* Icon */}
                        <div className="text-gray-300">
                              <Bot className="w-12 h-12" strokeWidth={1.5} />
                        </div>

                        {/* Heading */}
                        <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
                              Ask MAind AI
                        </h1>

                        {/* Description */}
                        <p className="text-sm text-gray-500 leading-relaxed">
                              Ask MAind AI is powered by AI, so mistakes are possible. Review the output carefully before relying on it.
                        </p>

                        {/* Command Hints */}
                        <div className="w-full mt-2 space-y-2 text-sm text-gray-400">
                              <div className="flex items-center justify-center space-x-2">
                                    <Paperclip className="w-4 h-4" />
                                    <span>
                                          Type <code className="font-mono text-gray-600">#</code> to attach context
                                    </span>
                              </div>
                              <div className="flex items-center justify-center space-x-2">
                                    <AtSign className="w-4 h-4" />
                                    <span>Chat with extensions</span>
                              </div>
                              <div className="flex items-center justify-center space-x-2">
                                    <Slash className="w-4 h-4" />
                                    <span>Type <code className="font-mono text-gray-600">/</code> to use commands</span>
                              </div>
                        </div>

                  </div>
            </div>
      );
};
const ChatMessages = () => {
      const messages = [
            {
                  id: '2',
                  senderId: 'me_001',
                  text: 'Tell eme why this component looks like this ?',
                  timestamp: '14:26',
                  pageName: 'ProjectCard.tsx',
                  fileReference: {
                        name: 'ProjectCard.tsx',
                        path: 'components/ProjectCard.tsx',

                  }
            },
            {
                  id: '1',
                  senderId: 'user_123',
                  text: 'Hey! Check this out!',
                  timestamp: '14:25',
                  pageName: 'ProjectCard.tsx',
                  fileReference: {
                        name: 'ProjectCard.tsx',
                        path: 'components/ProjectCard.tsx',

                  },
            },
            {
                  id: '3',
                  senderId: 'me_001',
                  text: 'Tell eme why this component looks like this ?',
                  timestamp: '14:26',
                  pageName: 'ProjectCard.tsx',
                  fileReference: {
                        name: 'ProjectCard.tsx',
                        path: 'components/ProjectCard.tsx',

                  }
            },
            {
                  id: '4',
                  senderId: 'user_123',
                  text: 'Lst messageWS',
                  timestamp: '14:25',
                  pageName: 'ProjectCard.tsx',
                  fileReference: {
                        name: 'ProjectCard.tsx',
                        path: 'components/ProjectCard.tsx',

                  },
            },
            {
                  id: '5',
                  senderId: 'me_001',
                  text: 'Tell eme why this component looks like this ?',
                  timestamp: '14:26',
                  pageName: 'ProjectCard.tsx',
                  fileReference: {
                        name: 'ProjectCard.tsx',
                        path: 'components/ProjectCard.tsx',

                  }
            },
            {
                  id: '6',
                  senderId: 'me_001',
                  text: 'Tell eme why this component looks like this ?',
                  timestamp: '14:26',
                  pageName: 'ProjectCard.tsx',
                  fileReference: {
                        name: 'ProjectCard.tsx',
                        path: 'components/ProjectCard.tsx',

                  }
            },
            {
                  id: '7',
                  senderId: 'me_001',
                  text: 'Tell eme why this component looks like this ?',
                  timestamp: '14:26',
                  pageName: 'ProjectCard.tsx',
                  fileReference: {
                        name: 'ProjectCard.tsx',
                        path: 'components/ProjectCard.tsx',

                  }
            }
      ];
      const currentUserId = "me_001"
      const messagesEndRef = useRef<HTMLDivElement>(null);

      // Auto-scroll to bottom
      useEffect(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, [messages]);
      return (

            <div className="flex-1 px-4 py-6">
                  <div className="max-w-3xl mx-auto space-y-6">

                        {messages.length ? messages?.map((msg) => {
                              const isOwn = msg.senderId === currentUserId;

                              return (
                                    <div
                                          key={msg.id}
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

                                          {/* Bubble */}
                                          <div
                                                className={clsx(
                                                      'px-4 py-3 rounded-xl shadow max-w-[75%] break-words text-sm',
                                                      isOwn
                                                            ? 'bg-[#1f2937] text-white rounded-br-none'
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