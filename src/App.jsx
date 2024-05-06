
import { Container } from "@mui/material";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/styles/SkillsCards";

import { ThemeProviderWrapper } from "./utils/ThemeProviderWrapper";
import { getTheme } from "./utils/theme";




function App() {
  return (
    <ThemeProviderWrapper theme={getTheme}>
      <Container maxWidth="lg">
        <Navbar />
        <Home />
        <Skills />
      </Container>
    </ThemeProviderWrapper>
  );
}

export default App;
