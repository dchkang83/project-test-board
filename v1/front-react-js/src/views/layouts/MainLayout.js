import { Component } from "react";
import { Outlet } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

// const theme = createTheme();
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


class MainLayout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container fixed>
          <Outlet />
        </Container>
      </ThemeProvider>
    )
  }
}

export default MainLayout;