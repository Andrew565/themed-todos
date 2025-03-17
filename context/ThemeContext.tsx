import React, { createContext, useState } from "react";
import { Theme, WildWestTheme } from "../types/theme";

export const ThemeContext = createContext<Theme | null>(null);
export const ThemeChangerContext = createContext<React.Dispatch<React.SetStateAction<Theme>> | null>(null);

export default function ThemeSelectorProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(WildWestTheme);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeChangerContext.Provider value={setTheme}>{children}</ThemeChangerContext.Provider>
    </ThemeContext.Provider>
  );
}
