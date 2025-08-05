import { useChatStore } from "@maind-tec-project/state-management";

export function useFileMessages(projectId: string, fileId: string) {
      const fileMessages = useChatStore((state) => state.chats[projectId]?.files?.[fileId]);

      const messages = fileMessages || [];
      const count = messages.length;

      return { messages, count };
}
