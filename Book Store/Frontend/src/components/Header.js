import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu'; // Import for mobile view

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#181C14" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white", display: 'flex', alignItems: 'center' }}>
            <Typography>
              <img
                src="https://seeklogo.com/images/B/bookshop-design-logo-67B56106FA-seeklogo.com.png"
                width={isMobile ? 70 : 100} // Adjust logo size based on screen size
                alt="Logo"
              />
            </Typography>
          </NavLink>
          {isMobile ? (
            <MenuIcon sx={{ ml: 'auto', cursor: 'pointer' }} />
          ) : (
            <Tabs
              sx={{ ml: "auto" }}
              textColor="inherit"
              indicatorColor="primary"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
              <Tab LinkComponent={NavLink} to="/books" label="Books" />
              <Tab LinkComponent={NavLink} to="/about" label="About Us" />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
