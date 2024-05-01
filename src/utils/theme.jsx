import { deepPurple, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material";
export const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode, // 'light' or 'dark'
      primary: {
        main: deepPurple[500],
      },
      secondary: {
        main: purple["A200"],
      },
      text: {
        primary: mode === "light" ? "#212121" : "#ffffff",
        secondary: mode === "light" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)",
      },
      background: {
        default: mode === "light" ? "#ffffff" : "#121212",
        paper: mode === "light" ? "#ffffff" : "#1e1e1e",

          },

    },
      typography: {
        fontFamily: [
          "Poppins",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        h1: {
          fontSize: "2.5rem", // 40px
          fontWeight: "bold",
          "@media (max-width:600px)": {
            fontSize: "2rem", // 32px
          },
          "@media (min-width:960px)": {
            fontSize: "3rem", // 48px
          },
        },
        h2: {
          fontSize: "2rem", // 32px
          fontWeight: "bold",
          "@media (max-width:600px)": {
            fontSize: "1.5rem", // 24px
          },
          "@media (min-width:960px)": {
            fontSize: "2.25rem", // 36px
          },
        },
        h3: {
          fontSize: "1.75rem", // 28px
          fontWeight: "bold",
          "@media (max-width:600px)": {
            fontSize: "1.25rem", // 20px
          },
          "@media (min-width:960px)": {
            fontSize: "2rem", // 32px
          },
        },
        h4: {
          fontSize: "1.5rem", // 24px
          fontWeight: "bold",
          "@media (max-width:600px)": {
            fontSize: "1.125rem", // 18px
          },
          "@media (min-width:960px)": {
            fontSize: "1.75rem", // 28px
          },
        },
        h5: {
          fontSize: "1.25rem", // 20px
          fontWeight: "bold",
          "@media (max-width:600px)": {
            fontSize: "1rem", // 16px
          },
          "@media (min-width:960px)": {
            fontSize: "1.5rem", // 24px
          },
        },
        h6: {
          fontSize: "1rem", // 16px
          fontWeight: "bold",
          "@media (max-width:600px)": {
            fontSize: "0.875rem", // 14px
          },
          "@media (min-width:960px)": {
            fontSize: "1.25rem", // 20px
          },
        },
        body1: {
          fontSize: "1rem", // 16px
          lineHeight: 1.6,
          "@media (max-width:600px)": {
            fontSize: "0.875rem", // 14px
          },
          "@media (min-width:960px)": {
            fontSize: "1.125rem", // 18px
          },
        },
        body2: {
          fontSize: "0.875rem", // 14px
          lineHeight: 1.6,
          "@media (max-width:600px)": {
            fontSize: "0.75rem", // 12px
          },
          "@media (min-width:960px)": {
            fontSize: "1rem", // 16px
          },
        },
        subtitle1: {
          fontSize: "1.25rem", // 20px
          lineHeight: 1.6,
          "@media (max-width:600px)": {
            fontSize: "1rem", // 16px
          },
          "@media (min-width:960px)": {
            fontSize: "1.5rem", // 24px
          },
        },
        caption: {
          fontSize: "0.75rem", // 12px
          lineHeight: 1.4,
          "@media (max-width:600px)": {
            fontSize: "0.625rem", // 10px
          },
          "@media (min-width:960px)": {
            fontSize: "0.875rem", // 14px
          },
        },
      },
    });
}

