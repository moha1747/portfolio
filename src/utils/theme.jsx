import { purple, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material";
export const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode, // 'light' or 'dark'
      primary: {
        main: mode === "light" ? "#854ce6" : purple["A200"], // Example colors
      },
      secondary: {
        main: mode === "light" ? grey[500] : grey[700],
      },
      text: {
        primary: mode === "dark" ? "#212121" : "#ffffff",
        secondary:
          mode === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)",
      },
      background: {
        default: mode === "dark" ? "#ffffff" : "#000",
        paper: mode === "dark" ? "#ffffff" : "#000",

        border:
          mode === "dark"
            ? "rgba(255, 255, 255, 0.125)"
            : "rgba(0, 0, 0, 0.125)",
        boxShadow:
          mode === "dark"
            ? "rgba(23, 92, 230, 0.15)"
            : "rgba(220, 220, 220, 0.3)",
        text_primary:
          mode === "dark" ? "rgba(255, 255, 255, 0.87)" : "rgba(0, 0, 0, 0.87)",
        text_secondary:
          mode === "dark" ? "rgba(255, 255, 255, 0.54)" : "rgba(0, 0, 0, 0.54)",
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

        "@media (max-width:600px)": {
          fontSize: "1.25rem", // 20px
        },
        "@media (min-width:960px)": {
          fontSize: "2rem", // 32px
        },
      },
      h4: {
        fontSize: "1.5rem", // 24px

        "@media (max-width:600px)": {
          fontSize: "1.125rem", // 18px
        },
        "@media (min-width:960px)": {
          fontSize: "1.75rem", // 28px
        },
      },
      h5: {
        fontSize: "1.25rem", // 20px

        "@media (max-width:600px)": {
          fontSize: "1rem", // 16px
        },
        "@media (min-width:960px)": {
          fontSize: "1.5rem", // 24px
        },
      },
      h6: {
        fontSize: "1rem", // 16px

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


