import {
      HistoryIcon,
      Maximize2Icon,
      MoreHorizontal,
      PlusIcon,
      Redo2Icon,
      SettingsIcon,
      Undo2Icon,
      XIcon,
} from 'lucide-react';

const ChatHeader = () => {
      return (
            <div className="flex items-center justify-between px-4 h-10 bg-gray-50 text-gray-500 w-full">
                  {/* Left: Title */}
                  <div className="relative">
                        <span className="text-xs font-semibold tracking-widest">CHAT</span>
                        {/* Blue underline */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500 rounded-sm" />
                  </div>

                  {/* Right: Icons */}
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                        {/* You can replace these placeholders with actual lucide-react icons */}
                        <button><Undo2Icon className="w-4 h-4" /></button>
                        <button><Redo2Icon className="w-4 h-4" /></button>
                        <button><PlusIcon className="w-4 h-4" /></button>
                        <button><HistoryIcon className="w-4 h-4" /></button>
                        <button><SettingsIcon className="w-4 h-4" /></button>
                        <button><MoreHorizontal className="w-4 h-4" /></button>
                        <button><Maximize2Icon className="w-4 h-4" /></button>
                        <button><XIcon className="w-4 h-4" /></button>
                  </div>
            </div>
      );
};

export default ChatHeader;