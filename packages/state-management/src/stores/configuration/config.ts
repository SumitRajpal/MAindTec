// store/sidebarStore.ts
import { z } from 'zod';
import { create } from 'zustand';

const sidebarIdSchema = z.string().min(1, 'Sidebar ID must be a non-empty string');
const navBarSchema = z.boolean().nullable();

interface SidebarState {
      activeSidebar: string | null;
      activeNavbar: boolean | null;
      setSidebar: (id: string) => void;
      setNavbar: (id: boolean) => void;
      getActiveSidebar: () => string | null;
}

export const useSidebarStore = create<SidebarState>((set, get) => ({
      activeSidebar: null,
      activeNavbar: null,
      setSidebar: (id: string) => {
            const result = sidebarIdSchema.safeParse(id);
            if (result.success) {
                  set({ activeSidebar: id });
            } else {
                  console.error('Invalid sidebar ID:', result.error.format());
            }
      },
      setNavbar: (value: boolean) => {
            const result = navBarSchema.safeParse(value);
            if (result.success) {
                  set({ activeNavbar: value });
            } else {
                  console.error('Invalid sidebar ID:', result.error.format());
            }
      },

      getActiveSidebar: () => get().activeSidebar,
}));
