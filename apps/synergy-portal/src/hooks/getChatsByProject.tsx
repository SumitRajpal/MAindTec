import { useChatStore } from '@maind-tec-project/state-management';
import { useMemo } from 'react';

export function useProjectMessages(projectId: string) {
      const project = useChatStore((state) => state.chats[projectId]);

      const messages = useMemo(() => {
            return project?.messages || [];
      }, [project]);

      const count = messages.length;

      return { messages, count };
}