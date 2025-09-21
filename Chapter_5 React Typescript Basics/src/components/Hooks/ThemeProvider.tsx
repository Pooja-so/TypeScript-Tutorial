import { useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

type ThemeType = "light" | "dark";

// ------------- 3. Creating Theme Provider ------------------
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Creating state varaibale for theme, so that when theme changes the UI can re-render and show the current theme
  const [theme, setTheme] = useState<ThemeType>("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    // Passing theme sate variable and toggleTheme function
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
