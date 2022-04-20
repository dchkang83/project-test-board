import { Component } from "react";
import { Outlet } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import AppBar from '~/views/layouts/AppBar';

// const theme = createTheme();
const theme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
      // main: '#1976d2',
    // },
  },
});

class MainLayout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        {/* <Container maxWidth="xl"> */}
          <AppBar />

          <Outlet />
        {/* </Container> */}
      </ThemeProvider>
    )
  }
}

export default MainLayout;