import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getTheme } from "./theme";
import PropTypes from "prop-types";
import { CustomThemeProvider } from "../components/styles/SkillsCards";
const ThemeToggleContext = createContext({
  toggleTheme: () => {},
  mode: "dark", // Add default mode to context value for better typing
});

export const useThemeToggle = () => useContext(ThemeToggleContext);

export const ThemeProviderWrapper = ({ children }) => {
  const [mode, setMode] = useState(
    () => localStorage.getItem("themeMode") || "dark"
  );

  // Toggle theme and update mode state and localStorage
  const toggleTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    localStorage.setItem("themeMode", newMode);
    setMode(newMode);
    window.location.reload();
  };
  const theme = useMemo(() => getTheme(mode), [mode]);

  // Effect to update body's background color based on theme
  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    document.body.style.color = theme.palette.text.primary;
  }, [theme]);

  // Update theme if external changes are made to localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const newMode = localStorage.getItem("themeMode") || "dark";
      setMode(newMode);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);


  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CustomThemeProvider theme={theme}>
          <CssBaseline /> {/* Normalize CSS and apply background globally */}
          {children}
        </CustomThemeProvider>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

// Define prop types
ThemeProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
