

import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core';
import { AccountCircle, Menu as MenuIcon, MoreVert, Settings } from '@material-ui/icons';
import logoAppiness from 'assets/images/appiness-logo.png';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isAuthenticated } from 'utils/common';
import { headerStyle, updateSidebarStatus } from './';

function Header(props) {
  
  const classes = headerStyle();
  const [myProfileAnchorEl, setMyProfileAnchorEl] = useState(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const isMyProfileOpen = Boolean(myProfileAnchorEl);
  const isSettingsOpen = Boolean(settingsAnchorEl);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const dispatch = useDispatch();

  // to open profile icon menu
  const handleProfileMenuOpen = (event) => {
    setMyProfileAnchorEl(event.currentTarget);
  };

  // to open settings icon menu
  const handleSettingsMenuOpen = (event) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  // to close opened menu
  const handleMenuClose = () => {
    setMyProfileAnchorEl(null);
    setSettingsAnchorEl(null);
    handleMobileMenuClose();
  };

  // to close opened menu for mobile
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // to open sidebar menu for mobile
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // to open sidebar menu for desktop
  const handleSidebarOpen = () => {
    dispatch(updateSidebarStatus());
  };

  // set the theme in local storage
  const handleSettingsItemClick = (theme) => {
    localStorage.setItem('theme', theme);
    window.location.reload(false);
  };

  return (
    <AppBar position="fixed" className={`${!isAuthenticated() && 'header'}`}>
      <Toolbar variant="dense">
        {
          !isAuthenticated() ?
            <>
              <img src={logoAppiness} alt="Appiness Logo" height="30" />
              <div className={classes.grow} />
              <Button onClick={() => props.updateLoginModal(!props.isLoginPopupEnable)} edge="end" size="small" variant="outlined" color='primary'>
                Login
              </Button>
            </> :
            <>
              <IconButton id="btnMenuIcon" onClick={handleSidebarOpen} edge="start" color="inherit">
                <MenuIcon />
              </IconButton>
              <img src={localStorage.getItem('theme') === 'orange' ? logoAppiness : logoAppiness} alt="Logo" height="30" />
              <div className={classes.grow} />

              {/* mobile */}
              <div className={classes.sectionMobile}>
                <IconButton id="btnMobileMenu" style={{ padding: 0 }} onClick={handleMobileMenuOpen} aria-label="show more" aria-controls={'mobileMenuId'} aria-haspopup="true" color="inherit">
                  <MoreVert />
                </IconButton>
                <Menu className='mobile-menu' open={isMobileMenuOpen} onClose={handleMobileMenuClose} anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                  <MenuItem className='mobile-menu-item' onClick={handleProfileMenuOpen}>
                    <IconButton>
                      <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                  </MenuItem>
                  <MenuItem className='mobile-menu-item' onClick={handleSettingsMenuOpen}>
                    <IconButton>
                      <Settings />
                    </IconButton>
                    <p>Settings</p>
                  </MenuItem>
                </Menu>
              </div>

              {/* desktop */}
              <div className={classes.sectionDesktop}>
                <IconButton id="btnProfile" onClick={handleProfileMenuOpen} color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu open={isMyProfileOpen} onClose={handleMenuClose} anchorEl={myProfileAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                  <NavLink to="/my-profile" ><MenuItem id="liMyprofile">My Profile</MenuItem></NavLink>
                  <NavLink to="/settings"><MenuItem id="liSettings">Settings</MenuItem></NavLink>
                  <NavLink to="/logout"><MenuItem id="liLogout" >Logout</MenuItem></NavLink>
                </Menu>

                <IconButton id="btnSettings" onClick={handleSettingsMenuOpen} color="inherit">
                  <Settings />
                </IconButton>
                <Menu open={isSettingsOpen} onClose={handleMenuClose} anchorEl={settingsAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                  <MenuItem id="liDefault" onClick={() => handleSettingsItemClick('default')}>
                    Default
                  </MenuItem>
                  <MenuItem id="liPurple" onClick={() => handleSettingsItemClick('purple')}>
                    Purple
                  </MenuItem>
                  <MenuItem id="liGreen" onClick={() => handleSettingsItemClick('green')}>
                    Green
                  </MenuItem>
                  <MenuItem id="liOrange" onClick={() => handleSettingsItemClick('orange')}>
                    Orange
                  </MenuItem>
                </Menu>
              </div>
            </>
        }
      </Toolbar>
    </AppBar>
  );
}
export default Header;
