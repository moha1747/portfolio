import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import PropTypes from "prop-types"; 
import { getTheme } from './theme';

const ThemeToggleContext = createContext({
  toggleTheme: () => {}
});

export const useThemeToggle = () => useContext(ThemeToggleContext);

export const ThemeProviderWrapper = ({ children }) => {
  const [mode, setMode] = useState(() => localStorage.getItem('themeMode') || 'dark');

  const toggleTheme = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeMode', newMode);
    setMode(newMode);
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  // Effect to update body's background color
  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    document.body.style.color = theme.palette.text.primary;
  }, [theme]);

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normalize the CSS and ensure the background applies globally */}
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};


// Define prop types
ThemeProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired, // 'node' covers anything that can be rendered: numbers, strings, elements, or an array (or fragment) containing these types.
};
