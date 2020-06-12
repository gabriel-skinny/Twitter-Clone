import React, { useState } from 'react';
import { ThemeProvider } from "styled-components"

import dark from "./styles/themes/dark"
import light from "./styles/themes/light"

import Routes from "./routes"
import GlobalStyle from "./styles/global"

function App() {
  const [theme, setTheme] = useState(dark)

  function toggleTheme(){
    setTheme(theme.title === "light" ? dark : light)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Routes toggleTheme={toggleTheme} />
      <GlobalStyle/>
    </ThemeProvider>
  )
  
}

export default App;
