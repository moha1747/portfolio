
import { Container } from "@mui/material";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ThemeProviderWrapper } from "./utils/ThemeProviderWrapper";



function App() {
  return (
    <ThemeProviderWrapper>
      <Container maxWidth="lg">
        <Navbar />
        <Home />
      </Container>
    </ThemeProviderWrapper>
  );
}

export default App;
