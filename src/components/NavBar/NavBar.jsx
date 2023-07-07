import { useEffect, useState } from "react";

import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Avatar,Button,Tooltip,MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

// Components
import CartWidget from "../CartWidget/CartWidget";
import LogoMaria from "../Logo/Logo";

// Styles
import "./NavBar.css";

const pages = [
  { title: "Home", url: "/" },
  //{ title: "Products", url: "/products" },
  { title: "Category", url: "/category" },
  { title: "Contact", url: "/contact" },
  { title: "About", url: "/about" },
];
const categories = [
  { title: "Sweater", url: "/category/Sweater" },
  { title: "Pants", url: "/category/Pant" },
  { title: "T-shirts", url: "/category/T-shirt" },
  { title: "Coats", url: "/category/Coat" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const titleBar = "Moda Circular";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
  const [categoryOpen, setCategoryOpen] = useState(Boolean(categoryAnchorEl));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setCategoryAnchorEl(null);
    setCategoryOpen(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCategoryMenu = (event) => {
    setCategoryAnchorEl(event.currentTarget);
    setCategoryOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      //if (window.innerWidth < 600) {
      if (categoryOpen) {
        setCategoryAnchorEl(null);
        setCategoryOpen(false);
      }
      //}
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [categoryOpen]);

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link className="li2" to="/">
              {titleBar}
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
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title}>
                  <Typography textAlign="center">
                    <Link
                      className="li"
                      onClick={
                        page.title === "Category"
                          ? handleCategoryMenu
                          : handleCloseNavMenu
                      }
                      to={page.title === "Category" ? "#" : page.url}
                    >
                      {page.title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/">
            <LogoMaria />
          </Link>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {titleBar}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={
                  page.title === "Category"
                    ? handleCategoryMenu
                    : handleCloseNavMenu
                }
                //href={page.title === "Category" ? "" : page.url}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  className="li2"
                  to={page.title === "Category" ? "#" : page.url}
                >
                  {page.title}
                </Link>
              </Button>
            ))}
          </Box>
          <Box>
             <CartWidget />                             
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
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
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
          <Menu
            id="category-menu"
            anchorEl={categoryAnchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={categoryOpen}
            onClose={handleCloseNavMenu}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.title} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link className="li" to={cat.url}>
                    {cat.title}
                  </Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
