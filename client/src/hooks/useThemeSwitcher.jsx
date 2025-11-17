import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  // Default to "light" if no theme is stored
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both classes first
    root.classList.remove("light", "dark");
    // Add the current theme
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, activeTheme]);

  return [activeTheme, setTheme];
};

export default useThemeSwitcher;
