import {create} from "zustand";

type ThemeStoreInterface = {
    currentTheme: "light" | "dark";
    setTheme: (toTheme: "light" | "dark") => void;
    toggleTheme: () => void;
}


export const useThemeStore = create<ThemeStoreInterface>(
    (set): ThemeStoreInterface => ({
        currentTheme: "light",
        setTheme: (toTheme: "light" | "dark") => set({currentTheme: toTheme}),
        toggleTheme: () => set((state: ThemeStoreInterface) => ({currentTheme: state.currentTheme === "light" ? "dark" : "light"})),
    })
);



