import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  theme: string | null;
  actions: {
    setTheme: (theme: string | null) => void;
  };
};

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      // theme: null will respect the OS preference
      theme: null,
      actions: {
        setTheme: (theme) => set(() => ({ theme })),
      },
    }),
    {
      name: "theme",
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);

export default useThemeStore;
