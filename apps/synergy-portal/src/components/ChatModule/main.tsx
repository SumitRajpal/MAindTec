'use client';


import ChatFooter from '@/components/ChatModule/components/ChatFooter';
import ChatHeader from '@/components/ChatModule/components/ChatHeader';
import ChatMessages from '@/components/ChatModule/components/ChatMessages';


const ChatLayout = () => {
      return (
            <div className="flex flex-col h-full">
                  <div className="shrink-0">
                        <ChatHeader />
                  </div>
                  <div className="flex-1 overflow-y-auto">
                        <ChatMessages />
                  </div>
                  <div className="shrink-0">
                        <ChatFooter />
                  </div>
            </div>
      );
};

export default ChatLayout;
