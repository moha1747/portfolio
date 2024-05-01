
import Navbar from "./components/Navbar";
import { ThemeProviderWrapper } from "./utils/ThemeProviderWrapper";



function App() {
  return (
    <ThemeProviderWrapper>
      <Navbar />
    </ThemeProviderWrapper>
  );
}

export default App;
