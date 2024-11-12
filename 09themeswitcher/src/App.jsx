import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Contexts/theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Actual change in theme using pure JS
  useEffect(() => {
    const x = document.querySelector("html").classList;
    x.remove("light", "dark");
    x.add(themeMode);
  }, [themeMode]);

  return (
    // Direct access to {...}
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          <ThemeBtn />
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
