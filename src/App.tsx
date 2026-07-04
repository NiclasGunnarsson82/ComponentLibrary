import { Button } from "./components/Button";
import { ThemeProvider } from "./utils/ThemeContext";

const App = () => {
  return(
    <ThemeProvider>
      <>
        <h1>Design System</h1>
        <Button
            label="Send">
        </Button>
      </>
    </ThemeProvider>

    
  );
};

export default App;