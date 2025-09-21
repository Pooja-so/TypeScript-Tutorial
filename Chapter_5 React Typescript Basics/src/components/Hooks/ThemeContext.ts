import { createContext } from "react";

// --------  1.Type declarations-------------
type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

// ---------------- 2. Creating Theme Context object ----------
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});