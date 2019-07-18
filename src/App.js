import React from "react";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./theme";
import Custom from "./components/Custom";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Custom />
      </div>
    </ThemeProvider>
  );
}

export default App;
