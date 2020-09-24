

import { Avatar, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import profilePic from 'assets/images/profile.png';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { SIDEBAR } from 'utils/constant';
import { sidebarStyles } from './';
import { getUserProfile } from 'utils/common';

function Sidebar() {
  const classes = sidebarStyles();
  const { open } = useSelector((state) => ({ open: state.layoutReducer.open }));
  const location = useLocation();

  const sidebarContent = (
    <List>
      {SIDEBAR.map(item => (
        <Link to={item.route}>
          <ListItem selected={location.pathname.includes(item.route)} className={open ? 'sidebar-item' : ''} button key={item.name}>
            <ListItemIcon className={open ? 'sidebar-icon' : ''}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>
      ))}
    </List>
  );

  const drawerDesktopContent = (
    <>
      <div className="profile-section">
        <Avatar src={profilePic} alt="User Profile" className="profile-image" />
        {open && (
          <>
            <div>{getUserProfile() !== null && getUserProfile().email}</div>
            <div>Appiness World</div>
          </>
        )}
      </div>
      <Divider />
      {sidebarContent}
    </>
  );

  const drawerMobileContent = (
    <>
      <div className="profile-section">
        <Avatar src={profilePic} alt="User Profile" className="profile-image" />
        <div>{getUserProfile() !== null && getUserProfile().email}</div>
        <div>Appiness World.</div>
      </div>
      <Divider />
      {sidebarContent}
    </>
  );

  return (
    <>
      <div className={classes.sectionDesktop}>
        <Drawer variant="permanent" className={clsx(classes.drawer, { [classes.drawerOpen]: open, [classes.drawerCloseDesktop]: !open })} classes={{ paper: clsx({ [classes.drawerOpen]: open, [classes.drawerCloseDesktop]: !open }) }}>
          {drawerDesktopContent}
        </Drawer>
      </div>
      <div className={classes.sectionMobile}>
        <Drawer variant="permanent" classes={{ paper: clsx({ [classes.drawerOpen]: !open, [classes.drawerCloseMobile]: open }) }}>
          {drawerMobileContent}
        </Drawer>
      </div>
    </>
  );
}
export default Sidebar;
