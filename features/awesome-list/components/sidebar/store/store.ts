import create from 'zustand';

type SidebarStore = {
	isNavigationOpen: boolean;
	setNavigationStatus: () => void;
	getNavigationStatus: () => boolean;
};

const useSidebarStore = create<SidebarStore>((set: any, get: any) => ({
  isNavigationOpen: false,
  setNavigationStatus: () => set((state: SidebarStore) => ({
    isNavigationOpen: !state.isNavigationOpen,
  })),

  getNavigationStatus: () => get((state: SidebarStore) => state.isNavigationOpen),
}));

export { useSidebarStore };
