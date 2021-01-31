import React from 'react';
import { Router } from './routes/Router';
import { theme } from "./styled";
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import { ThemeProvider } from "@material-ui/core";
import GlobalState from './global/GlobalState';


function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme = {theme}>
      <ScopedCssBaseline />
      <GlobalState>
      <Router/>
      </GlobalState>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
