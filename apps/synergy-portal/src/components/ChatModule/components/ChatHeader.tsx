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

const icons = [
      { id: 'undo', icon: <Undo2Icon className="w-4 h-4 hover:bg-gray-100 hover:text-gray-900" /> },
      { id: 'redo', icon: <Redo2Icon className="w-4 h-4 hover:bg-gray-100 hover:text-gray-900" /> },
      { id: 'add', icon: <PlusIcon className="w-4 h-4 hover:bg-gray-100 hover:text-gray-900" /> },
      { id: 'history', icon: <HistoryIcon className="w-4 h-4 hover:bg-gray-100 hover:text-gray-900" /> },
      { id: 'settings', icon: <SettingsIcon className="w-4 h-4 hover:bg-gray-100 hover:text-gray-900" /> },
      { id: 'more', icon: <MoreHorizontal className="w-4 h-4 hover:bg-gray-100 hover:text-gray-900" /> },
      { id: 'maximize', icon: <Maximize2Icon className="w-4 h-4 hover:bg-gray-100 hover:text-gray-900" /> },
      { id: 'close', icon: <XIcon className="w-4 h-4 hover:bg-gray-100 hover:text-gray-900" /> },
];

const ChatOptions: React.FC = () => {
      return (
            <div className="flex items-center gap-3 text-mBlue-600 text-sm">
                  {icons.map(({ id, icon }) => (
                        <button key={id} id={id}>
                              {icon}
                        </button>
                  ))}
            </div>
      );
};

const ChatHeader: React.FC = () => {
      return (
            <div className="flex items-center justify-between px-4 h-10 bg-gray-50 text-gray-500 w-full">
                  <div className="relative">
                        <span className="text-xs font-semibold tracking-widest">CHAT</span>
                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-mBlue-600 rounded-sm" />
                  </div>
                  <ChatOptions />
            </div>
      );
};

export default ChatHeader;