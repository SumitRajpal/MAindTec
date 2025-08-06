import { useChatStore } from '@maind-tec-project/state-management';
import { useMemo } from 'react';

export const useProjectMessages = (projectId: string) => {
      const project = useChatStore((state) => state.chats[projectId]);

      const projectMessages = useMemo(() => {
            return project?.messages || [];
      }, [project]);

      const count = projectMessages.length;

      return { projectMessages, count };
}