import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import styled from '@emotion/styled'

import { Link } from 'react-router-dom';

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const DivStyle = styled.div`
//   background-color: hotpink;
//   font-size: 24px;
//   border-radius: 4px;
//   padding: 32px;
//   text-align: center;
//   &:hover {
//     color: white;
//   }
// `
// const Example = styled('span')`
//   color: lightgreen;
//   & > a {
//     color: hotpink;
//   }
// `

// const Button = styled.button`
//   color: turquoise;
// `


// export const Button = styled.div`
//   width: 125px;
//   height: 50px;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   padding: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 10px;
//   cursor: pointer;
//   background-color: #fff;

//   &:hover {
//     background-color: #ffcfcf;
//     color: #ffffff;
//   }
//   ${ButtonStyle};
// `;

// Button.defaultProps = {
//   type: "State",
//   color: "#ffcfcf",
// };

// const StyledLink = styled(Link)`
//     text-decoration: none;

//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `;

const menuItems = [
  {
    menuTitle: "Dashboard",
    pageURL: "/dashboard/Dashboard"
  },
  {
    menuTitle: "Sample-LIST",
    pageURL: "/sample/lists"
  },
  {
    menuTitle: "Board",
    pageURL: "/test/board"
  },
  {
    menuTitle: "게시판-작업중",
    pageURL: "/test/boardList/1"
  },
  {
    menuTitle: "Board2",
    pageURL: "/test/boardList2/1"
  },
  {
    menuTitle: "dashboardTest",
    pageURL: "/dashboard/Test"
  }
];

const ResponsiveAppBar = () => {
  // const { history } = props;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            component="div"
            variant="h6"
            noWrap
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/" className="text-link">
            LOGO
            </Link>
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {menuItems.map((menuItem, key) => (
                <MenuItem
                  component={Link} to={menuItem.pageURL}
                  key={key}
                  onClick={() => handleCloseNavMenu(menuItem.pageURL)}>
                  <Typography textAlign="center">{menuItem.menuTitle}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menuItems.map((menuItem, key) => (
              <Button
                component={Link} to={menuItem.pageURL}
                key={key}
                onClick={() => handleCloseNavMenu(menuItem.pageURL)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {menuItem.menuTitle}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
