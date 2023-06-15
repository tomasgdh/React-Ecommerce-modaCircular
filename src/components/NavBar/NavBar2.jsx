import React from 'react';

import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';

const classes = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
};

const NavBar2 = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const categoryOpen = Boolean(categoryAnchorEl);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleCategoryMenu = (event) => {
      setCategoryAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setCategoryAnchorEl(null);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>Contact</MenuItem>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Products</MenuItem>
              <MenuItem onClick={handleCategoryMenu}>
                Category
              </MenuItem>
            </Menu>
            <Typography variant="h6" className={classes.title}>
              Logo
            </Typography>
          </Toolbar>
        </AppBar>
        <Menu
          id="category-menu"
          anchorEl={categoryAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={categoryOpen}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Sweater</MenuItem>
          <MenuItem onClick={handleClose}>Pants</MenuItem>
          <MenuItem onClick={handleClose}>T-shirts</MenuItem>
        </Menu>
      </div>
    );
  };

export default NavBar2;
