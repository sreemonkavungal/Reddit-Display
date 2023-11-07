import React from "react";
import RedditDisplay from "./RedditDisplay";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ textAlign: "center" }}>
        <h1>Reddit Data Display</h1>
        <RedditDisplay />
      </div>
    </ThemeProvider>
  );
}

export default App;
