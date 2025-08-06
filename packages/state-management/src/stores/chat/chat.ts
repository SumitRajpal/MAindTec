import { z } from 'zod';
import { create } from 'zustand';

export const fileReferenceSchema = z.object({
      name: z.string(),
      path: z.string(),
});

export const messageSchema = z.object({
      id: z.string(),
      senderId: z.string(),
      text: z.string(),
      timestamp: z.string(),
      pageName: z.string(),
      fileReference: fileReferenceSchema,
});

export type Message = z.infer<typeof messageSchema>;


/**
 * 
 * Idea is  {
      [projectId 1] :{
            messages:[],
            [fileId 1]: {
                  messages:[],
            },
            [fileId 2]: {
                  messages:[],
            },
      },
      [projectId 2] :{
            messages:[],
            [fileId 11]: {
                  messages:[],
            },
            [fileId 22]: {
                  messages:[],
            },
      }
}
 */
type ChatState = {
      chats: {
            [projectId: string]: {
                  messages: Message[];
                  files: {
                        [fileId: string]: Message[];
                  };
            };
      };
      chatType: string;
      setChatType: (type: string) => void;
      setMessageToProject: (projectId: string, message: Message) => void;
      setMessageToFile: (projectId: string, fileId: string, message: Message) => void;
      getMessagesByProjectId: (projectId: string) => Message[];
      getMessagesByFileId: (projectId: string, fileId: string) => Message[];
      getTotalMessagesByProject: (projectId: string) => number;
      getTotalMessagesByFile: (projectId: string, fileId: string) => number;
};

export const useChatStore = create<ChatState>((set, get) => ({
      chats: {},
      chatType: 'project',
      setChatType: (type: string) => {
            set({ chatType: type });
      },
      setMessageToProject: (projectId, message) => {
            set((state) => {
                  const existingProject = state.chats[projectId] || { messages: [], files: {} };
                  const updatedMessages = [...existingProject.messages, message];

                  return {
                        chats: {
                              ...state.chats,
                              [projectId]: {
                                    ...existingProject,
                                    messages: updatedMessages,
                              },
                        },
                  };
            });
      },

      setMessageToFile: (projectId, fileId, message) => {
            set((state) => {
                  const existingProject = state.chats[projectId] || { messages: [], files: {} };
                  const existingFileMessages = existingProject.files[fileId] || [];
                  const updatedFileMessages = [...existingFileMessages, message];

                  return {
                        chats: {
                              ...state.chats,
                              [projectId]: {
                                    ...existingProject,
                                    files: {
                                          ...existingProject.files,
                                          [fileId]: updatedFileMessages,
                                    },
                              },
                        },
                  };
            });
      },

      getMessagesByProjectId: (projectId) => {
            return get().chats[projectId]?.messages || [];
      },

      getMessagesByFileId: (projectId, fileId) => {
            return get().chats[projectId]?.files?.[fileId] || [];
      },

      getTotalMessagesByProject: (projectId) => {
            const project = get().chats[projectId];
            if (!project) return 0;

            const projectLevelCount = project.messages.length;
            const fileLevelCount = Object.values(project.files).reduce(
                  (acc, messages) => acc + messages.length,
                  0
            );
            return projectLevelCount + fileLevelCount;
      },

      getTotalMessagesByFile: (projectId, fileId) => {
            return get().chats[projectId]?.files?.[fileId]?.length || 0;
      },
}));
