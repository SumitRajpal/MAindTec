import { useChatStore, useProjectStore, useTabStore } from "@maind-tec-project/state-management";
import { useMemo } from "react";

export const useGetChats = () => {
      const getChatType = useChatStore((state) => state?.chatType);
      const getCurrentTab = useTabStore((state) => state?.currentTab);
      const projectId = useProjectStore((state) => state?.getProjectId());
      const fileMessages = useChatStore((state) => {
            if (!projectId && !getCurrentTab?.id) return undefined;

            return state.chats[projectId]?.files?.[getCurrentTab?.id]

      });
      const project = useChatStore((state) => state?.chats[projectId]);

      const messages = useMemo(() => {
            if (getChatType === 'project') {
                  return project?.messages || [];
            }
            return fileMessages || [];
      }, [fileMessages, getChatType, project]);
      const count = messages?.length;
      if (!messages) return { messages: [], count: 0 };
      return { messages, count };
}
