
import { Container, Box, Typography, Button } from "@mui/material";
import { ThemeProviderWrapper, useThemeToggle } from "./utils/ThemeProviderWrapper";

const ThemeToggleButton = () => {
  const { toggleTheme } = useThemeToggle();

  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};

function App() {
  return (
    <ThemeProviderWrapper>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "background.default", // Using theme background color
          }}
        >
          <Typography variant="h1">Theme Example</Typography>
          <ThemeToggleButton />
        </Box>
      </Container>
    </ThemeProviderWrapper>
  );
}

export default App;
