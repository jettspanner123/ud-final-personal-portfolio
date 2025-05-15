import {create} from "zustand";

type ThemeStoreInterface = {
    currentTheme: "light" | "dark";
    setTheme: (toTheme: "light" | "dark") => void;
    toggleTheme: () => void;
}


export const useThemeStore = create<ThemeStoreInterface>(
    (set): ThemeStoreInterface => ({
        currentTheme: "dark",
        setTheme: (toTheme: "light" | "dark") => set({currentTheme: toTheme}),
        toggleTheme: () => set((state: ThemeStoreInterface) => ({currentTheme: state.currentTheme === "light" ? "dark" : "light"})),
    })
);


export class ApplicationTheme {
    public static getBackgroundColor(someTheme: "light" | "dark"): string {
        return someTheme === "dark" ? "black" : "white";
    }

    public static getForegroundColor(someTheme: "light" | "dark"): string {
        return someTheme === "dark" ? "white" : "black";
    }
}



