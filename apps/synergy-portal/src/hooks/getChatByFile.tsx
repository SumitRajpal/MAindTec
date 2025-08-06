import { useChatStore } from "@maind-tec-project/state-management";
import { useMemo } from "react";

export const useFileMessages = (projectId: string, fileId: string) => {
      const fileMessages = useChatStore((state) => state.chats[projectId]?.files?.[fileId]);

      const messages = useMemo(() => {
            return fileMessages || [];
      }, [fileMessages]);
      const count = messages.length;

      return { messages, count };
}
