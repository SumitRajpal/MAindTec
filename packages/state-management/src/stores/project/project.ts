// stores/projectStore.ts
import { z } from 'zod';
import { create } from 'zustand';

const projectIdSchema = z.string();

interface ProjectState {
      projectId: string | null;
      setProjectId: (id: unknown) => void;
      getProjectId: () => string | null;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
      projectId: null,
      setProjectId: (id) => {
            const result = projectIdSchema.safeParse(id);
            if (!result.success) {
                  console.error('Invalid projectId:', result.error.format());
                  return;
            }
            set({ projectId: result.data });
      },

      getProjectId: () => get().projectId,
}));

const TabSchema = z.object({
      id: z.string(),
      name: z.string(),
});

type Tab = z.infer<typeof TabSchema>;

type TabState = {
      tabsMap: Map<string, Tab>;
      tabs: Tab[];
      currentTab?: Tab;
      setTab: (tab: Tab) => void;
      getTabs: () => Tab[];
      deleteTab: (id: string) => void;
      setCurrentTab: (tab: Tab) => void;
      getCurrentTab: () => Tab | undefined;
};

export const useTabStore = create<TabState>((set, get) => ({
      tabsMap: new Map(),
      tabs: [],
      currentTab: undefined,

      setTab: (tab) => {
            const validatedTab = TabSchema.parse(tab);
            const current = get().tabsMap;

            if (current.has(validatedTab.id)) return;

            const newMap = new Map(current);
            newMap.set(validatedTab.id, validatedTab);

            set({
                  tabsMap: newMap,
                  tabs: Array.from(newMap.values()),
            });
      },

      getTabs: () => {
            return get().tabs;
      },

      deleteTab: (id) => {
            const current = get().tabsMap;
            if (!current.has(id)) return;

            const newMap = new Map(current);
            newMap.delete(id);

            const updatedTabs = Array.from(newMap.values());
            const currentTab = get().currentTab;
            const isDeletedCurrent = currentTab?.id === id;

            set({
                  tabsMap: newMap,
                  tabs: updatedTabs,
                  currentTab: isDeletedCurrent ? undefined : currentTab,
            });
      },

      setCurrentTab: (tab) => {
            const validatedTab = TabSchema.parse(tab);
            set({ currentTab: validatedTab });
      },

      getCurrentTab: () => {
            return get().currentTab;
      },
}));