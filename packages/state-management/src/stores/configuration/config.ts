// store/sidebarStore.ts
import { z } from 'zod';
import { create } from 'zustand';

const sidebarIdSchema = z.string().min(1, 'Sidebar ID must be a non-empty string');

interface SidebarState {
      activeSidebar: string | null;
      setSidebar: (id: string) => void;
      getActiveSidebar: () => string | null;
}

export const useSidebarStore = create<SidebarState>((set, get) => ({
      activeSidebar: null,

      setSidebar: (id: string) => {
            const result = sidebarIdSchema.safeParse(id);
            if (result.success) {
                  set({ activeSidebar: id });
            } else {
                  console.error('Invalid sidebar ID:', result.error.format());
            }
      },

      getActiveSidebar: () => get().activeSidebar,
}));
